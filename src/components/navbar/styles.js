import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-color: #194e92;
    color: white;
    padding: 10px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

export const LogoutButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: auto;
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

export const Title = styled.h1`
    color: white;
    font-weight: bold;
    margin: 0;
    font-size: 24px; /* Ajuste o tamanho do texto conforme necessário */
`;