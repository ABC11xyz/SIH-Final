import React from 'react';
import { FaRegIdCard, FaFileUpload, FaCheckSquare, FaPaperPlane } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import './HowToApply.css';

const HowToApply = () => {
  return (
    <div className="how-to-apply-container">
      <div className="banner-part">
        <img src="banner2.png" alt="How to Apply" />
        <h1 className="page-title">HOW TO APPLY</h1>
        <h3 className="sub-title">Prime Minister’s Special Scholarship Scheme</h3>
      </div>

      <div className="how-to-apply-content">
        <h2 className="content-title">Application Process</h2>
        <p className="content-description">
          Follow these steps to apply for the Prime Minister's Special Scholarship Scheme (PMSSS) successfully.
        </p>

        {/* Flowchart Section */}
        <h3 className="flowchart-title">Application Flow</h3>
        <div className="flowchart-container">
          <div className="flow-left">
            <Tilt>
              <div className="flowchart-step left">
                <div className="circle"><FaRegIdCard size={40} /></div>
                <div className="step-card">
                  <h4>Step 1: Registration</h4>
                  <p>Register on the official PMSSS portal by providing basic details.</p>
                </div>
              </div>
            </Tilt>

            <Tilt>
              <div className="flowchart-step right">
                <div className="circle"><FaFileUpload size={40} /></div>
                <div className="step-card">
                  <h4>Step 2: Upload Documents</h4>
                  <p>Upload the required documents such as educational certificates.</p>
                </div>
              </div>
            </Tilt>

            <Tilt>
              <div className="flowchart-step left">
                <div className="circle"><FaCheckSquare size={40} /></div>
                <div className="step-card">
                  <h4>Step 3: Verify Details</h4>
                  <p>Ensure all information is accurate and documents are correct.</p>
                </div>
              </div>
            </Tilt>

            <Tilt>
              <div className="flowchart-step right">
                <div className="circle"><FaPaperPlane size={40} /></div>
                <div className="step-card">
                  <h4>Step 4: Submit Application</h4>
                  <p>Submit your application and keep the acknowledgment number.</p>
                </div>
              </div>
            </Tilt>
          </div>

          <div className="flow-right">
            <Tilt>
              <img src="Flow.png" alt="" />
            </Tilt>
          </div>
        </div>

        {/* Detailed Steps Section */}
        
          <div className="details">
        <div className="detailed-steps">
          <h3 className="detailed-title">Detailed Steps</h3>
          <p className="detailed-description">
            Here are the detailed steps you need to follow for the application process. Make sure to read each step carefully to avoid any issues.
          </p>
          <ul className="detailed-list">
            <li><span>Step-1:</span> Visit the PMSSS portal to access the application interface and gather necessary information.</li>
            <li><span>Step-2:</span> Check your eligibility for the PMSSS scheme based on residency and academic qualifications.</li>
            <li><span>Step-3:</span> Create an account on the PMSSS portal by providing personal details and setting up login credentials.</li>
            <li><span>Step-4:</span> Fill out the application form completely, ensuring all required fields are accurately completed.</li>
            <li><span>Step-5:</span> Upload the necessary documents, such as your Aadhaar card and educational certificates, and submit the application.</li>
            <li><span>Step-6:</span> The application will undergo a review process under SAG (Student Advisory Group) for completeness and accuracy.</li>
            <li><span>Step-7:</span> Receive a confirmation regarding the verification status of your submitted documents.</li>
            <li><span>Step-8:</span> After approval, your application will be processed under the Finance department for fund allocation.</li>
            <li><span>Step-9:</span> Funds will be transferred to the student's bank account as per the guidelines of the PMSSS scheme.</li>
            <li><span>Step-10:</span> Once the funds are deposited, verify that the amount has been received in your bank account.</li>
            <li><span>Step-11:</span> Provide feedback on your application experience or share your success story through the designated portal option.</li>
          </ul>
        </div>
        </div>
        

        {/* YouTube Video and Required Documents Section */}
        <div className="additional-info">
          <div className="video-section">
            <h3 className="video-title">How to Apply - Video Guide</h3>
            <iframe
              title="How to Apply Video"
              width="100%"
              height="315"
              className='video-'
              src="https://youtu.be/2gFcTb72OmM?si=reCvzPMXQNtrymlI"
              frameBorder="0"
              allow="accelerometer; autoplay; mute; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="documents-section">
            <h3 className="documents-title">Required Documents</h3>
            <ul className="documents-list">
              <li>Aadhaar Card</li>
              <li>Educational Certificates (Mark sheets, Degrees)</li>
              <li>Income Certificate</li>
              <li>Bank Account Details</li>
              <li>Passport-sized Photographs</li>
              <li>Identity Proof (Any government ID)</li>
              <li>Address Proof (Utility Bill, Rental Agreement)</li>
              <li>Other supporting documents as specified by the PMSSS portal</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToApply;
