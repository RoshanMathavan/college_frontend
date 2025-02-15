import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Layout = () => {
  const { user, logout } = useAuth();

  return (
    <div className="App">
      <nav>
        <ul>
          <li className="nav-item"><Link to="/">Home</Link></li>
          {user ? (
            <>
              <li className="nav-item"><Link to="/applications">Applications</Link></li>
              <li className="nav-item"><Link to="/interviews">Interviews</Link></li>
              <li className="nav-item"><Link to="/companies">Companies</Link></li>
              <li className="nav-item"><Link to="/placement-drives">Placement Drives</Link></li>
              <li className="nav-item"><Link to="/recruitment-status">Recruitment Status</Link></li>
              <li className="nav-item"><Link to="/reports">Reports</Link></li>
              <li className="nav-item"><Link to="/academic-records">Academic Records</Link></li>
              <li className="nav-item"><Link to="/company-database">Company Database</Link></li>
              <li className="nav-item auth-highlight">
                <Link to="/" onClick={(e) => {
                  e.preventDefault();
                  logout();
                }}>Logout</Link>
              </li>
            </>
          ) : (
            <li className="nav-item auth-highlight"><Link to="/login">Login</Link></li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Layout;