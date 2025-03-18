import React, { useState } from "react";
import axios from "axios";
import "./StudentApplication.css";

const StudentApplication = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    course: "",
    phone: ""
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);

    // Basic input validation
    if (!formData.name || !formData.email || !formData.resume) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      await axios.post("https://collegeplacementmanagementsystem-1.onrender.com/api/students", formData);
      setMessage("Application submitted successfully!");
      setFormData({ name: "", email: "", resume: "", course: "", phone: "" }); // Clear the form
    } catch (err) {
      console.error("Error submitting application:", err);
      setError("Failed to submit application. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="application-container">
      <div className="application-header">
        <h1 className="application-title">Student Application</h1>
        <p className="application-subtitle">Submit your details to apply for placement opportunities</p>
      </div>

      <div className="application-form-container">
        <form onSubmit={handleSubmit}>
          {message && <div className="message success-message">{message}</div>}
          {error && <div className="message error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="name" className="form-label">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">Phone Number</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="course" className="form-label">Course/Program</label>
            <input
              id="course"
              name="course"
              type="text"
              value={formData.course}
              onChange={handleChange}
              placeholder="Enter your course or program"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="resume" className="form-label">Resume URL</label>
            <input
              id="resume"
              name="resume"
              type="url"
              value={formData.resume}
              onChange={handleChange}
              placeholder="Paste your resume link (Google Drive, Dropbox, etc.)"
              className="form-input"
              required
            />
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>

      <div className="application-info">
        <h3 className="info-title">Application Process</h3>

        <div className="info-item">
          <div className="info-icon">1</div>
          <div className="info-content">
            <p className="info-text">Submit your application with all required details</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">2</div>
          <div className="info-content">
            <p className="info-text">Your application will be reviewed by the placement cell</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">3</div>
          <div className="info-content">
            <p className="info-text">If shortlisted, you'll receive notifications for upcoming placement drives</p>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">4</div>
          <div className="info-content">
            <p className="info-text">Participate in interviews and assessments with potential employers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentApplication;
