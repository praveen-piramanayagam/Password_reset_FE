import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PasswordReset = () => {
  const [newPassword, setnewPassword] = useState("");
  const [token, setToken] = useState(""); // Store user-entered token
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // To handle loading state
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token || !newPassword) {
      setMessage("Please provide both token and new password.");
      return;
    }

    setLoading(true); // Set loading state to true when submitting the form
    console.log("Submitting token:", token);  // Log token
    console.log("Submitting newPassword:", newPassword);  // Log newPassword

    try {
      const response = await axios.post(
        "https://password-reset-node-imnq.onrender.com/api/v1/auth/reset-password",
        { token, newPassword },
        {
          headers: {
            "Content-Type": "application/json",  // Ensure correct content type
          },
        }
      );
      setMessage(response.data.message || "Password reset successful!");

      setTimeout(() => {
        navigate("/login"); // Redirect to /login after successful reset
      }, 1000); // Delay for 1 second to show the success message
    } catch (error) {
      console.error("Error response:", error.response); // Log full error response
      setMessage(error.response?.data?.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false); // Reset loading state regardless of success or failure
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Reset Password
        </h1>

        {/* Token Input Field */}
        <div className="mb-4">
          <label htmlFor="token" className="block text-gray-700 font-medium mb-2">
            Reset Token
          </label>
          <input
            type="text"
            id="token"
            placeholder="Enter your reset token"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* New Password Input Field */}
        <div className="mb-4">
          <label htmlFor="newPassword" className="block text-gray-700 font-medium mb-2">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            placeholder="Enter your new password"
            value={newPassword}
            onChange={(e) => setnewPassword(e.target.value)}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className={`w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Resetting..." : "Reset Password"} {/* Button text */}
        </button>

        {/* Display success or error message */}
        {message && (
          <p
            className={`mt-4 text-center ${message.includes("successful") ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default PasswordReset;
