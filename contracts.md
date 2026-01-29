# Vintage Cafe Landing Page - API Contracts

## Overview
This document defines the API contracts between frontend and backend for the Vintage Cafe landing page.

## Current Mock Data
Located in `/app/frontend/src/utils/mock.js`:
- `submitContactForm(formData)` - Mock contact form submission
- `contactSubmissions` - Array storing mock submissions

## Backend Implementation Required

### 1. MongoDB Models

#### ContactSubmission Model
```python
{
    "_id": ObjectId,
    "name": String (required),
    "email": String (required, email format),
    "message": String (required),
    "timestamp": DateTime (auto-generated),
    "status": String (default: "new", options: ["new", "read", "replied"])
}
```

### 2. API Endpoints

#### POST /api/contact
**Purpose**: Submit a contact form inquiry

**Request Body**:
```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I would love to visit your cafe!"
}
```

**Response (200)**:
```json
{
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I would love to visit your cafe!",
    "timestamp": "2026-01-29T10:30:45.123Z",
    "status": "new"
}
```

**Error Response (400)**:
```json
{
    "detail": "Invalid email format"
}
```

#### GET /api/contact
**Purpose**: Retrieve all contact form submissions (for admin purposes)

**Response (200)**:
```json
[
    {
        "id": "507f1f77bcf86cd799439011",
        "name": "John Doe",
        "email": "john@example.com",
        "message": "I would love to visit your cafe!",
        "timestamp": "2026-01-29T10:30:45.123Z",
        "status": "new"
    },
    {
        "id": "507f1f77bcf86cd799439012",
        "name": "Jane Smith",
        "email": "jane@example.com",
        "message": "Can I book for a private event?",
        "timestamp": "2026-01-29T11:15:30.456Z",
        "status": "read"
    }
]
```

## Frontend Integration

### Files to Update

1. **Remove Mock Data**: Delete or replace imports from `/app/frontend/src/utils/mock.js`

2. **Update Home.jsx**:
   - Import axios
   - Replace `submitContactForm()` mock call with real API call:
     ```javascript
     const response = await axios.post(`${BACKEND_URL}/api/contact`, formData);
     ```

## Implementation Steps

1. ✅ **Frontend with Mock Data** - COMPLETED
   - Created Home.jsx with full landing page
   - Implemented mock contact form
   - All UI components working

2. ⏳ **Backend Development** - TO DO
   - Create ContactSubmission model in MongoDB
   - Implement POST /api/contact endpoint
   - Implement GET /api/contact endpoint
   - Add error handling and validation

3. ⏳ **Frontend-Backend Integration** - TO DO
   - Remove mock.js imports from Home.jsx
   - Replace mock API calls with real backend calls
   - Test form submission end-to-end

4. ⏳ **Testing** - TO DO
   - Test contact form submission
   - Verify data is saved to MongoDB
   - Test error handling

## Notes
- All backend routes MUST use `/api` prefix for Kubernetes routing
- Use environment variable `REACT_APP_BACKEND_URL` in frontend
- Backend uses FastAPI with MongoDB (motor driver)
- Toast notifications already implemented in frontend
