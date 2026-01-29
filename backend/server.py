from contextlib import asynccontextmanager
from pathlib import Path
import os
import logging
from typing import List
import uuid
from datetime import datetime, timezone

from dotenv import load_dotenv
from fastapi import FastAPI, APIRouter
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, ConfigDict, Field
from starlette.middleware.cors import CORSMiddleware

from routes import contact

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# Required environment variables for MongoDB Atlas
MONGO_URI = os.getenv("MONGO_URI") or os.getenv("MONGO_URL")
DB_NAME = os.getenv("DB_NAME")
if not MONGO_URI or not DB_NAME:
    raise ValueError(
        "Missing required environment variables. Set MONGO_URI (or MONGO_URL) and DB_NAME in .env"
    )

# MongoDB connection (lazy; verified on startup)
client = AsyncIOMotorClient(
    MONGO_URI,
    serverSelectionTimeoutMS=5000,
    maxPoolSize=10,
    minPoolSize=1,
)
db = client[DB_NAME]

@asynccontextmanager
async def lifespan(app: FastAPI):
    """Verify MongoDB connection on startup; close client on shutdown."""
    try:
        await client.admin.command("ping")
        logging.getLogger(__name__).info("MongoDB connection verified.")
    except Exception as e:
        logging.getLogger(__name__).error("MongoDB connection failed: %s", e)
        raise
    yield
    client.close()


# Create the main app without a prefix
app = FastAPI(lifespan=lifespan)

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Set database reference for contact routes
contact.router.db = db


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# CORS first (middleware runs in reverse order)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").strip().split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include contact routes in api_router before mounting (order matters)
api_router.include_router(contact.router, tags=["contact"])

# Include the router in the main app
app.include_router(api_router)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)