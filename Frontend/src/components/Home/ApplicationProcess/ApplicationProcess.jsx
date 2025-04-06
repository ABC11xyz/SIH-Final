import React from 'react';
import './ApplicationProcess.css';
import Tilt from 'react-parallax-tilt';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUpload, faFileAlt, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const ApplicationProcess = () => {
  return (
    <div className="application-process">
      <h2>Application Process for PMSSS</h2>
      <div className="steps">
        <Tilt>
        <div className="step">
          <FontAwesomeIcon icon={faUpload} className="icon" />
          <h3>Step 1: Document Upload</h3>
          <p>Upload necessary documents such as Aadhaar, educational certificates, etc.</p>
        </div>
        </Tilt>
        <Tilt>
        <div className="step">
          <FontAwesomeIcon icon={faFileAlt} className="icon" />
          <h3>Step 2: Verification</h3>
          <p>Your documents will be verified by our team for authenticity.</p>
        </div>
        </Tilt>
        <Tilt>
        <div className="step">
          <FontAwesomeIcon icon={faCheckCircle} className="icon" />
          <h3>Step 3: Approval</h3>
          <p>Once verified, your application will be approved and processed.</p>
        </div>
        </Tilt>
        <Tilt>
        <div className="step">
          <FontAwesomeIcon icon={faThumbsUp} className="icon" />
          <h3>Step 4: Scholarship Disbursement</h3>
          <p>Receive your scholarship amount directly in your bank account.</p>
        </div>
        </Tilt>
      </div>
    </div>
  );
};

export default ApplicationProcess;
