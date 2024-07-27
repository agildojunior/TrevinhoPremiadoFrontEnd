import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Unidades from '../pages/Unidades';
import BilhetesListUnidades from '../pages/BilhetesListUnidades';
import CaixasListUnidades from '../pages/CaixasListUnidades';
import Login from '../pages/Login';
import CadastroUnidade from '../pages/CadastroUnidade';
import CadastroCliente from '../pages/CadastroCliente';
import CadastroUsuario from '../pages/CadastroUsuario';
import Vender from '../pages/Vender';
import EditarUnidade from '../pages/EditarUnidade'; 
import Bilhetes from '../pages/Bilhetes';
import Caixas from '../pages/Caixas';
import Relatorios from '../pages/Relatorios';
import UltimaVenda from '../pages/UltimaVenda';

const RoutesApp = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const isAuth = localStorage.getItem('isAuth') === 'true';
    const userLevel = user?.id_Nivel;

    const renderRoutes = () => {
        if (!isAuth) {
            return <Route path="*" element={<Navigate to="/login" />} />;
        }

        switch (userLevel) {
            case 1: // Administrador
                return (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastroUnidade" element={<CadastroUnidade />} />
                        <Route path="/cadastroCliente" element={<CadastroCliente />} />
                        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
                        <Route path="/unidades" element={<Unidades />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades />} />
                        <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes />} />
                        <Route path="/caixas/:id" element={<Caixas />} />
                        <Route path="/relatorios" element={<Relatorios />} />
                    </>
                );
            case 2: // Suporte
                return (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/cadastroUnidade" element={<CadastroUnidade />} />
                        <Route path="/cadastroCliente" element={<CadastroCliente />} />
                        <Route path="/cadastroUsuario" element={<CadastroUsuario />} />
                        <Route path="/unidades" element={<Unidades />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades />} />
                        <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes />} />
                        <Route path="/caixas/:id" element={<Caixas />} />
                        <Route path="/relatorios" element={<Relatorios />} />
                    </>
                );
            case 3: // Gestor
                return (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/unidades" element={<Unidades />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades />} />
                        <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes />} />
                        <Route path="/caixas/:id" element={<Caixas />} />
                        <Route path="/relatorios" element={<Relatorios />} />
                    </>
                );
            case 4: // Coordenador
                return (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/unidades" element={<Unidades />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes />} />
                        <Route path="/caixas/:id" element={<Caixas />} />
                        <Route path="/relatorios" element={<Relatorios />} />
                    </>
                );
            case 5: // Vendedor
                return (
                    <>
                        <Route path="/vender" element={<Vender />} />
                        <Route path="/ultimaVenda" element={<UltimaVenda />} />
                    </>
                );
            default:
                return <Route path="*" element={<Navigate to="/login" />} />;
        }
    };

    return (
        <Routes>
            <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <Login />} />
            {renderRoutes()}
            <Route path="*" element={<Navigate to={isAuth ? (userLevel === 5 ? "/vender" : "/home") : "/login"} />} />
        </Routes>
    );
};

export default RoutesApp;
