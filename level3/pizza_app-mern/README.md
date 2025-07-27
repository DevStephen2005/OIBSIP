# Pizza Delivery System App - MERN

> Pizza Delivery System App (MERN - MongoDB, Express, React, Node.js) is a comprehensive web application that enables users to customize and order pizzas online. This project showcases a full-stack development approach with a focus on user experience, functionality, and security. The app includes a user-friendly frontend interface for ordering pizzas, an admin dashboard for managing orders and inventory, and a secure backend server for processing orders and payments.

<br />
<div align="center">
  <p align="center">
    <br />
    <a href="https://github.com/itxSaaad/pizza-palette-app-mern-OIBSIP-task-1">
    <strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://pizza-palette-app-mern.vercel.app/">View Demo</a>
    ·
    <a href="https://github.com/itxSaaad/pizza-palette-app-mern-OIBSIP-task-1/issues">Report Bug</a>
    ·
    <a href="https://github.com/itxSaaad/pizza-palette-app-mern-OIBSIP-task-1/issues">Request Feature</a>
  </p>
</div>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

## Live Preview Project

[Live Preview](https://pizza-palette-app-mern.vercel.app/)

## Features

- **User & Admin Authentication:** Secure login and registration system with role-based access control for users and administrators.
- **Pizza Management System:** Full CRUD operations for pizzas, allowing both admins and users to create custom pizzas with various ingredients (bases, sauces, cheeses, veggies).
- **Inventory Management:** Complete tracking system for pizza ingredients with quantity monitoring, threshold alerts, and price management for bases, sauces, cheeses, and vegetables.
- **Order Processing System:** End-to-end order management with order creation, status tracking, and delivery monitoring functionality.
- **Payment Integration:** Secure payment processing through Razorpay API with order checkout capabilities and payment verification.
- **Multi-level Access Control:** Differentiated capabilities for users and admins, with specific permissions for pizza creation, order management, and inventory control.
- **Order History & Tracking:** Users can view their order history and track current order status through the delivery process.
- **Admin Dashboard:** Comprehensive order management system allowing admins to view all orders, update order status, and manage inventory levels.
- **Automatic Inventory Deduction:** System automatically updates ingredient quantities when orders are placed to maintain accurate inventory levels.

## Built With

- **Frontend:** React.js (Vite.js) (Tailwind CSS) (React Router) (@reduxjs/toolkit) (React Redux) ()
- **Backend:** Node.js (Express) (bcryptjs) (cors) (dotenv) (express-async-handler) (jsonwebtoken)
- **Database:** MongoDB (Atlas) (Mongoose) (MongoDB Compass)
- **Payment:** Razorpay API (Test Mode)
- **Authentication:** JSON Web Tokens (JWT)
- **Email Notifications:** Nodemailer
- **Version Control:** Git and GitHub

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript engine
- [NPM](https://www.npmjs.com/) - Node Package Manager

### Installation

1. **Clone the repository**

   ```sh
      git clone https://github.com/itxSaaad/pizza-palette-app-mern-OIBSIP-task-1.git
      cd pizza-palette-app-mern-OIBSIP-task-1
   ```

2. **Install dependencies**

   ```sh
      # Install server dependencies
      npm install

      # Install client dependencies
      cd client
      npm install
      cd ..
   ```

3. **Configure environment variables**

   Create a `.env` file in the root directory:

   ```sh
       # Server Configuration
       NODE_ENV=development
       PORT=5000

       # MongoDB Connection
       MONGO_URI=your_mongodb_uri

       # Authentication
       JWT_SECRET=your_jwt_secret
       SALT=10

       # Email Configuration
       SENDER_EMAIL=your_email@example.com
       SENDER_PASSWORD=your_email_password
       SUPERADMIN_EMAIL=admin@example.com

       # Payment Gateway
       RAZORPAY_KEY_ID=your_razorpay_key_id
       RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```

   Create a `.env` file in the client directory:

   ```sh
       VITE_SERVER_URL=http://localhost:5000
       VITE_CLIENT_URL=http://localhost:3000
       VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
   ```

4. **Seed the database (Optional)**

   Populate the database with initial data:

   ```sh
       npm run data:import
   ```

   To reset the database:

   ```sh
       npm run data:destroy
   ```

5. **Start the application**

   ```sh
      # Run both server and client
      npm run dev

      # Run server only
      npm run server

      # Run client only
      npm run client
   ```

6. **Access the application**

- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:5000](http://localhost:5000)

> **Note:** Make sure MongoDB is running locally or you're using MongoDB Atlas with the correct connection string.

