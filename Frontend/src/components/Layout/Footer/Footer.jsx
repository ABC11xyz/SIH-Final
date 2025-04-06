import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className='footer'>
            <div className="footer-content">
                <div className="footer-left">
                    <img src="DI.png" alt="" />
                </div>
                <div className="footer-right">
                    <div className="links">
                        <h3>Policy</h3>
                        <p>
                            <a href="/terms" className="footer-link">Terms & Conditions</a> | 
                            <a href="/privacy" className="footer-link">Privacy Policy</a> | 
                            <a href="/faq" className="footer-link">FAQ</a>
                        </p>
                    </div>

                    <div className="footer-socials">
                        <h3>Social</h3>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">Twitter</a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">Instagram</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">LinkedIn</a>
                    </div>

                    <div className="footer-contact">
                        <h3>Get in Touch</h3>
                        <p>Contact Us: <a href="mailto:info@pmsss.gov.in">info@pmsss.gov.in</a></p>
                        <p>Helpline: <strong>1800-123-4567</strong></p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <p>&copy; 2024 PMSSS. All rights reserved.</p>
            </div>
            </div>
        </footer>
    );
};

export default Footer;
