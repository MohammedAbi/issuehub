# 🐛 IssueHub – Issue Tracking Platform

![IssueHub](<img width="1510" height="901" alt="Image" src="https://github.com/user-attachments/assets/41f9b198-60c0-4455-9904-ec8bb5ee0890" />)


A modern issue tracking platform with authentication, role-based access, and real-time updates.

**Tech Stack:** React, TypeScript, TailwindCSS, Vite, Express, MongoDB, JWT

- 🔗 Live Client: https://issuehubtracker.netlify.app/
- 🔗 GitHub: https://github.com/MohammedAbi/issuehub

---

## 📋 Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Test Users](#Test-Users)
- [Links](#links)

---

## 🎯 Project Overview

IssueHub is a full-stack issue tracking application that allows users to create, manage, and track issues in a collaborative environment. Built with the MERN stack (MongoDB, Express, React, Node.js), it provides a seamless experience for teams to manage their projects effectively.

## ✨ Features

### User Features

- 🔐 User registration and authentication (JWT)
- 👤 Profile management
- 📧 Email-based authentication
- 🎨 Responsive design with Tailwind CSS

### Issue Management

- ✅ Create, read, update, and delete issues
- 🏷️ Categorize issues by priority (Low, Medium, High)
- 📊 Filter and sort issues
- 🔍 Search functionality
- 📝 Rich text descriptions

### Dashboard Features

- 📈 Overview statistics
- 📅 Recent activity feed
- 👥 Team member assignments
- 🔔 Real-time notifications (toast)

## 🛠️ Technologies Used

### Frontend (Client)

| Technology       | Version | Purpose       |
| ---------------- | ------- | ------------- |
| React            | 18.2.0  | UI Framework  |
| TypeScript       | 6.0.2   | Type Safety   |
| Vite             | 8.0.12  | Build Tool    |
| TailwindCSS      | 4.3.0   | Styling       |
| React Router DOM | 7.16.0  | Routing       |
| Axios            | 1.16.1  | API Calls     |
| React Toastify   | 11.1.0  | Notifications |

### Backend (Server)

| Technology | Version | Purpose            |
| ---------- | ------- | ------------------ |
| Express    | 5.2.1   | Server Framework   |
| MongoDB    | 9.6.3   | Database           |
| JWT        | 9.0.3   | Authentication     |
| bcryptjs   | 3.0.3   | Password Hashing   |
| TypeScript | 6.0.3   | Type Safety        |
| tsx        | 4.22.4  | TypeScript Runtime |

## 📁 Folder Structure

issuehub/
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Page components
│ │ ├── hooks/ # Custom React hooks
│ │ ├── services/ # API services
│ │ ├── types/ # TypeScript definitions
│ │ ├── utils/ # Utility functions
│ │ ├── App.tsx # Main app component
│ │ └── main.tsx # Entry point
│ ├── public/ # Static assets
│ ├── index.html # HTML template
│ ├── package.json # Dependencies
│ ├── vite.config.ts # Vite configuration
│ └── tsconfig.json # TypeScript configuration
│
├── server/ # Express backend
│ ├── src/
│ │ ├── models/ # Database models
│ │ ├── controllers/ # Route controllers
│ │ ├── routes/ # API routes
│ │ ├── middleware/ # Custom middleware
│ │ ├── config/ # Configuration files
│ │ └── server.ts # Server entry point
│ ├── dist/ # Compiled output
│ ├── package.json # Dependencies
│ └── tsconfig.json # TypeScript configuration
│
├── .gitignore # Git ignore file
└── README.md # Project documentation

## 🚀 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)
- Git

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/MohammedAbi/issuehub.git
cd issuehub
```

2. Install client dependencies

```bash
cd client
npm install
```

3. Install server dependencies

```bash
cd ../server
npm install
```

4. Set up environment variables (see Environment Variables)

5. Start development servers
   Client (Terminal 1):

```bash
cd client
npm run dev
```

Client (Terminal 2):

```bash
cd server
npm run dev
```

6. Open your browser

- Client: http://localhost:5173
- Server: http://localhost:5001

## Environment Variables

Client (.env in client folder)

- VITE_API_URL=http://localhost:5001

```bash
Server (.env in server folder)
PORT=5001
MONGO_URI=mongodb+srv://username:password@your-cluster.mongodb.net/issuehub
JWT_SECRET=your_super_secret_jwt_key_here
```

## API Endpoints

Method Endpoint Description Auth Required
POST /api/auth/register Register new user ❌
POST /api/auth/login Login user ❌
GET /api/issues Get all issues ✅
POST /api/issues Create new issue ✅
PUT /api/issues/:id Update issue ✅
DELETE /api/issues/:id Delete issue ✅
GET /api/users/profile Get user profile ✅

## Test Users

Email and password

```bash
alice@test.com
123456
```

## Links

Repository: https://github.com/MohammedAbi/issuehub

Live Client: https://issuehubtracker.netlify.app/
