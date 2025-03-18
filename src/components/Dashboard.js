import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Placement Dashboard</h1>
        <p className="dashboard-subtitle">Overview of placement activities and statistics</p>
      </div>

      <div className="dashboard-stats">
        {/* Card 1 */}
        <div className="stat-card blue">
          <h2 className="stat-title">Total Students</h2>
          <p className="stat-value">120</p>
        </div>

        {/* Card 2 */}
        <div className="stat-card green">
          <h2 className="stat-title">Total Companies</h2>
          <p className="stat-value">30</p>
        </div>

        {/* Card 3 */}
        <div className="stat-card yellow">
          <h2 className="stat-title">Applications</h2>
          <p className="stat-value">250</p>
        </div>

        {/* Card 4 */}
        <div className="stat-card purple">
          <h2 className="stat-title">Placements</h2>
          <p className="stat-value">85</p>
        </div>
      </div>

      <div className="dashboard-charts">
        <div className="chart-container">
          <h3 className="chart-title">Placement Statistics by Course</h3>
          <div className="chart-placeholder" style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", color: "#7f8c8d" }}>
            Chart visualization will be implemented here
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Monthly Applications</h3>
          <div className="chart-placeholder" style={{ height: "250px", display: "flex", alignItems: "center", justifyContent: "center", color: "#7f8c8d" }}>
            Chart visualization will be implemented here
          </div>
        </div>
      </div>

      <div className="recent-activities">
        <h3 className="activities-title">Recent Activities</h3>

        <div className="activity-item">
          <div className="activity-icon blue">
            <span>📝</span>
          </div>
          <div className="activity-content">
            <p className="activity-text">Google opened new positions for Software Engineers</p>
            <p className="activity-time">2 hours ago</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon green">
            <span>✅</span>
          </div>
          <div className="activity-content">
            <p className="activity-text">15 students got placed at Microsoft</p>
            <p className="activity-time">Yesterday</p>
          </div>
        </div>

        <div className="activity-item">
          <div className="activity-icon yellow">
            <span>📊</span>
          </div>
          <div className="activity-content">
            <p className="activity-text">Placement drive scheduled for Amazon on June 15</p>
            <p className="activity-time">3 days ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
