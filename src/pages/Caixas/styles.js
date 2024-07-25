import styled from 'styled-components';

// Container principal para a página de caixas
export const Container = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
`;

// Container para o carregamento
export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

// Mensagem de carregamento
export const LoadingMessage = styled.div`
    font-size: 18px;
    color: #007bff;
`;

// Tabela responsiva
export const TableResponsive = styled.div`
    overflow-x: auto;
`;

// Tabela
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

// Cabeçalhos da tabela
export const Th = styled.th`
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
    background-color: #194e92;
    color: #fff;
`;

// Células da tabela
export const Td = styled.td`
    padding: 12px;
    text-align: left;
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    
    &:nth-child(even) {
        background-color: #f1f1f1;
    }
    
    &:hover {
        background-color: #e0e0e0;
    }
`;

// Botão
export const Button = styled.button`
    background-color: #194e92;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;
