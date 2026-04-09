# EduEnroll - Student Course Enrollment Portal

A full-stack web application for students to browse, enroll, and manage online courses. Built with **React + TypeScript** (Frontend) and **FastAPI** (Backend).

![EduEnroll](https://img.shields.io/badge/Frontend-React%20%2B%20TS-blue)
![EduEnroll](https://img.shields.io/badge/Backend-FastAPI-green)
![EduEnroll](https://img.shields.io/badge/Database-SQLite-orange)

## ✨ Features

### Frontend (React + TypeScript)
- Modern, responsive UI with Tailwind CSS
- Clean sidebar navigation
- Compact & beautiful course cards (Coursera-inspired)
- User authentication (Login & Register)
- Protected routes
- Browse available courses
- Enroll in courses
- View "My Enrollments"
- Smooth hover effects and user-friendly design

### Backend (FastAPI)
- RESTful API with JWT-based authentication
- User registration and login
- CRUD operations for courses and enrollments
- Protected routes using JWT
- SQLite database with SQLAlchemy
- Proper error handling
- CORS enabled for frontend

### Business Workflow
- Students can register → Login → Browse courses → Enroll → View enrolled courses

---

## 🛠 Tech Stack

| Layer       | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18, TypeScript, Vite, Tailwind CSS, Axios |
| Backend    | FastAPI, Python 3, SQLAlchemy       |
| Authentication | JWT (JSON Web Tokens)            |
| Database   | SQLite                              |
| Styling    | Tailwind CSS                        |

---

## 📁 Project Structure
```bash
eduenroll/
├── backend/                  # FastAPI Backend
│   ├── app/
│   │   ├── routers/
│   │   ├── models.py
│   │   ├── schemas.py
│   │   ├── auth.py
│   │   ├── database.py
│   │   └── main.py
│   ├── .env
│   └── requirements.txt
│
├── frontend/                 # React + TypeScript Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── .env
│   └── package.json
└── README.md
```

## 🚀 How to Run the Project

### 1. Backend Setup


cd backend

# Create and activate virtual environment
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
# source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run the backend
uvicorn app.main:app --reload
Backend will run at: http://127.0.0.1:8000
Seed Sample Courses (Run once):
Open this URL in browser:
texthttp://127.0.0.1:8000/seed-courses
2. Frontend Setup
cd frontend

npm install

npm run dev
Frontend will run at: http://localhost:5173

📝 How to Use

Go to http://localhost:5173
Register a new account (or login if you already have one)
Browse the Available Courses
Click "Enroll Now" on any course
Go to "My Enrollments" to see your enrolled courses

Default Test Flow:

Register with any email (e.g., student@example.com)
Password: anything you like
Browse and enroll in courses


🔧 Future Enhancements (Optional)

Admin Dashboard (Add/Edit/Delete courses)
Course search and filters
Course progress tracking
Dark mode
Payment integration
Course ratings and reviews


📄 License
This project is built for learning and portfolio purposes.


