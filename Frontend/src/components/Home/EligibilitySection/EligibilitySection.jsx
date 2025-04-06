import React from 'react';
import './EligibilitySection.css';
import {Link} from "react-router-dom"

const EligibilitySection = () => {
  return (
    <div className="eligibility-section">
      <h2>Eligibility Criteria for PMSSS</h2>
      <ul className="eligibility-list">
        <li>Must be a resident of Jammu and Kashmir.</li>
        <li>Must have completed 12th grade or equivalent.</li>
        <li>Must meet the income criteria set by the government.</li>
        <li>Should have a valid Aadhaar card for identity verification.</li>
        <li>Must enroll in a recognized institution for higher studies.</li>
      </ul>
      <Link to = "/how-to-apply" className='btn'>Know More</Link>
    </div>
  );
};

export default EligibilitySection;
