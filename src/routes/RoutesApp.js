import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Teste from '../pages/Teste';
import Login from '../pages/Login';
import CadastroUnidade from '../pages/CadastroUnidade';
import CadastroCliente from '../pages/CadastroCliente';
import CadastroUsuario from '../pages/CadastroUsuario';
import Vender from '../pages/Vender';

const RoutesApp = ({ isAuth, setAuth }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const isVendedor = user?.id_Nivel === 5;

    return (
        <Routes>
            <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
            {isAuth && !isVendedor && (
                <>
                    <Route path="/home" element={<Home setAuth={setAuth} />} />
                    <Route path="/cadastroUnidade" element={<CadastroUnidade setAuth={setAuth} />} />
                    <Route path="/cadastroCliente" element={<CadastroCliente setAuth={setAuth} />} />
                    <Route path="/cadastroUsuario" element={<CadastroUsuario setAuth={setAuth} />} />
                    <Route path="/teste" element={<Teste setAuth={setAuth} />} />
                </>
            )}
            {isAuth && isVendedor && (
                <Route path="/vender" element={<Vender setAuth={setAuth} />} />
            )}
            <Route path="*" element={<Navigate to={isAuth ? (isVendedor ? "/vender" : "/home") : "/login"} />} />
        </Routes>
    );
};

export default RoutesApp;