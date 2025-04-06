import React from 'react';
import './ContactInfo.css';

const ContactInfo = () => (
  <section className="contact-info">
    <h2>Your Feedback is Valuable For Us</h2>
    <form className="contact-form">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <textarea placeholder="Your Message" rows={4}></textarea>
      <button type="submit">Submit</button>
    </form>
  </section>
);

export default ContactInfo;
