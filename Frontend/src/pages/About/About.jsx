import React from 'react';
import './About.css';
import { FaRegBuilding, FaRegHandPointRight, FaRegUser } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';


const About = () => {
  return (
    <div className="about-container">
      <section className="about-banner">
        <div className='banner-part'>
          <img src="banner2.png" alt="About PMSSS" />
          <h1 className="page-title">ABOUT US</h1>
          <h3 className='sub-title'>Prime Minister’s Special Scholarship Scheme</h3>
        </div>
      </section>

      <section className="about-content">
        <div className="content-wrapper">
          <div className="description">
            <h2 className="content-title">Addressing Educational Challenges</h2>
            <p className="content-description">
              In Jammu and Kashmir, many students face significant barriers to accessing quality higher education. 
              Economic constraints, limited institutional infrastructure, and lack of awareness about scholarship opportunities hinder their academic aspirations. 
              The Prime Minister’s Special Scholarship Scheme (PMSSS) aims to alleviate these issues by providing financial support to students pursuing higher education across various disciplines. 
              This initiative not only covers tuition fees but also assists with living expenses, ensuring that students can focus entirely on their studies without the burden of financial stress. 
              By promoting educational accessibility, PMSSS empowers the youth to break the cycle of poverty and contribute positively to the socio-economic development of their communities. 
              Through this program, students are equipped with the necessary resources to achieve their academic goals, paving the way for a brighter future.
            </p>
          </div>
        </div>
       
        <div className="content-wrapper content-wrapper-2">
          <div className='left-img'>
          <Tilt>
        <img src="AB2.jpg" alt="PMSSS Impact" className='large-image'/>
        </Tilt>
        </div>
          <div className="description">
            <h2 className="content-title">Transforming Lives Through Education</h2>
            <p className="content-description">
              The PMSSS is not just about financial assistance; it’s about transforming lives and creating opportunities. 
              With the support of this scholarship, students from Jammu and Kashmir can access premier educational institutions in India, gaining exposure to diverse learning environments and experiences. 
              This exposure is crucial in developing skills that enhance employability and foster personal growth. 
              Moreover, PMSSS facilitates mentorship programs and career counseling, guiding students to make informed choices about their educational paths and future careers. 
              By investing in education, we are investing in the future of the region, enabling the youth to become agents of change in their communities.
            </p>
          </div>
        </div>

        <div className="cards-container">
          <div className="card">
            <FaRegBuilding size={50} className="card-icon" />
            <h3 className="card-title">Our Mission</h3>
            <p className="card-description">
              To provide financial support to students from Jammu and Kashmir, fostering their academic and personal growth.
            </p>
          </div>
          <div className="card">
            <FaRegUser size={50} className="card-icon" />
            <h3 className="card-title">Who We Help</h3>
            <p className="card-description">
              We assist students across various disciplines, ensuring equal opportunities for all.
            </p>
          </div>
          <div className="card">
            <FaRegHandPointRight size={50} className="card-icon" />
            <h3 className="card-title">How to Apply</h3>
            <p className="card-description">
              Follow our simple application process to secure your scholarship and start your educational journey.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
