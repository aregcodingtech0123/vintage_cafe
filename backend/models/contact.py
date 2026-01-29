from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime


class ContactSubmissionCreate(BaseModel):
    """Schema for creating a new contact submission"""
    name: str = Field(..., min_length=1, max_length=100, description="Name of the person contacting")
    email: EmailStr = Field(..., description="Email address for reply")
    message: str = Field(..., min_length=10, max_length=1000, description="Message content")


class ContactSubmission(BaseModel):
    """Schema for contact submission with all fields"""
    id: str = Field(alias="_id")
    name: str
    email: str
    message: str
    timestamp: datetime
    status: str = "new"

    class Config:
        populate_by_name = True
        json_schema_extra = {
            "example": {
                "_id": "507f1f77bcf86cd799439011",
                "name": "John Doe",
                "email": "john@example.com",
                "message": "I would love to visit your cafe!",
                "timestamp": "2026-01-29T10:30:45.123Z",
                "status": "new"
            }
        }