### PayTM-Like Web App

### Table of Contents

1.  Introduction
2.  Features
3.  Technologies Used
4.  Installation
5.  Usage
6.  API Endpoints
7.  Contributing
8.  License

### Introduction

This project is a PayTM-like web application developed using the MERN stack (MongoDB, Express, React, Node.js). It provides functionalities similar to real-world banking transactions, featuring robust user authentication, session-based transactions, and an attractive user interface. The application ensures data integrity and security using tools such as JWT for authentication and Zod for validation.

### Features

-   User Registration and Authentication
-   Secure Transactions using Mongoose Sessions
-   Real-time Transaction Updates
-   Responsive and Attractive UI
-   State Management in React
-   API Integration using Axios

### Technologies Used

-   Frontend:
-   React.js with Vite
-   Tailwind CSS for styling
-   Axios_
-   React State Management Tools
-   Backend:
-   Node.js
-   Express.js
-   MongoDB with Mongoose
-   Libraries and Tools:
-   Zod for validation
-   JWT for authentication

### Installation

### Prerequisites

-   Node.js (v14 or higher)
-   MongoDB

### Clone the Repository

git clone https://github.com/syedahmedullah14/PayTM-Project.git

		cd PayTM-Project

### Backend Setup

1.  Navigate to the backend directory:

cd backend

2. Install dependencies:

		npm install

3. Set up environment variables:

Create a `config.js` file in the backend directory and add the following

	module.export ={  
	JWT_SECRET=your_jwt_secret}

4. Start the backend server:

		npm start

### Frontend Setup

1.  Navigate to the frontend directory:

		cd ../frontend

2. Install dependencies:

		npm install

3. Start the frontend server using Vite:

		npm run dev

### Usage

1.  Open your browser and navigate to `http://localhost:3000` for the frontend.
2.  Use Postman or similar tools to interact with the backend at `http://localhost:5000` for API testing.

### API Endpoints

### User Authentication

-   Register
-   `POST /api/v1/signup`
-   Body: `{ "firstName": "string", lastName:string, "email": "string", "password":     "string" }`
-   Login
-   `POST /api/v1/user/signin`
-   Body: `{ "email": "string", "password": "string" }`

### Transactions

-   Create Transaction
-   `POST /api/transactions`
-   Headers: `Authorization: Bearer <token>`
-   Body: `{ "amount": "number", "type": "string" }`
-   Get Balance
-   `GET /api/user/balance`
-   Headers: `Authorization: Bearer <token>`

### Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

### License

This project is licensed under the MIT License — see the LICENSE file for details.PayTM-Like Web App