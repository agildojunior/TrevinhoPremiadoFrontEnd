import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Unidades from '../pages/Unidades';
import Login from '../pages/Login';
import CadastroUnidade from '../pages/CadastroUnidade';
import CadastroCliente from '../pages/CadastroCliente';
import CadastroUsuario from '../pages/CadastroUsuario';
import Vender from '../pages/Vender';
import EditarUnidade from '../pages/EditarUnidade'; 

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
                    <Route path="/unidades" element={<Unidades setAuth={setAuth} />} />
                    <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
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
