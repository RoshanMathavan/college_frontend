import React, { useEffect, useState } from "react";
import { fetchRecruitmentStatus } from "../api/recruitmentStatus";
import "./RecruitmentStatus.css";

const RecruitmentStatus = () => {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Mock data for demonstration
  const mockStatus = {
    studentsPlaced: 85,
    offersMade: 110,
    companiesParticipated: 30,
    averageSalary: "8.5 LPA",
    highestSalary: "24 LPA"
  };

  const mockApplications = [
    { id: 1, student: "Rahul Sharma", company: "Google", position: "Software Engineer", status: "selected", date: "2023-05-15" },
    { id: 2, student: "Priya Patel", company: "Microsoft", position: "Product Manager", status: "interviewed", date: "2023-05-10" },
    { id: 3, student: "Amit Kumar", company: "Amazon", position: "Data Scientist", status: "shortlisted", date: "2023-05-08" },
    { id: 4, student: "Neha Singh", company: "Facebook", position: "UX Designer", status: "applied", date: "2023-05-05" },
    { id: 5, student: "Vikram Joshi", company: "Apple", position: "iOS Developer", status: "rejected", date: "2023-05-01" },
    { id: 6, student: "Sneha Gupta", company: "Netflix", position: "Backend Developer", status: "pending", date: "2023-04-28" },
  ];

  useEffect(() => {
    const getStatus = async () => {
      setLoading(true);
      try {
        // Uncomment this when API is ready
        // const data = await fetchRecruitmentStatus();
        // setStatus(data);

        // Using mock data for now
        setTimeout(() => {
          setStatus(mockStatus);
          setLoading(false);
        }, 1000);
      } catch (err) {
        setError("Failed to fetch recruitment status.");
        setLoading(false);
      }
    };

    getStatus();
  }, []);

  const getStatusBadgeClass = (status) => {
    return `status-badge ${status}`;
  };

  const filteredApplications = mockApplications.filter(app => {
    const matchesFilter = filter === "all" || app.status === filter;
    const matchesSearch = app.student.toLowerCase().includes(search.toLowerCase()) ||
                          app.company.toLowerCase().includes(search.toLowerCase()) ||
                          app.position.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="recruitment-container">
      <div className="recruitment-header">
        <h1 className="recruitment-title">Recruitment Status</h1>
        <p className="recruitment-subtitle">Track placement progress and application statuses</p>
      </div>

      {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

      {loading ? (
        <div style={{ textAlign: "center", padding: "2rem" }}>Loading...</div>
      ) : (
        <>
          <div className="recruitment-stats">
            <div className="status-card blue">
              <h2 className="status-title">Students Placed</h2>
              <p className="status-value">{status.studentsPlaced}</p>
            </div>

            <div className="status-card green">
              <h2 className="status-title">Offers Made</h2>
              <p className="status-value">{status.offersMade}</p>
            </div>

            <div className="status-card yellow">
              <h2 className="status-title">Companies Participated</h2>
              <p className="status-value">{status.companiesParticipated}</p>
            </div>

            <div className="status-card purple">
              <h2 className="status-title">Average Package</h2>
              <p className="status-value">{status.averageSalary}</p>
            </div>
          </div>

          <div className="table-container">
            <h3 className="table-title">Application Status</h3>

            <div className="filters-container">
              <select
                className="filter-select"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="applied">Applied</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interviewed">Interviewed</option>
                <option value="selected">Selected</option>
                <option value="rejected">Rejected</option>
                <option value="pending">Pending</option>
              </select>

              <input
                type="text"
                placeholder="Search by student, company or position..."
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <table className="status-table">
              <thead>
                <tr>
                  <th>Student</th>
                  <th>Company</th>
                  <th>Position</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {filteredApplications.map(app => (
                  <tr key={app.id}>
                    <td>{app.student}</td>
                    <td>{app.company}</td>
                    <td>{app.position}</td>
                    <td>
                      <span className={getStatusBadgeClass(app.status)}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </span>
                    </td>
                    <td>{new Date(app.date).toLocaleDateString()}</td>
                  </tr>
                ))}
                {filteredApplications.length === 0 && (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center", padding: "1rem" }}>
                      No applications found matching your criteria
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default RecruitmentStatus;
