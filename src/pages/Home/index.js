import React from 'react';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div>
            <p>Bem-vindo, {user.username}!</p>
            <p>Seu ID de usuário é: {user.id}</p>
        </div>
    );
};

export default Home;