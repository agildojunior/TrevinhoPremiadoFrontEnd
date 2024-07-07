import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = ({ setAuth }) => {
    const history = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuth(false);
        history('/login');
    };

    return (
        <div>
            <h2>Página Inicial</h2>
            <p>Bem-vindo, {user.username}!</p>
            <p>Seu ID de usuário é: {user.id}</p>
            <button onClick={handleLogout}>Sair</button>
        </div>
    );
};

export default Home;