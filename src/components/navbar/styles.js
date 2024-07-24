import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #194e92;
    color: white;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    /* Ajuste a posição dos itens com espaçamento apropriado */
    justify-content: space-between; /* Isso alinha a logo, título e botão de logout */
`;

export const Logo = styled.img`
    height: 60px; /* Ajuste a altura da logo conforme necessário */
    margin-right: 15px; /* Espaço entre a logo e o título */
`;

export const Title = styled.h1`
    color: white;
    cursor: pointer;
    font-weight: bold;
    margin: 0;
    font-size: 34px; /* Ajuste o tamanho do texto conforme necessário */
    display: flex;
    align-items: center;
`;

export const LogoutButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 26px;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 5px 10px;

    &:hover {
        opacity: 0.8;
    }

    svg {
        margin-right: 5px;
    }
`;

export const Content = styled.div`
    margin-top: 70px; /* Ajuste conforme a altura do seu Navbar */
    padding: 0 20px;
`;
