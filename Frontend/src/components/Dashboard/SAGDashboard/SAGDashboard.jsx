import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';
import './SAGDashboard.css';

Chart.register(ArcElement, Tooltip, Legend);

const SAGDashboard = () => {

  const [pendingDocuments, setPendingDocuments] = useState([
    { _id: '1', studentName: 'Ram', submissionTime: '2024-09-26 10:30 AM' },
    { _id: '2', studentName: 'Shyam', submissionTime: '2024-09-26 11:00 AM' },
    { _id: '3', studentName: 'Aman', submissionTime: '2024-09-26 10:45 AM' },
    { _id: '4', studentName: 'Deepak', submissionTime: '2024-09-26 11:15 AM' },
    { _id: '5', studentName: 'Nisha', submissionTime: '2024-09-26 11:45 AM' },
    { _id: '6', studentName: 'Priya', submissionTime: '2024-09-26 12:00 PM' },
    { _id: '7', studentName: 'Suresh', submissionTime: '2024-09-26 12:15 PM' },
    { _id: '8', studentName: 'Meena', submissionTime: '2024-09-26 12:30 PM' },
    { _id: '9', studentName: 'Ravi', submissionTime: '2024-09-26 12:45 PM' },
    { _id: '10', studentName: 'Sunil', submissionTime: '2024-09-26 01:00 PM' },
  ]);
  
  const [verifiedDocuments, setVerifiedDocuments] = useState([
    { _id: '11', studentName: 'Satyam', verificationTime: '2024-09-26 12:30 PM' },
    { _id: '12', studentName: 'Shivam', verificationTime: '2024-09-26 11:30 PM' },
    { _id: '13', studentName: 'Sundram', verificationTime: '2024-09-26 10:30 PM' },
    { _id: '14', studentName: 'Anjali', verificationTime: '2024-09-26 01:30 PM' },
    { _id: '15', studentName: 'Kiran', verificationTime: '2024-09-26 02:00 PM' },
    { _id: '16', studentName: 'Nitin', verificationTime: '2024-09-26 02:15 PM' },
    { _id: '17', studentName: 'Pooja', verificationTime: '2024-09-26 02:30 PM' },
    { _id: '18', studentName: 'Aarti', verificationTime: '2024-09-26 02:45 PM' },
    { _id: '19', studentName: 'Rohit', verificationTime: '2024-09-26 03:00 PM' },
    { _id: '20', studentName: 'Vikas', verificationTime: '2024-09-26 03:15 PM' },
  ]);
  
  const [rejectedDocuments, setRejectedDocuments] = useState([
    { _id: '21', studentName: 'Radhe', actionTime: '2024-09-26 12:30 PM', reason: 'Incomplete Documents' },
    { _id: '22', studentName: 'Kanha', actionTime: '2024-09-26 01:15 PM', reason: 'Invalid Aadhaar Card' },
    { _id: '23', studentName: 'Alok', actionTime: '2024-09-26 01:45 PM', reason: 'Missing Signature' },
    { _id: '24', studentName: 'Geeta', actionTime: '2024-09-26 02:00 PM', reason: 'Incorrect Format' },
    { _id: '25', studentName: 'Ajay', actionTime: '2024-09-26 02:30 PM', reason: 'No ID Proof' },
    { _id: '26', studentName: 'Naveen', actionTime: '2024-09-26 03:00 PM', reason: 'Expired Document' },
    { _id: '27', studentName: 'Bharti', actionTime: '2024-09-26 03:15 PM', reason: 'Verification Failed' },
    { _id: '28', studentName: 'Rani', actionTime: '2024-09-26 03:30 PM', reason: 'Duplicate Submission' },
    { _id: '29', studentName: 'Tarun', actionTime: '2024-09-26 03:45 PM', reason: 'Incomplete Information' },
    { _id: '30', studentName: 'Suman', actionTime: '2024-09-26 04:00 PM', reason: 'Invalid Format' },
  ]);

  const [sagDetails, setSAGDetails] = useState({ nameA: 'SAG Name', id: 'SAG1234' });
  const [activeSection, setActiveSection] = useState('profile');

  const chartData = {
    labels: ['Pending', 'Verified', 'Rejected' , 'Total'],
    datasets: [{
      data: [pendingDocuments.length, verifiedDocuments.length, rejectedDocuments.length , (pendingDocuments.length+verifiedDocuments.length + rejectedDocuments.length)],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56' , '#B0B0EB'],
    }]
  };

  

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="sag-dashboard">
      <div className="sidebar">
        <button
          className={`btn-1 ${activeSection === 'profile' ? 'active' : ''}`}
          onClick={() => handleButtonClick('profile')}
        >
          Profile
        </button>
        <button
          className={`btn-1 ${activeSection === 'pending' ? 'active' : ''}`}
          onClick={() => handleButtonClick('pending')}
        >
          Verify
        </button>
        <button
          className={`btn-1 ${activeSection === 'verified' ? 'active' : ''}`}
          onClick={() => handleButtonClick('verified')}
        >
          Forward
        </button>
        <button
          className={`btn-1 ${activeSection === 'rejected' ? 'active' : ''}`}
          onClick={() => handleButtonClick('rejected')}
        >
          Rejected
        </button>
      </div>

      <div className="content">
      {activeSection === 'profile' && (
        <div className="header-section body-bg-1">
          <div className="chart-container">
            <Doughnut data={chartData} height={300} width={300} />
          </div>
          <div className="sag-details">
            <h2>{sagDetails.name}</h2>
            <p>ID: {sagDetails.id}</p>
          </div>
        </div>
)}


        <div className="right-section">
          {activeSection === 'pending' && (
            <section className="pending-verifications">
              <h2 className="section-title">Pending Verifications</h2>
              <div className="table-container">
                <table className="document-table no-border">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Submission Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pendingDocuments.map(doc => (
                      <tr key={doc._id} className="document-item no-border">
                        <td>{doc.studentName}</td>
                        <td>{doc.submissionTime}</td>
                        <td>
                          <Link to={`/sag/verify/${doc._id}`} className="verify btn">Verify</Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeSection === 'verified' && (
            <section className="verified-documents">
              <h2 className="section-title">Verified Documents</h2>
              <div className="table-container">
                <table className="document-table no-border">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Verification Time</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {verifiedDocuments.map(doc => (
                      <tr key={doc._id} className="document-item no-border">
                        <td>{doc.studentName}</td>
                        <td>{doc.verificationTime}</td>
                        <td>
                          <button className="btn">Forward</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {activeSection === 'rejected' && (
            <section className="rejected-documents">
              <h2 className="section-title">Rejected Documents</h2>
              <div className="table-container">
                <table className="document-table no-border">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Action Time</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rejectedDocuments.map(doc => (
                      <tr key={doc._id} className="document-item no-border">
                        <td>{doc.studentName}</td>
                        <td>{doc.actionTime}</td>
                        <td>{doc.reason}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default SAGDashboard;
