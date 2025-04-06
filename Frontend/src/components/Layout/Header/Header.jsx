import './Header.css';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faGraduationCap, faHouse, faAddressCard, faPhone, faEnvelope, faBullhorn } from '@fortawesome/free-solid-svg-icons'; 
import { toast } from 'react-toastify';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        setIsLoggedIn(false);
        navigate('/');
        toast.success("Logged out successfully");
    };

    const announcement = [
        "Scholarship deadlines announced! Apply by 30th September.",
        "Verification process updated. Please check FAQs for details.",
        "Registration Dates Have Been Extended Till 30th."
    ];

    return (
        <header>
            <nav>
                {/* Top Section */}
                <div className="navbar-home">
                    <div className="img1">
                        <Link to="https://www.aicte-india.org/PMSSS%202023-24">
                            <img src="aicet.png" alt="AICTE Logo" />
                        </Link>
                    </div>
                    <div className="img1">
                        <Link to="https://www.aicte-jk-scholarship-gov.in/">
                            <FontAwesomeIcon icon={faGraduationCap} />
                            <span><b>Special Scholarship Scheme for J&K and Ladakh (PM-USPY)</b></span>
                        </Link>
                    </div>
                </div>

                {/* Navigation */}
                <div className='navbar'>
                    <div className="nav-logo">
                        <img src="SW.png" alt="SW logo" />
                        <img src="DI.png" alt="DI logo" />
                    </div>
                    <div className="nav-right">
                        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                            <li>
                                <Link to="/" onClick={() => setMenuOpen(false)}>
                                    <FontAwesomeIcon icon={faHouse} /> Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/helpdesk" onClick={() => setMenuOpen(false)}>HelpDesk</Link>
                            </li>
                          
                                    <li>
                                        <Link to="/student" onClick={() => setMenuOpen(false)}>
                                            <FontAwesomeIcon icon={faAddressCard} /> Student
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/sag" onClick={() => setMenuOpen(false)}>
                                            <FontAwesomeIcon icon={faAddressCard} /> SAG 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/finance" onClick={() => setMenuOpen(false)}>
                                            <FontAwesomeIcon icon={faAddressCard} /> Finance
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={handleLogout}>Logout</Link>
                                    </li>
                        
                                    <li>
                                        <Link to="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                                    </li>
                                    <li>
                                        <Link to="/signup" onClick={() => setMenuOpen(false)}>Signup</Link>
                                    </li>
                            
                            <li>
                                <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                            </li>
                            <li>
                                <Link to="/faq" onClick={() => setMenuOpen(false)}>FAQ's</Link>
                            </li>
                            <li>
                                <Link to="/how-to-apply" onClick={() => setMenuOpen(false)}>How to Apply</Link>
                            </li>
                            <li>
                                <Link to="/contact-us" onClick={() => setMenuOpen(false)}>Contact Us</Link>
                            </li>
                        </ul>
                        <button className='menu-icon' onClick={handleMenuToggle}>
                            <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                        </button>
                    </div>
                </div>

                {/* Contact Info, Admin Login, and Announcement */}
                <div className="nav-lower">
                    <div className="con">
                        <p><FontAwesomeIcon icon={faPhone} /> +123-91234568</p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> contact@pmsss.in</p>
                    </div>
                    <div className="announcement">
                        <FontAwesomeIcon icon={faBullhorn} className="announcement-icon" />
                        <div className="announcement-text">
                            <p>
                                <span className="new-label">NEW</span> 
                                {announcement.join(' | ')} 
                            </p>
                        </div>
                    </div>
                    <div className="Adminitritative">
                        <button>Administrative Login</button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
