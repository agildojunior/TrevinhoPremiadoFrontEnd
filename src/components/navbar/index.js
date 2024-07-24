import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarContainer, LogoutButton, Content, Title, Logo } from './styles';
import { MdExitToApp } from 'react-icons/md';
import logo from '../../assets/images/logo.png';

const Navbar = ({ setAuth, children }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuth(false);
        navigate('/login');
    };

    const handleTitleClick = () => {
        navigate('/home'); // Navega para a tela Home ao clicar no título
    };

    return (
        <>
            <NavbarContainer>
                <Logo src={logo} alt="Logo" />
                <Title onClick={handleTitleClick}>Trevinho Premiado</Title>
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
