# Career-Friendly

A full-stack job portal website that connects job seekers (students) with recruiters. Built with React, Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [User Roles](#user-roles)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### For Job Seekers (Students)
- **User Registration & Authentication**: Secure signup and login with role-based access
- **Profile Management**: Update personal information, bio, skills, and upload resume
- **Job Browsing**: Browse and search through available job listings
- **Job Search**: Search jobs by keywords (title, description)
- **Job Applications**: Apply to jobs with one click
- **Application Tracking**: View all applied jobs and their status (pending/accepted/rejected)
- **Job Details**: View comprehensive job descriptions with company information

### For Recruiters
- **Company Management**: Register and manage company profiles
- **Company Setup**: Update company details including logo, description, website, and location
- **Job Posting**: Create and post new job listings with detailed requirements
- **Job Management**: View all posted jobs
- **Applicant Management**: View all applicants for each job posting
- **Application Status**: Update application status (pending/accepted/rejected)

### General Features
- **File Upload**: Cloudinary integration for profile photos, resumes, and company logos
- **Responsive Design**: Modern UI built with Tailwind CSS and Radix UI components
- **State Management**: Redux Toolkit with Redux Persist for state management
- **Protected Routes**: Role-based route protection for admin/recruiter pages
- **JWT Authentication**: Secure authentication using JSON Web Tokens stored in HTTP-only cookies

## 🛠 Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM 7** - Client-side routing
- **Redux Toolkit** - State management
- **Redux Persist** - State persistence
- **Axios** - HTTP client
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Sonner** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Cloudinary** - Cloud-based image and file storage
- **Cookie Parser** - Cookie parsing middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Career-Friendly/
├── backend/
│   ├── controllers/          # Business logic
│   │   ├── user.controller.js
│   │   ├── job.controller.js
│   │   ├── company.controller.js
│   │   └── application.controller.js
│   ├── models/                # MongoDB schemas
│   │   ├── user.model.js
│   │   ├── job.model.js
│   │   ├── company.model.js
│   │   └── application.model.js
│   ├── routes/                # API routes
│   │   ├── user.route.js
│   │   ├── job.route.js
│   │   ├── company.route.js
│   │   └── application.route.js
│   ├── middlewares/           # Custom middlewares
│   │   ├── isAuthenticated.js
│   │   └── multer.js
│   ├── utils/                 # Utility functions
│   │   ├── db.js
│   │   ├── cloudinary.js
│   │   └── datauri.js
│   └── index.js               # Server entry point
├── frontend/
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── admin/         # Admin/Recruiter components
│   │   │   ├── auth/          # Authentication components
│   │   │   ├── shared/        # Shared components (Navbar, Footer)
│   │   │   └── ui/            # UI components (shadcn/ui)
│   │   ├── hooks/             # Custom React hooks
│   │   ├── redux/             # Redux store and slices
│   │   ├── utils/             # Utility functions
│   │   ├── lib/               # Library utilities
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # Entry point
│   ├── public/                # Static assets
│   └── package.json
├── package.json               # Root package.json (backend dependencies)
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)
- Cloudinary account (for file uploads)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/adarshaady17/Career-Friendly.git
cd Career-Friendly
```

### Step 2: Install Dependencies

#### Install Backend Dependencies
```bash
npm install
```

#### Install Frontend Dependencies
```bash
cd frontend
npm install
cd ..
```

### Step 3: Environment Variables

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=8000

# MongoDB Connection
MONGO_URI=your_mongodb_connection_string

# JWT Secret Key
SECRET_KEY=your_secret_key_here

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### Step 4: Update Frontend API Endpoints

Update the API endpoints in `frontend/src/utils/constant.js` if your backend runs on a different port:

```javascript
export const USER_API_END_POINT="http://localhost:8000/api/v1/user";
export const JOB_API_END_POINT="http://localhost:8000/api/v1/job";
export const APPLICATION_API_END_POINT="http://localhost:8000/api/v1/application";
export const COMPANY_API_END_POINT="http://localhost:8000/api/v1/company";
```

## ⚙️ Configuration

### MongoDB Setup
1. Create a MongoDB database (local or MongoDB Atlas)
2. Get your connection string
3. Update `MONGO_URI` in `.env`

### Cloudinary Setup
1. Sign up at [Cloudinary](https://cloudinary.com/)
2. Get your Cloud Name, API Key, and API Secret
3. Update the Cloudinary credentials in `.env`

### JWT Secret Key
Generate a secure random string for `SECRET_KEY` in `.env`

## 💻 Usage

### Development Mode

#### Start Backend Server
```bash
npm run dev
```
Backend will run on `http://localhost:8000`

