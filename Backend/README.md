# Medicare Backend API

A comprehensive healthcare platform backend built with Node.js, Express, and MongoDB.

## Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Patient, Doctor, Admin)
  - Password hashing with bcrypt
  - Account activation and password reset

- **User Management**
  - Patient registration and profiles
  - Doctor registration with verification
  - Profile management and updates
  - Medical history tracking

- **Security**
  - Rate limiting
  - CORS protection
  - Input validation
  - Password security policies

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs, express-rate-limit, cors
- **Validation**: mongoose validators, validator.js

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   ```bash
   # Copy .env file and update with your MongoDB credentials
   MONGODB_URL=your_mongodb_connection_string
   MONGODB_DB=health_db
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   ```

3. **Start the server**
   ```bash
   # Development mode with nodemon
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Health Check**
   ```
   GET http://localhost:5000/api/health
   ```

## API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/register` | Register new user | Public |
| POST | `/login` | User login | Public |
| GET | `/me` | Get current user | Private |
| PUT | `/updatepassword` | Update password | Private |
| POST | `/logout` | User logout | Private |

### User Routes (`/api/users`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/` | Get all users | Admin |
| GET | `/doctors` | Get all doctors | Public |
| GET | `/:id` | Get single user | Private |
| PUT | `/:id` | Update user profile | Private |
| DELETE | `/:id` | Delete user | Admin |
| GET | `/stats/overview` | Get user statistics | Admin |

## User Roles

### Patient
- Register with basic information
- Manage medical history
- Book appointments
- View doctor profiles

### Doctor
- Register with professional credentials
- Require admin verification
- Manage availability
- Set consultation fees

### Admin
- Manage all users
- Verify doctors
- Access statistics
- System administration

## Data Models

### User Schema
```javascript
{
  // Common fields
  firstName: String,
  lastName: String,
  email: String (unique),
  password: String (hashed),
  phone: String,
  role: ['patient', 'doctor', 'admin'],
  
  // Patient specific
  dateOfBirth: Date,
  gender: String,
  medicalHistory: Array,
  allergies: Array,
  
  // Doctor specific
  licenseNumber: String (unique),
  specialization: String,
  hospital: String,
  yearsOfExperience: Number,
  consultationFee: Number,
  isVerified: Boolean
}
```

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **JWT Tokens**: Secure token-based authentication
- **Rate Limiting**: Prevents brute force attacks
- **Input Validation**: Comprehensive data validation
- **CORS**: Cross-origin resource sharing protection
- **Role-based Access**: Different permissions for different user types

## Error Handling

The API returns consistent error responses:

```javascript
{
  "success": false,
  "message": "Error description",
  "errors": ["Detailed error messages"] // For validation errors
}
```

## Development

### Scripts
```bash
npm run dev     # Start with nodemon
npm start       # Start production server
npm test        # Run tests (when implemented)
```

### Environment Variables
```env
MONGODB_URL=mongodb+srv://user:pass@cluster.mongodb.net/
MONGODB_DB=health_db
JWT_SECRET=your-super-secret-jwt-key
PORT=5000
NODE_ENV=development
```

## Deployment

1. Set up production MongoDB cluster
2. Configure environment variables
3. Deploy to your preferred platform (Heroku, Vercel, etc.)
4. Update CORS origins for production domain

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support, email your-email@example.com or create an issue in the repository.
