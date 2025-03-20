# 🚀 **L-2-Assignment-3-Blog-Server** 🌟

## 📖 **Project Overview**
Welcome to the **Blog Server API**, a powerful backend solution designed to manage blogs effortlessly. Built with cutting-edge technologies like **Node.js**, **TypeScript**, and **Mongoose**, this API provides seamless blog management with robust features, including user authentication, admin controls, and advanced search, sort, and filter capabilities.

---

## ✨ **Features**

### 📝 **Blog Management**
- ➕ **Create**, 🛠️ **Update**, ❌ **Delete**, and 🔍 **Retrieve** blogs.
- Advanced **Search**, **Filter**, and **Sort** functionality for efficient data retrieval.

### User Roles
- **Admin**:
  - Can delete any blog.
  - Can block users by updating `isBlocked`.
  - Cannot update blogs.
- **User**:
  - Can register and log in.
  - Can create, update, and delete their own blogs.

### Authentication & Authorization
- **Authentication**: Required for all write, update, and delete operations.
- **Authorization**: Role-based access control for Admin and User actions.

### 📊 **Data Validation**
- Ensure data integrity using **Zod** and **Mongoose schemas**.

---

## 💻 **Technologies Used**

- **Node.js** 🟢
- **Express.js** 🚀
- **TypeScript** 📝
- **MongoDB & Mongoose** 🍃
- **Zod** 🔐

---

## 🛠️ **Getting Started**

## 🖥️ Running the Project Locally

### Step 1: Clone the Repository 🗂️
Run the following commands in your terminal:

git clone URL <repository-url>


---
### Step 2: Install Dependencies 📦
Install the required packages with:
npm install
---

### Step 3: Configure Environment Variables ⚙️
Create a .env file in the root directory and add the following configuration:


🌐 Server Configuration ➡️ 
PORT=5000

📂 Database Configuration ➡️ 
DATABASE_URL=YOUR_DATABASE_URL

🔒 Security Configuration ➡️ 
BCRYPT_SALT_ROUNDS=10
JWT_ACCESS_SECRET=YOUR_SECRET_KEY
JWT_ACCESS_EXPIRES_IN=1h

---
### Step 4: Start the Server 🚀
Start the development server with:

npm run dev
The server will run on the port specified in your .env file.

## 📡 API Endpoints

| **Endpoint**                     | **HTTP Method** | **Role**       | **Permission**                                                                 |
|----------------------------------|-----------------|----------------|-------------------------------------------------------------------------------|
| `/api/auth/register`             | `POST`          | 🌐 Any         | Register a new user.                                                          |
| `/api/auth/login`                | `POST`          | 🌐 Any         | Authenticate user and issue a JWT.                                            |
| `/api/blogs`                     | `POST`          | 👤 User        | Create blogs (requires authentication).                                       |
| `/api/blogs/:id`                 | `PATCH`         | 👤 User        | Update blogs (only the user's own blogs).                                     |
| `/api/blogs/:id`                 | `DELETE`        | 👤 User        | Delete blogs (only the user's own blogs).                                     |
| `/api/blogs`                     | `GET`           | 🌐 Public      | Fetch all blogs with search, filter, and sort functionalities.                |
| `/api/admin/blogs/:id`           | `DELETE`        | 👑 Admin       | Delete any blog.                                                              |
| `/api/admin/users/:userId/block` | `PATCH`         | 👑 Admin       | Block a user.                                                                 |

---

## 🖊️ **Credits**

Developed with 👤 by:  
**[Saiful Islam Shaikot](#)** 🎉
---

