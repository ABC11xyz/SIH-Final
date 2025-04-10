import React from 'react';
import Login from '../../components/Auth/Login/Login.jsx';
import './Login.css'

const LoginPage = ({setIsLoggedIn}) => {
    return (
        <div className='auth-bg'>
        <Login setIsLoggedIn = {setIsLoggedIn} />
        </div>
    );
};

export default LoginPage;
