"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      alert("Login successful!");
      router.push("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm">
        <h2 className="text-xl font-bold text-center">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleLogin}>
          <input type="email" className="w-full p-2 border" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          <input type="password" className="w-full p-2 border mt-2" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 mt-2">Login</button>
        </form>
      </div>
    </div>
  );
}
