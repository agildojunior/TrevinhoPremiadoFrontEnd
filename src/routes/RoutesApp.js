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

const RoutesApp = ({ isAuth, setAuth }) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userLevel = user?.id_Nivel;

    const renderRoutes = () => {
        if (!isAuth) {
            return <Route path="*" element={<Navigate to="/login" />} />;
        }

        switch (userLevel) {
            case 1: // Administrador
                return (
                    <>
                        <Route path="/home" element={<Home setAuth={setAuth} />} />
                        <Route path="/cadastroUnidade" element={<CadastroUnidade setAuth={setAuth} />} />
                        <Route path="/cadastroCliente" element={<CadastroCliente setAuth={setAuth} />} />
                        <Route path="/cadastroUsuario" element={<CadastroUsuario setAuth={setAuth} />} />
                        <Route path="/unidades" element={<Unidades setAuth={setAuth} />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades setAuth={setAuth} />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades setAuth={setAuth} />} />
                        <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes setAuth={setAuth} />} />
                        <Route path="/caixas/:id" element={<Caixas setAuth={setAuth} />} />
                        <Route path="/relatorios" element={<Relatorios setAuth={setAuth} />} />
                    </>
                );
            case 2: // Suporte
                return (
                    <>
                        <Route path="/home" element={<Home setAuth={setAuth} />} />
                        <Route path="/cadastroUnidade" element={<CadastroUnidade setAuth={setAuth} />} />
                        <Route path="/cadastroCliente" element={<CadastroCliente setAuth={setAuth} />} />
                        <Route path="/cadastroUsuario" element={<CadastroUsuario setAuth={setAuth} />} />
                        <Route path="/unidades" element={<Unidades setAuth={setAuth} />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades setAuth={setAuth} />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades setAuth={setAuth} />} />
                        <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes setAuth={setAuth} />} />
                        <Route path="/caixas/:id" element={<Caixas setAuth={setAuth} />} />
                        <Route path="/relatorios" element={<Relatorios setAuth={setAuth} />} />
                    </>
                );
            case 3: // Gestor
                return (
                    <>
                        <Route path="/home" element={<Home setAuth={setAuth} />} />
                        <Route path="/unidades" element={<Unidades setAuth={setAuth} />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades setAuth={setAuth} />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades setAuth={setAuth} />} />
                        <Route path="/unidades/editar/:id" element={<EditarUnidade />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes setAuth={setAuth} />} />
                        <Route path="/caixas/:id" element={<Caixas setAuth={setAuth} />} />
                        <Route path="/relatorios" element={<Relatorios setAuth={setAuth} />} />
                    </>
                );
            case 4: // Coordenador
                return (
                    <>
                        <Route path="/home" element={<Home setAuth={setAuth} />} />
                        <Route path="/unidades" element={<Unidades setAuth={setAuth} />} />
                        <Route path="/bilhetesListUnidades" element={<BilhetesListUnidades setAuth={setAuth} />} />
                        <Route path="/caixasListUnidades" element={<CaixasListUnidades setAuth={setAuth} />} /> 
                        <Route path="/bilhetes/:id" element={<Bilhetes setAuth={setAuth} />} />
                        <Route path="/caixas/:id" element={<Caixas setAuth={setAuth} />} />
                        <Route path="/relatorios" element={<Relatorios setAuth={setAuth} />} />
                    </>
                );
            case 5: // Vendedor
                return (
                    <Route path="/vender" element={<Vender setAuth={setAuth} />} />
                );
            default:
                return <Route path="*" element={<Navigate to="/login" />} />;
        }
    };

    return (
        <Routes>
            <Route path="/login" element={isAuth ? <Navigate to="/home" /> : <Login setAuth={setAuth} />} />
            {renderRoutes()}
            <Route path="*" element={<Navigate to={isAuth ? (userLevel === 5 ? "/vender" : "/home") : "/login"} />} />
        </Routes>
    );
};

export default RoutesApp;
