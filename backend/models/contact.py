from datetime import datetime
from pydantic import BaseModel, ConfigDict, EmailStr, Field


class ContactSubmissionCreate(BaseModel):
    """Schema for creating a new contact submission."""

    name: str = Field(..., min_length=1, max_length=100, description="Name of the person contacting")
    email: EmailStr = Field(..., description="Email address for reply")
    message: str = Field(..., min_length=10, max_length=1000, description="Message content")


class ContactSubmission(BaseModel):
    """Schema for contact submission with all fields (response model)."""

    model_config = ConfigDict(populate_by_name=True)

    id: str = Field(..., alias="_id")
    name: str
    email: str
    message: str
    timestamp: datetime
    status: str = "new"