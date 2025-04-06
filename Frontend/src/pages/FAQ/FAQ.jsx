import './FAQ.css';
import FAQSection from '../../components/Home/FAQSection/FAQSection';

const FAQ = () => {
  
  return (
    <div className="faq-container">
      <div className="faq-header">
            <div className='banner-part'>
                <img src="banner2.png" alt="" />
                <h1 className="page-title">FREQUENTLY ASKED QUESTIONS</h1>
                <h3 className='sub-title'>Everything you need to know about the Prime Minister’s Special Scholarship Scheme.</h3>
            </div>
      </div>
      <div className="faq-list">
      <FAQSection />
    </div>
    </div>
  );
};

export default FAQ;
