import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3002";
const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL || "http://localhost:3001";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const { data } = await axios.post(`${API_URL}/login`, form, { withCredentials: true });
      if (data.success) {
        window.location.href = DASHBOARD_URL;
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Something went wrong, try again");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="mb-4">Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <input className="form-control mb-3" type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} required />
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
      <p className="mt-3">New here? <Link to="/signup">Sign Up</Link></p>
    </div>
  );
}

export default Login;