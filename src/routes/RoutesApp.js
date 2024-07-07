import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'; 
import Home from '../pages/Home';
import Login from '../pages/Login';

const RoutesApp = ({ isAuth, setAuth }) => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
                <Route path="/home" element={isAuth ? <Home setAuth={setAuth} /> : <Navigate to="/login" />} />
                <Route path="/" element={<Navigate to={isAuth ? "/home" : "/login"} />} />
            </Routes>
        </Router>
    );
};

export default RoutesApp;