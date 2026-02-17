# 🎬 Movies API

A RESTful API built with Node.js and Express for managing movies, user authentication, reviews, and watchlists. This API provides a complete backend solution for movie management applications with role-based access control.

## ✨ Features

- **🔐 Authentication & Authorization**
  - User registration and login with JWT tokens
  - Role-based access control (Admin/User)
  - Secure password hashing with bcrypt
  - Default admin account creation

- **🎥 Movie Management**
  - CRUD operations for movies
  - Movie details including name, genre, and release date
  - Admin-only movie creation, update, and deletion

- **⭐ Reviews System**
  - Users can write reviews for movies
  - Retrieve all reviews for a specific movie
  - User-specific review tracking

- **📋 Watchlist**
  - Personal watchlist for each user
  - Add/remove movies from watchlist
  - View your complete watchlist

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js v5
- **Database:** SQLite with Sequelize ORM
- **Authentication:** JSON Web Tokens (JWT)
- **Password Security:** bcrypt
- **Validation:** express-validator
- **Logging:** Morgan

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## 🚀 Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd MOVIES-API
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   PORT=3006
   JWT_SECRET=your_jwt_secret_key_here
   ADMIN_EMAIL=admin@example.com
   ADMIN_PASSWORD=admin123
   ```

4. **Start the server**
   ```bash
   npm start
   ```

   The server will start on `http://localhost:3006` with auto-reload enabled.

## 📚 API Documentation

### Base URL
```
http://localhost:3006
```

### Authentication Endpoints

#### Register a New User
```http
POST /api/auth/register
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Get Current User
```http
GET /api/auth/me
Authorization: Bearer <your_token>
```

### Movie Endpoints

#### Get All Movies
```http
GET /api/movies
```

#### Get Single Movie
```http
GET /api/movies/:id
```

#### Create Movie (Admin Only)
```http
POST /api/movies
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "The Matrix",
  "genre": "Sci-Fi",
  "releaseDate": "1999-03-31"
}
```

#### Update Movie (Admin Only)
```http
PUT /api/movies/:id
Authorization: Bearer <admin_token>
Content-Type: application/json

{
  "name": "The Matrix Reloaded",
  "genre": "Sci-Fi",
  "releaseDate": "2003-05-15"
}
```

#### Delete Movie (Admin Only)
```http
DELETE /api/movies/:id
Authorization: Bearer <admin_token>
```

### Review Endpoints

#### Create Review
```http
POST /api/reviews/:movieId
Authorization: Bearer <your_token>
Content-Type: application/json

{
  "rating": 5,
  "comment": "Amazing movie!"
}
```

#### Get Reviews for a Movie
```http
GET /api/reviews/:movieId
```

### Watchlist Endpoints

#### Add Movie to Watchlist
```http
POST /api/watchlist/:movieId
Authorization: Bearer <your_token>
```

#### Get User's Watchlist
```http
GET /api/watchlist
Authorization: Bearer <your_token>
```

#### Remove Movie from Watchlist
```http
DELETE /api/watchlist/:movieId
Authorization: Bearer <your_token>
```

## 📁 Project Structure

```
MOVIES-API/
├── controllers/          # Request handlers
│   ├── auth.controller.js
│   ├── movies.controller.js
│   ├── reviews.controller.js
│   └── watchlist.controller.js
├── middlewares/          # Custom middleware
│   ├── admin.middleware.js
│   ├── auth.middleware.js
│   └── validator.middleware.js
├── models/              # Database models
│   ├── index.js
│   ├── movies.model.js
│   ├── reviews.model.js
│   ├── users.model.js
│   └── watchlist.model.js
├── routes/              # API routes
│   ├── auth.routes.js
│   ├── movies.routes.js
│   ├── reviews.routes.js
│   └── watchlist.routes.js
├── utils/               # Utility functions
│   ├── admin.js
│   ├── db.js
│   └── helpers.js
├── validators/          # Request validation
│   └── auth.validators.js
├── .env                 # Environment variables
├── index.js             # Application entry point
├── movies.sqlite        # SQLite database
└── package.json         # Project dependencies
```

## 🔒 Security Features

- **Password Hashing:** All passwords are hashed using bcrypt before storage
- **JWT Authentication:** Secure token-based authentication
- **Input Validation:** Request validation using express-validator
- **Role-Based Access:** Admin-only routes for sensitive operations
- **Error Handling:** Centralized error handling middleware

## 🧪 Development

### Running in Development Mode
```bash
npm start
```

This will start the server with:
- Auto-reload on file changes (`--watch` flag)
- Environment variables loaded from `.env`
- Morgan logging in development mode

### Database

The application uses SQLite with Sequelize ORM. The database is automatically initialized on server start, and a default admin account is created if it doesn't exist.

## 📝 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | 3006 |
| `JWT_SECRET` | Secret key for JWT signing | Required |
| `ADMIN_EMAIL` | Default admin email | Required |
| `ADMIN_PASSWORD` | Default admin password | Required |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**abd**


## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- Sequelize team for the powerful ORM
- All contributors and users of this API

---

**Note:** Remember to change the default admin credentials in production and use strong, unique passwords!


