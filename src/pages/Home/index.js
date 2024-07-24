import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaHome, FaTicketAlt, FaBuilding, FaUserPlus, FaUserEdit } from 'react-icons/fa'; 
import { Container, ButtonContainer, IconButton, Icon, ButtonLabel } from './styles'; 

const Home = () => {
    const navigate = useNavigate(); 
    const user = JSON.parse(localStorage.getItem('user'));
    const isGestor = user?.id_Nivel === 3;
    const isCoordenador = user?.id_Nivel === 4;

    const handleNavigate = (path) => {
        navigate(path);
    };

    return (
        <Container>
            <ButtonContainer>
                <IconButton onClick={() => handleNavigate('/home')} title="Home">
                    <Icon><FaHome /></Icon>
                    <ButtonLabel>Home</ButtonLabel>
                </IconButton>
                {!isGestor && !isCoordenador && (
                    <>
                        <IconButton onClick={() => handleNavigate('/cadastroUnidade')} title="Cadastro Unidade">
                            <Icon><FaBuilding /></Icon>
                            <ButtonLabel>Cadastro Unidade</ButtonLabel>
                        </IconButton>
                        <IconButton onClick={() => handleNavigate('/cadastroCliente')} title="Cadastro Cliente">
                            <Icon><FaUserPlus /></Icon>
                            <ButtonLabel>Cadastro Cliente</ButtonLabel>
                        </IconButton>
                        <IconButton onClick={() => handleNavigate('/cadastroUsuario')} title="Cadastro Usuário">
                            <Icon><FaUserEdit /></Icon>
                            <ButtonLabel>Cadastro Usuário</ButtonLabel>
                        </IconButton>
                    </>
                )}
                <IconButton onClick={() => handleNavigate('/unidades')} title="Unidades">
                    <Icon><FaBuilding /></Icon>
                    <ButtonLabel>Unidades</ButtonLabel>
                </IconButton>
                <IconButton onClick={() => handleNavigate('/bilhetesListUnidades')} title="Bilhetes">
                    <Icon><FaTicketAlt /></Icon>
                    <ButtonLabel>Bilhetes</ButtonLabel>
                </IconButton>
            </ButtonContainer>
        </Container>
    );
};

export default Home;
