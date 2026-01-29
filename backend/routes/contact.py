from fastapi import APIRouter, HTTPException, status
from motor.motor_asyncio import AsyncIOMotorDatabase
from datetime import datetime
from typing import List
import logging
from bson import ObjectId

from models.contact import ContactSubmissionCreate, ContactSubmission

router = APIRouter()
logger = logging.getLogger(__name__)


def get_db():
    """Dependency to get database instance - will be set in server.py"""
    return router.db


@router.post("/contact", response_model=ContactSubmission, status_code=status.HTTP_201_CREATED)
async def create_contact_submission(submission: ContactSubmissionCreate):
    """
    Create a new contact form submission.
    
    Args:
        submission: Contact form data (name, email, message)
    
    Returns:
        Created contact submission with ID and timestamp
    
    Raises:
        HTTPException: If database operation fails
    """
    try:
        db = get_db()
        
        # Prepare document for MongoDB
        submission_dict = submission.model_dump()
        submission_dict["timestamp"] = datetime.utcnow()
        submission_dict["status"] = "new"
        
        # Insert into database
        result = await db.contact_submissions.insert_one(submission_dict)
        
        # Retrieve the created document
        created_submission = await db.contact_submissions.find_one({"_id": result.inserted_id})
        
        if not created_submission:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail="Failed to create contact submission"
            )
        
        # Convert ObjectId to string for response
        created_submission["_id"] = str(created_submission["_id"])
        
        logger.info(f"Contact submission created: {created_submission['_id']} from {submission.email}")
        
        return ContactSubmission(**created_submission)
        
    except Exception as e:
        logger.error(f"Error creating contact submission: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to save contact submission: {str(e)}"
        )


@router.get("/contact", response_model=List[ContactSubmission])
async def get_contact_submissions():
    """
    Retrieve all contact form submissions.
    Sorted by timestamp (newest first).
    
    Returns:
        List of all contact submissions
    
    Raises:
        HTTPException: If database operation fails
    """
    try:
        db = get_db()
        
        # Fetch all submissions, sorted by timestamp descending
        cursor = db.contact_submissions.find().sort("timestamp", -1)
        submissions = await cursor.to_list(length=1000)
        
        # Convert ObjectId to string
        for submission in submissions:
            submission["_id"] = str(submission["_id"])
        
        logger.info(f"Retrieved {len(submissions)} contact submissions")
        
        return [ContactSubmission(**submission) for submission in submissions]
        
    except Exception as e:
        logger.error(f"Error retrieving contact submissions: {str(e)}")
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to retrieve contact submissions: {str(e)}"
        )