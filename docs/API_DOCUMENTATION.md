# API Documentation

## Overview
This document provides a detailed description of the API endpoints available in the Crime Record Management System.

## Base URL
All API endpoints are accessed through the following base URL:
```
https://api.crime-record-management-system.com/v1
```

## Endpoints

### 1. Get all crime records
- **Endpoint:** `/crime-records`
- **Method:** `GET`
- **Description:** Retrieves a list of all crime records.
- **Response:** A JSON array of crime records.

### 2. Get a specific crime record
- **Endpoint:** `/crime-records/{id}`
- **Method:** `GET`
- **Description:** Retrieves a crime record by its ID.
- **Parameters:**
    - `id` (required): The ID of the crime record.
- **Response:** A JSON object representing the crime record.

### 3. Create a new crime record
- **Endpoint:** `/crime-records`
- **Method:** `POST`
- **Description:** Creates a new crime record.
- **Request Body:**
    ```json
    {
        "title": "string",
        "description": "string",
        "date": "YYYY-MM-DD",
        "location": "string",
        "status": "string"
    }
    ```
- **Response:** The created crime record.

### 4. Update an existing crime record
- **Endpoint:** `/crime-records/{id}`
- **Method:** `PUT`
- **Description:** Updates an existing crime record.
- **Parameters:**
    - `id` (required): The ID of the crime record to update.
- **Request Body:** Same as for creating a new crime record.
- **Response:** The updated crime record.

### 5. Delete a crime record
- **Endpoint:** `/crime-records/{id}`
- **Method:** `DELETE`
- **Description:** Deletes a crime record by its ID.
- **Parameters:**
    - `id` (required): The ID of the crime record to delete.
- **Response:** Confirmation of deletion.

## Authentication
All API requests require authentication. Tokens can be obtained through the login endpoint.

## Conclusion
This API provides a simple interface for managing crime records. For any issues, please contact the support team.