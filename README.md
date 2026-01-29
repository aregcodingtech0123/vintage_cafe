# Vintage Cafe

A full-stack website for a vintage-style café: landing page, menu, reviews, visit info, and a contact form that persists submissions to MongoDB.

---

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Frontend | React 19, CRACO, Tailwind CSS, Radix UI, Axios |
| Backend  | Python 3, FastAPI, Uvicorn |
| Database | MongoDB (MongoDB Atlas via Motor async driver) |

---

## Project Structure

```
vintage_cafe/
├── frontend/          # React SPA
│   ├── src/
│   │   ├── pages/     # Home (contact form, sections)
│   │   └── components/
│   └── package.json
├── backend/           # FastAPI API
│   ├── models/        # Pydantic models (e.g. contact)
│   ├── routes/        # API routes (e.g. contact)
│   ├── server.py      # App entry, MongoDB connection
│   ├── .env           # Local env (not committed)
│   ├── .env.example   # Env template
│   └── requirements.txt
└── README.md
```

---

## Prerequisites

- **Node.js** (v18+) and **npm** or **yarn**
- **Python** 3.10+
- **MongoDB Atlas** account (or any MongoDB instance)

---

## Setup

### 1. Backend

```bash
cd backend
```

Create a virtual environment and install dependencies:

```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# macOS/Linux:
# source venv/bin/activate

pip install -r requirements.txt
```

Copy the env example and set your values:

```bash
copy .env.example .env   # Windows
# cp .env.example .env  # macOS/Linux
```

Edit `.env` and set:

| Variable     | Description |
|-------------|-------------|
| `MONGO_URI` or `MONGO_URL` | MongoDB connection string (e.g. Atlas `mongodb+srv://...`) |
| `DB_NAME`   | Database name (e.g. `vintage_cafe`) |
| `CORS_ORIGINS` | Optional; comma-separated origins (e.g. `http://localhost:3000`). Default: `*` |

Run the backend:

```bash
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

Backend will be at **http://localhost:8000**. Docs: **http://localhost:8000/docs**.

### 2. Frontend

In a **new terminal**:

```bash
cd frontend
```

Install dependencies and set the backend URL:

```bash
npm install
# or: yarn install
```

Create `.env` in the `frontend` folder (e.g. copy from `.env.example`) and set:

```
REACT_APP_BACKEND_URL=http://localhost:8000
```

Run the frontend:

```bash
npm start
# or: yarn start
```

Frontend will open at **http://localhost:3000**.

---

## Commands Summary

| Action   | Command |
|----------|---------|
| **Run backend**  | From project root: `cd backend` then `uvicorn server:app --reload --host 0.0.0.0 --port 8000` |
| **Run frontend** | From project root: `cd frontend` then `npm start` (or `yarn start`) |

**Exact commands (copy-paste):**

**Backend (from repo root):**
```bash
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8000
```

**Frontend (from repo root, in a separate terminal):**
```bash
cd frontend
npm start
```
*(Or use `yarn start` if you use Yarn.)*

---

## Environment Variables

### Backend (`backend/.env`)

| Variable       | Required | Description |
|----------------|----------|-------------|
| `MONGO_URI` or `MONGO_URL` | Yes | MongoDB connection string (Atlas or other) |
| `DB_NAME`      | Yes | Database name |
| `CORS_ORIGINS` | No  | Comma-separated allowed origins; default `*` |

### Frontend (`frontend/.env`)

| Variable               | Required | Description |
|------------------------|----------|-------------|
| `REACT_APP_BACKEND_URL` | Yes (for API) | Backend base URL (e.g. `http://localhost:8000`) |

---

## API Overview

- **POST /api/contact** — Submit contact form (name, email, message). Stored in MongoDB.
- **GET /api/contact** — List contact submissions (newest first).
- **GET /api/** — Health/root.

Contact submissions are stored in the `contact_submissions` collection.

---

## License

Private/project-specific. All rights reserved.
