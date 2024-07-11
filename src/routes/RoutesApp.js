import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Teste from '../pages/Teste';
import Login from '../pages/Login';
import CadastroUnidade from '../pages/CadastroUnidade';

const RoutesApp = ({ isAuth, setAuth }) => {
    return (
        <Routes>
            <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
            <Route path="/home" element={isAuth ? <Home setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/cadastroUnidade" element={isAuth ? <CadastroUnidade setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/teste" element={isAuth ? <Teste setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isAuth ? "/home" : "/login"} />} />
        </Routes>
    );
};

export default RoutesApp;
