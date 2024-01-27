# Social Media REST API Documentation

## Description

This repository contains a RESTful API for a social media application. The API provides endpoints for user authentication, user management, and post management. It is built using Node.js, Express.js, MongoDB (or any preferred database), bcrypt for password hashing, JSON Web Tokens (JWT) for authentication, and Multer for file uploads.

## Features

- **User Management:**
  - User Registration and Login
  - User Profile Management
  - Follow and Unfollow Users

- **Post Management:**
  - Post Creation, Update, and Deletion
  - Like and Dislike Posts
  - File Upload for Post Media
  - Comment on Posts
  - Delete Comments on Posts

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- bcrypt for password hashing
- JSON Web Tokens (JWT) for authentication
- Multer for file uploads

## Project Structure

```
/src
  /controller
  /middleware
  /models
  /routes
  /uploads
  app.js
  ...
```

## Testing APIs

You can use tools like [Postman](https://www.postman.com/) or [curl](https://curl.se/) to test the provided APIs. Here are example requests for each API:

### 1. Authentication APIs (`auth.route.js`):

#### Register User:
- Method: POST
- URL: `http://localhost:3000/api/auth/register`
- Body: JSON with `username`, `email`, `password`, `isAdmin` fields.

#### Login User:
- Method: POST
- URL: `http://localhost:3000/api/auth/login`
- Body: JSON with `email` and `password` fields.

### 2. User APIs (`user.route.js`):

#### Get User:
- Method: GET
- URL: `http://localhost:3000/api/user/:userId`
- Replace `:userId` with the actual user ID.

#### Update User:
- Method: PUT
- URL: `http://localhost:3000/api/user/:userId`
- Replace `:userId` with the actual user ID.
- Body: JSON with fields to update.

#### Delete User:
- Method: DELETE
- URL: `http://localhost:3000/api/user/:userId`
- Replace `:userId` with the actual user ID.

#### Follow User:
- Method: PUT
- URL: `http://localhost:3000/api/user/:userId/follow`
- Replace `:userId` with the actual user ID.
- Body: JSON with `id` of the follower.

#### Unfollow User:
- Method: PUT
- URL: `http://localhost:3000/api/user/:userId/unfollow`
- Replace `:userId` with the actual user ID.
- Body: JSON with `id` of the follower.

### 3. Post APIs (`post.route.js`):

#### Get All Posts for a User:
- Method: GET
- URL: `http://localhost:3000/api/post/:userId`
- Replace `:userId` with the actual user ID.

#### Create Post:
- Method: POST
- URL: `http://localhost:3000/api/post/`
- Body: JSON with `userId` and `content` fields.
- Attach a file if applicable.

#### Update Post:
- Method: PUT
- URL: `http://localhost:3000/api/post/:postId`
- Replace `:postId` with the actual post ID.
- Body: JSON with fields to update.

#### Delete Post:
- Method: DELETE
- URL: `http://localhost:3000/api/post/:postId`
- Replace `:postId` with the actual post ID.

#### Like Post:
- Method: PUT
- URL: `http://localhost:3000/api/post/:postId/like`
- Replace `:postId` with the actual post ID.
- Body: JSON with `userId`.

#### Dislike Post:
- Method: PUT
- URL: `http://localhost:3000/api/post/:postId/dislike`
- Replace `:postId` with the actual post ID.
- Body: JSON with `userId`.

#### Add Comment:
- Method: PUT
- URL: `http://localhost:3000/api/post/:postId/comment`
- Replace `:postId` with the actual post ID.
- Body: JSON with `userId` and `content` fields.

#### Delete Comment:
- Method: DELETE
- URL: `http://localhost:3000/api/post/:postId/comment/:commentId`
- Replace `:postId` and `:commentId` with the actual post and comment IDs.

## Getting Started

1. **Installation:**

   ```bash
   npm install
   ```

2. **Configuration:**

   - Set up a MongoDB database and update the connection details in `config.js`.
   - Configure any other environment variables if needed.

3. **Run the Application:**

   ```bash
   node app.js
   ```

   The server will run on [http://localhost:3000](http://localhost:3000) by default.

## API Endpoints

- **Authentication:**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login an existing user.

- **User Management:**
  - `GET /api/user/:userId`: Get user details.
  - `PUT /api/user/:userId`: Update user details.
  - `DELETE /api/user/:userId`: Delete a user.
  - `PUT /api/user/:userId/follow`: Follow a user.
  - `PUT /api/user/:userId/unfollow`: Unfollow a user.

- **Post Management:**
  - `GET /api/post/:userId`: Get all posts for a user.
  - `POST /api/post/`: Create a new post.
  - `PUT /api/post/:postId`: Update a post.
  - `DELETE /api/post/:postId`: Delete a post.
  - `PUT /api/post/:postId/like`: Like a post.
  - `PUT /api/post/:postId/dislike`: Dislike a post.
  - `PUT /api/post/:postId/comment`: Add a comment to a post.
  - `DELETE /api/post/:postId/comment/:commentId`: Delete a comment from a post.

## License

This project is licensed under the CODINGNINJA License - see the [LICENSE](LICENSE) file for details.
