import  { useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import './FinanceDashboard.css';

const FinanceDashboard = () => {
  const [activeSection, setActiveSection] = useState('home');

  const [pendingPayments, setPendingPayments] = useState([
    { _id: '1', studentName: 'Alice Johnson', amount: '500', receivedTime: '2024-09-28 10:00 AM' },
    { _id: '2', studentName: 'Bob Smith', amount: '300', receivedTime: '2024-09-28 11:00 AM' },
    { _id: '3', studentName: 'Charlie Brown', amount: '700', receivedTime: '2024-09-28 12:00 PM' },
  ]);

  const [completedPayments, setCompletedPayments] = useState([
    { _id: '4', studentName: 'David Wilson', amount: '400', receivedTime: '2024-09-27 09:00 AM' },
    { _id: '5', studentName: 'Eva Green', amount: '600', receivedTime: '2024-09-27 10:30 AM' },
  ]);

  const [financeDetails] = useState({ name: 'Finance User', id: 'FIN1234' });

  const chartData = {
    labels: ['Pending', 'Completed'],
    datasets: [{
      data: [pendingPayments.length, completedPayments.length],
      backgroundColor: ['#FF6384', '#36A2EB'],
    }]
  };

  const handlePayment = (paymentId) => {
    axios.post(`/api/finance/pay/${paymentId}`)
      .then(() => {
        setPendingPayments(pendingPayments.filter(payment => payment._id !== paymentId));
        setCompletedPayments([...completedPayments, { _id: paymentId, studentName: 'John Doe', amount: '1000', receivedTime: new Date().toLocaleString() }]);
      })
      .catch(error => {
        console.error('Error processing payment:', error);
      });
  };

  return (
    <div className="finance-dashboard">
      <aside className="sidebar">
      
        <button className={`sidebar-button ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setActiveSection('home')}>Profile</button>
        <button className={`sidebar-button ${activeSection === 'pay' ? 'active' : ''}`} onClick={() => setActiveSection('pay')}>Pay</button>
        <button className={`sidebar-button ${activeSection === 'completed' ? 'active' : ''}`} onClick={() => setActiveSection('completed')}>Completed</button>
      </aside>

      <main className="main-content">
        {activeSection === 'home' && (
          <div className="home-section">
            <div className="finance-details">
              <h3>{financeDetails.name}</h3>
              <p>ID: {financeDetails.id}</p>
            </div>
            <div className="chart-container">
              <Pie data={chartData} />
            </div>
          </div>
        )}

        {activeSection === 'pay' && (
          <div className="pay-section">
            <h2 className="section-title">Pending Payments</h2>
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Received Time</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {pendingPayments.map(payment => (
                  <tr key={payment._id}>
                    <td>{payment.studentName}</td>
                    <td>{payment.receivedTime}</td>
                    <td><button className="btn pay-btn" onClick={() => handlePayment(payment._id)}>Pay</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeSection === 'completed' && (
          <div className="completed-section">
            <h2 className="section-title">Completed Payments</h2>
            <table className="payment-table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Payment Time</th>
                </tr>
              </thead>
              <tbody>
                {completedPayments.map(payment => (
                  <tr key={payment._id}>
                    <td>{payment.studentName}</td>
                    <td>{payment.receivedTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default FinanceDashboard;
