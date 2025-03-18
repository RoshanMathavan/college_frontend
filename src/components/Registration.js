import React, { useState } from "react";
import "./Registration.css";

const Registration = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // Default role
  });
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    // Validate password match
    if (user.password !== user.confirmPassword) {
      setMessage("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://collegeplacementmanagementsystem-1.onrender.com/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error Response:", errorData);
        throw new Error(errorData.message || "Registration failed");
      }

      const data = await response.json();
      setMessage("Registration successful! You can now login.");
      setUser({ name: "", email: "", password: "", confirmPassword: "", role: "student" });
    } catch (error) {
      console.error("Registration error:", error);
      setMessage(error.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h2 className="form-title">Register</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={user.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleChange}
          required
        />
        <select
          name="role"
          value={user.role}
          onChange={handleChange}
          required
          style={{
            display: "block",
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        >
          <option value="student">Student</option>
          <option value="admin">Admin</option>
          <option value="company">Company</option>
        </select>
        <button className="submit-button" type="submit" disabled={loading}>
          {loading ? "Registering..." : "Register"}
        </button>
        {message && (
          <p className="form-message" style={{ color: message.includes("successful") ? "green" : "red" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default Registration;