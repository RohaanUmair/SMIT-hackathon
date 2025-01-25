'use client';
import { useState } from "react";

export default function Login() {
  const [activeForm, setActiveForm] = useState("login"); // Determines which form is displayed (login or reset password)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement login validation logic here (email and password check)
    if (email && password) {
      alert("Login successful");
    } else {
      setError("Please fill in all fields");
    }
  };

  const handlePasswordReset = (e) => {
    e.preventDefault();
    // Password reset logic goes here (new password validation)
    if (newPassword) {
      alert("Password successfully changed");
      setActiveForm("login");
    } else {
      setError("Please enter a new password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {activeForm === "login" ? "User Login" : "Reset Password"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        {activeForm === "login" ? (
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Login
            </button>
            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer"
                onClick={() => alert("Redirect to registration page")}
              >
                Register
              </span>
            </p>
            <p
              className="mt-2 text-center text-blue-500 cursor-pointer"
              onClick={() => setActiveForm("reset")}
            >
              Forgot Password? Reset here.
            </p>
          </form>
        ) : (
          <form onSubmit={handlePasswordReset}>
            <div className="mb-4">
              <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
              <input
                type="password"
                id="newPassword"
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Reset Password
            </button>
            <p
              className="mt-4 text-center text-blue-500 cursor-pointer"
              onClick={() => setActiveForm("login")}
            >
              Back to Login
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