#### Start Frontend Development Server
```bash
cd frontend
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Build

#### Build Frontend
```bash
cd frontend
npm run build
```

#### Start Production Server
```bash
npm start
```

The server will serve the built frontend from `frontend/dist` directory.

## 📡 API Endpoints

### User Routes (`/api/v1/user`)
- `POST /register` - Register a new user (requires profile photo upload)
- `POST /login` - User login
- `GET /logout` - User logout
- `POST /profile/update` - Update user profile (requires authentication, optional file upload)

### Job Routes (`/api/v1/job`)
- `POST /post` - Create a new job posting (requires authentication, recruiter role)
- `GET /get` - Get all jobs (requires authentication)
- `GET /getadminjobs` - Get all jobs posted by the authenticated recruiter
- `GET /get/:id` - Get job details by ID (requires authentication)

### Company Routes (`/api/v1/company`)
- `POST /register` - Register a new company (requires authentication, recruiter role)
- `GET /get` - Get all companies for the authenticated recruiter
- `GET /get/:id` - Get company details by ID (requires authentication)
- `PUT /update/:id` - Update company information (requires authentication, optional logo upload)

### Application Routes (`/api/v1/application`)
- `GET /apply/:id` - Apply for a job (requires authentication, student role)
- `GET /get` - Get all applications by the authenticated user (requires authentication)
- `GET /:id/applicants` - Get all applicants for a job (requires authentication, recruiter role)
- `POST /status/:id/update` - Update application status (requires authentication, recruiter role)

## 👥 User Roles

### Student
- Can browse and search jobs
- Can apply to jobs
- Can view application status
- Can update profile and upload resume

### Recruiter
- Can register and manage companies
- Can post job listings
- Can view applicants for their jobs
- Can update application status

## 🎨 Frontend Routes

### Public Routes
- `/` - Home page
- `/login` - Login page
- `/signup` - Signup page
- `/jobs` - Browse all jobs
- `/description/:id` - Job description page
- `/browse` - Browse jobs with filters
- `/profile` - User profile page

### Protected Routes (Recruiter Only)
- `/admin/companies` - Company management
- `/admin/companies/create` - Create new company
- `/admin/companies/:id` - Company setup/edit
- `/admin/jobs` - Job management
- `/admin/jobs/create` - Post new job
- `/admin/jobs/:id/applicants` - View applicants for a job

## 🔒 Authentication

- JWT tokens are stored in HTTP-only cookies
- Tokens expire after 1 day
- Protected routes require valid authentication
- Admin routes require recruiter role

## 📦 Database Models

### User Model
- `fullname`, `email`, `phoneNumber`, `password`, `role`
- `profile`: `bio`, `skills[]`, `resume`, `resumeOriginalName`, `company`, `profilePhoto`

### Job Model
- `title`, `description`, `requirements[]`, `salary`, `experienceLevel`, `location`, `jobType`, `position`
- `company` (reference), `created_by` (reference), `applications[]` (references)

### Company Model
- `name`, `description`, `website`, `location`, `logo`
- `userId` (reference)

### Application Model
- `job` (reference), `applicant` (reference)
- `status`: `pending` | `accepted` | `rejected`

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👤 Author

**adarshaady17**

- GitHub: [@adarshaady17](https://github.com/adarshaady17)
- Repository: [Career-Friendly](https://github.com/adarshaady17/Career-Friendly)

## 🙏 Acknowledgments

- Built with modern web technologies
- UI components from Radix UI
- Icons from Lucide React
- File storage powered by Cloudinary

---

**Note**: Make sure to set up all environment variables before running the application. The application requires MongoDB and Cloudinary accounts to function properly.

