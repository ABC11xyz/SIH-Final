import './App.css';
import  { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import LoginPage from './pages/Login/Login.jsx';
import SignupPage from './pages/Signup/Signup.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import CommunityPage from './pages/CommunityPage/CommunityPage.jsx';
import ApplicationForm from './pages/ApplicationForm/ApplicationForm.jsx';
import VerifyDocument from './pages/VerifyDocument/VerifyDocument.jsx'; 
import Header from './components/Layout/Header/Header.jsx';
import Footer from './components/Layout/Footer/Footer.jsx';
import VerifyIdentity from './components/Auth/VerifyIdentity/VerifyIdentity.jsx';
import About from './pages/About/About.jsx';
import FAQ from './pages/FAQ/FAQ.jsx';
import HowToApply from './pages/HowToApply/HowToApply.jsx';
import ContactUs from './pages/ContactUs/ContactUs.jsx';
import FinanceDashboard from './components/Dashboard/FinanceDashboard/FinanceDashboard.jsx';
import SAGDashboard from './components/Dashboard/SAGDashboard/SAGDashboard.jsx';
import StudentDashboard from './components/Dashboard/StudentDashboard/StudentDashboard.jsx';

const App = () => {

    const [isLoggedIn , setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [isEmailVerified , setIsEmailVerified] = useState(false)



    return (
        <Router>
            <Header  isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn}  />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage setIsLoggedIn = {setIsLoggedIn} />} />

                    <Route path="/signup" element={<SignupPage 
                     isEmailVerified = {isEmailVerified} setIsEmailVerified = {setIsEmailVerified}
                     />} />

                    <Route path="/helpdesk" element={<CommunityPage />} />
                    <Route path="/apply" element={<ApplicationForm />} />
                    <Route path="sag/verify/:documentId" element={<VerifyDocument />} />
                    <Route path="*" element={<NotFound />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/faq' element={<FAQ />} />
                    <Route path='/how-to-apply' element={<HowToApply />} />
                    <Route path='/contact-us' element={<ContactUs />} />
                    <Route path='/verify' element={<VerifyIdentity />} />
                    <Route path='/finance' element={<FinanceDashboard />} />
                    <Route path='/sag' element={<SAGDashboard />} />
                    <Route path='/student' element={<StudentDashboard />} />
                </Routes>
            </main>
             <Footer />
        </Router>
    );
};

export default App;
