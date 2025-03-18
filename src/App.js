import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddCompany from "./components/AddCompany";
import PlacementDrive from "./components/PlacementDrive";
import RecruitmentStatus from "./components/RecruitmentStatus";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Registration from "./components/Registration";
import AdminDashboard from "./pages/AdminDashboard";
import StudentApplication from "./pages/StudentApplication";
import "./App.css"; // Custom styles

function App() {
  return (
    <Router>
      <div className="main-container">
        {/* Navbar */}
        <header className="navbar">
          <h1 className="navbar-title">COLLEGE PLACEMENT MANAGEMENT SYSTEM</h1>
          <nav className="menu">
            <Link to="/" className="menu-item">
              HOME
              </Link>
            <Link to="/add-company" className="menu-item">
              COMPANY
            </Link>
            <Link to="/placements" className="menu-item">
              PLACEMENT
            </Link>
            <Link to="/recruitment-status" className="menu-item">
              RECRUITMENT STATUS
            </Link>
            <Link to="/login" className="menu-item">
              LOGIN
            </Link>
            <Link to="/registration" className="menu-item">
            REGISTRATION
            </Link>
            <Link to="/Admin" className="menu-item">
            ADMIN
            </Link>
            <Link to="/student-application" className="menu-item">
            APPLY
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <div className="content-container">
          <div className="form-container">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/add-company" element={<AddCompany />} />
              <Route path="/placements" element={<PlacementDrive />} />
              <Route path="/recruitment-status" element={<RecruitmentStatus />} />
              <Route path="/login" element={<Login />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/student-application" element={<StudentApplication />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
