# API Documentation for Express Server

This API documentation provides an overview of the structure and functionality of an Express server with MongoDB integration for user, about, and partner management.

## Base URL

The base URL for all endpoints is assumed to be `http://your-api-base-url/`.

## Server Configuration

- **Express Server:** The server is configured to run on the specified port (`process.env.PORT` or 5000 if not defined).

## Middleware

- **CORS:** Cross-Origin Resource Sharing middleware is enabled using the `cors` library to handle cross-origin HTTP requests.
- **Body Parser:** Middleware for parsing JSON and URL-encoded data in the request body.

- The `isAdmin` middleware is used to restrict access to certain endpoints to users with the "admin" role.

## Database Connection

- The server connects to a MongoDB database using the `mongoose` library. The database connection configuration is encapsulated in the `dbConnection` module.

## User Management

### 1. User Controller

- **Controller Path:** `/api/users`
- **Controller Module:** `userController`

#### Register a New User

- **Endpoint:** `POST /api/users/register`
- **Description:** Registers a new user.
- **Request Body:**
  - `username` (string, required): Username of the user.
  - `email` (string, required): Email address of the user.
  - `password` (string, required): Password for the user.
  - `role` (string, optional): Role of the user (e.g., "admin" or "user").
- **Response:**
  - Status: 201 Created
  - Body: `{ "message": "User registered successfully." }`
- **Error Responses:** (same as described in the previous user authentication documentation)

#### Login a User

- **Endpoint:** `POST /api/users/login`
- **Description:** Logs in a user and provides a JWT token.
- **Request Body:**
  - `username` (string, required): Username of the user.
  - `password` (string, required): Password for the user.
- **Response:** (same as described in the previous user authentication documentation)
- **Error Responses:** (same as described in the previous user authentication documentation)

#### Logout a User

- **Endpoint:** `POST /api/users/logout`
- **Description:** Logs out a user and adds the token to the blacklist.
- **Request Headers:**
  - `Authorization` (string, required): JWT token obtained during login.
- **Response:** (same as described in the previous user authentication documentation)
- **Error Responses:** (same as described in the previous user authentication documentation)

## About Management

### 2. About Controller

- **Controller Path:** `/api/about`
- **Controller Module:** `aboutController`
- **Middleware:** `isAdmin`

#### Create About Content

- **Endpoint:** `POST /api/about`
- **Description:** Creates a new About section content.
- **Request Body:**
  - `content` (string, required): The content of the About section.
- **Response:** (same as described in the About section documentation)

#### Read About Content

- **Endpoint:** `GET /api/about`
- **Description:** Retrieves the content of the About section.
- **Response:** (same as described in the About section documentation)
- **Error Responses:** (same as described in the About section documentation)

#### Update About Content

- **Endpoint:** `PUT /api/about/:id`
- **Description:** Updates the content of the About section by providing the `id` parameter.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the About content to be updated.
- **Request Body:**
  - `content` (string, required): The updated content of the About section.
- **Response:** (same as described in the About section documentation)
- **Error Responses:** (same as described in the About section documentation)

#### Delete About Content

- **Endpoint:** `DELETE /api/about/:id`
- **Description:** Deletes the About content identified by the provided `id`.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the About content to be deleted.
- **Response:** (same as described in the About section documentation)
- **Error Responses:** (same as described in the About section documentation)

## Partner Management

### 3. Partner Controller

- **Controller Path:** `/api/partner`
- **Controller Module:** `partnerController`
- **Middleware:** `isAdmin`

#### Add a New Partner

- **Endpoint:** `POST /api/partner`
- **Description:** Creates a new partner entry.
- **Request Body:**
  - `partnerName` (string, required): Name of the partner.
  - `desc` (string, required): Description of the partner.
  - `experience` (string, required): Experience or background information about the partner.
- **Response:** (same as described in the Partner section documentation)

#### Get All Partners

- **Endpoint:** `GET /api/partner`
- **Description:** Retrieves information about all partners.
- **Response:** (same as described in the Partner section documentation)
- **Error Responses:** (same as described in the Partner section documentation)

#### Update Partner Information

- **Endpoint:** `PUT /api/partner/:id`
- **Description:** Updates information for a specific partner identified by the provided `id`.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the partner to be updated.
- **Request Body:**
  - `partnerName` (string, required): Updated name of the partner.
  - `desc` (string, required): Updated description of the partner.
  - `experience` (string, required): Updated experience or background information about the partner.
- **Response:** (same as described in the Partner section documentation)
- **Error Responses:** (same as described in the Partner section documentation)

#### Delete Partner

- **Endpoint:** `DELETE /api/partner/:id`
- **Description:** Deletes information about a specific partner identified by the provided `id`.
- **Request Parameters:**
  - `id` (string, required): The unique identifier of the partner to be deleted.
- **Response:** (same as described in the Partner section documentation)
- **Error Responses:** (same as described in the Partner section documentation)

## Error Responses

- **Status: 401 Unauthorized**
  - Body: `{ "error": "Unauthorized!" }`

## Notes

- Ensure that the request and response bodies are in JSON format.
- Handle errors appropriately based on the provided error responses.
- Use the appropriate HTTP methods for each operation (POST, GET, PUT, DELETE).
- Replace `http://your-api-base-url/` with the actual base URL of your API.
