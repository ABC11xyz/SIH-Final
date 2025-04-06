import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './StudentDashboard.css';

const StudentDashboard = () => {
  const [studentDetails, setStudentDetails] = useState({
    name : "Student",
    email: "student@example.com",
    id: "STU12345",
    formsFilled: 3 // Sample data for forms filled
  });
  const [status, setStatus] = useState('Under Verification');
  const [activeSection, setActiveSection] = useState('profile');
  const [applications, setApplications] = useState([
    { id: 'APP001', status: 'Approved' },
    { id: 'APP002', status: 'Pending' },
    { id: 'APP003', status: 'Rejected' },
    { id: 'APP026', status: 'Approved' },
    { id: 'APP056', status: 'Pending' },
  ]);

  // Mock function to simulate fetching applications
  useEffect(() => {
    if (activeSection === 'track') {
      // Simulate fetching applications
      // In a real scenario, you would fetch from an API
      // axios.get('/api/student/applications')
      //   .then(response => {
      //     setApplications(response.data.applications);
      //   })
      //   .catch(error => {
      //     console.error('Error fetching applications:', error);
      //   });
    }
  }, [activeSection]);

  const handleTrackStatus = () => {
    // Simulate tracking status
    console.log("Status tracking simulated.");
  };

  return (
    <div className="student-dashboard body-bg-1">
      <div className="sidebar">
        <button
          onClick={() => setActiveSection('profile')}
          className={`btn nav-btn ${activeSection === 'profile' ? 'active' : ''}`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveSection('track')}
          className={`btn nav-btn ${activeSection === 'track' ? 'active' : ''}`}
        >
          Track Applications
        </button>
        <button
          onClick={() => setActiveSection('scholarships')}
          className={`btn nav-btn ${activeSection === 'scholarships' ? 'active' : ''}`}
        >
          More Scholarships
        </button>
      </div>

      <div className="main-content">
        <h1>Welcome, {studentDetails.name}</h1>

        <div className="status-section">
          {activeSection === 'profile' && (
            <>
              <h2>Profile Details</h2>
              <p>Email: {studentDetails.email}</p>
              <p>Student ID: {studentDetails.id}</p>
              <p>Forms Filled: {studentDetails.formsFilled}</p>
            </>
          )}

          {activeSection === 'track' && (
            <>
              <h2>Track Your Applications</h2>
              <table className="application-table">
                <thead>
                  <tr>
                    <th>Application ID</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map(app => (
                    <tr key={app.id}>
                      <td>{app.id}</td>
                      <td>{app.status}</td>
                      <td>
                        <button className="btn track-btn" onClick={handleTrackStatus}>Track</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          )}

          {activeSection === 'scholarships' && (
            <>
              <h2>Available Scholarships</h2>
              <p>Check out the latest scholarships available for students.</p>

              <section className="pmsss-info">
                {Array(5).fill().map((_, index) => (
                  <div className="card" key={index}>
                    <img src={`path/to/image${index + 1}.jpg`} alt={`Scholarship ${index + 1}`} className="scholarship-image" />
                    <h3>Prime Minister's Special Scholarship Scheme (PMSSS) {index + 1}</h3>
                    <p>The PMSSS aims to provide financial support to students from economically weaker sections to pursue higher education.</p>
                    <Link to="/apply" className="btn apply-btn">Apply Now</Link>
                  </div>
                ))}
              </section>    
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
