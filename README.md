# React User List Workshop

A workshop project for the [ReactJS Course](https://softuni.bg/opencourses/react-js) at [Software University](https://softuni.bg).

## Project Overview

This application allows users to manage a list of users with CRUD operations (Create, Read, Update, Delete) and additional features like searching, sorting, and pagination.

## Features

- **User Management**
  - Create new users
  - View user details
  - Edit existing users
  - Delete users

- **Enhanced Functionality**
  - Search users by different criteria
  - Sort users by different fields (ascending/descending)
  - Pagination with configurable items per page
  - Loading spinners for API requests
  - Error handling for various scenarios

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)

### Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Backend Service

The application uses a local REST service:

1. Navigate to the `server` directory
2. Start the server:
   ```
   node server.js
   ```
3. The server will log the host address and port it's running on

## API Endpoints

The application uses the following endpoints:

- `GET /jsonstore/users` - Get all users
- `GET /jsonstore/users/{userId}` - Get a specific user
- `POST /jsonstore/users` - Create a new user
- `PUT /jsonstore/users/{userId}` - Update a user
- `DELETE /jsonstore/users/{userId}` - Delete a user

## User Object Structure

```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "imageUrl": "string",
  "phoneNumber": "string",
  "createdAt": "date",
  "updatedAt": "date",
  "address": {
    "country": "string",
    "city": "string",
    "street": "string",
    "streetNumber": "string"
  }
}
```

## Technologies

- React
- Vite
- SoftUni Practice Server (for backend)