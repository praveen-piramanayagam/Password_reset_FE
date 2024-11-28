// Login.jsx
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://password-reset-node-imnq.onrender.com/api/v1/auth/login", {
        email,
        password
      });
      setMessage(response.data.message || "Login successful!");
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6 mt-10"
    >
      <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
      
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Login
      </button>
      <p className="mt-4 text-center">Forgot your password ??{" "}<Link to="/forgot-password" className="text-blue-500">Click here</Link></p>
      
      {message && (
        <p
          className={`mt-4 text-center ${
            message.includes("success") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
      <p className="mt-4 text-center">New user??{" "}<Link to="/register" className="text-blue-500">Register here</Link></p>
    </form>
  );
};

export default Login;
