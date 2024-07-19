import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, LogoutButton, Content, Title } from './styles';
import { MdExitToApp } from 'react-icons/md';

const Navbar = ({ setAuth, children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuth(false);
        navigate('/login');
    };

    return (
        <>
            <NavbarContainer>
                <Title>Bilhetes</Title>
                <LogoutButton onClick={handleLogout}>
                    <MdExitToApp size={18} /> Sair
                </LogoutButton>
            </NavbarContainer>
            <Content>
                {children}
            </Content>
        </>
    );
};

export default Navbar;
