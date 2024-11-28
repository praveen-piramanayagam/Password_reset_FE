# Password Reset Functionality

This project implements a password reset feature, where users can reset their password by providing a valid reset token and a new password. The project consists of a React frontend that interacts with a Node.js backend to handle the password reset process.

## Features

- **Password Reset Form**: The user can enter a reset token and a new password to reset their account's password.
- **Loading Indicator**: The form shows a loading indicator while the password reset request is in progress.
- **Success/Error Messages**: After submitting the form, the user receives feedback based on the outcome of the request (success or error).
- **Redirection**: Upon successful password reset, the user is redirected to the login page.
- **Backend Integration**: The frontend makes a request to the backend to validate the token and reset the password.

## Frontend (React)

The frontend is developed using React, which includes the following components:

1. **Password Reset Form**:
   - The form collects the reset token and the new password from the user.
   - It sends a POST request to the backend API with the token and new password as data.
   - Displays a success message if the password is successfully reset.
   - Shows error messages if something goes wrong (e.g., invalid token, server error).

2. **Loading State**:
   - While the password reset request is being processed, a loading spinner or message is shown to inform the user that the request is being handled.

3. **Message Handling**:
   - The frontend handles both success and error messages, which are displayed below the form after the form submission.

4. **Redirection**:
   - After a successful password reset, the user is redirected to the login page to log in with the new password.

## Backend (Node.js)

The backend of this project is built using Node.js with Express. The backend handles the logic for verifying the reset token and updating the user's password. Here’s how the backend works:

- **Reset Password Endpoint**: A POST endpoint accepts the reset token and the new password. It looks for the user associated with the token in the database, hashes the new password, and updates the user's password.
- **Token Validation**: The token is checked against the database to ensure that it is valid. If the token is invalid or expired, an error message is returned.
- **Password Update**: Once the token is validated, the user's password is updated in the database, and the token is cleared from the user record.

## Setup Instructions

### Frontend Setup

1. Clone the repository to your local machine.
2. Install dependencies:
   ```bash
   npm install
