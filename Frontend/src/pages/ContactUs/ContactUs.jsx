import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="banner-part">
        <img src="banner2.png" alt="Contact Us" />
        <h1 className="page-title">CONTACT US</h1>
        <h3 className="sub-title">We are here to assist you</h3>
      </div>

      <div className="contact-content">
        <div className="contact-form">
          <h2>Get In Touch</h2>
          <p>If you have any questions or need help, feel free to contact us via the form below or reach out to us directly.</p>

          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to us through any of the methods below:</p>
          <ul>
            <li><strong>Email:</strong> support@pmsss.com</li>
            <li><strong>Phone:</strong> +91-1234-567890</li>
            <li><strong>Address:</strong> 123 PMSSS Office, Srinagar, Jammu & Kashmir</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
