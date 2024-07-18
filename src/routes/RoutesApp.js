import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Teste from '../pages/Teste';
import Login from '../pages/Login';
import CadastroUnidade from '../pages/CadastroUnidade';
import CadastroCliente from '../pages/CadastroCliente';
import CadastroUsuario from '../pages/CadastroUsuario';
import Vender from '../pages/Vender';
import Vendidos from '../pages/Vendidos';

const RoutesApp = ({ isAuth, setAuth }) => {
    return (
        <Routes>
            <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
            <Route path="/home" element={isAuth ? <Home setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/cadastroUnidade" element={isAuth ? <CadastroUnidade setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/cadastroCliente" element={isAuth ? <CadastroCliente setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/cadastroUsuario" element={isAuth ? <CadastroUsuario setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/vender" element={isAuth ? <Vender setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/vendidos" element={isAuth ? <Vendidos setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="/teste" element={isAuth ? <Teste setAuth={setAuth} /> : <Navigate to="/login" />} />
            <Route path="*" element={<Navigate to={isAuth ? "/home" : "/login"} />} />
        </Routes>
    );
};

export default RoutesApp;
