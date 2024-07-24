import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
`;

export const IconButton = styled.button`
    background-color: #194e92;
    color: white;
    border: none;
    width: 160px; /* Ajustado para o tamanho dos botões */
    height: 160px; /* Ajustado para acomodar o título */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.5em; /* Tamanho dos ícones reduzido */
    transition: background-color 0.3s;
    text-align: center;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Icon = styled.div`
    font-size: 1.8em; /* Tamanho dos ícones reduzido */
`;

export const ButtonLabel = styled.div`
    margin-top: 8px; /* Margem ajustada para o texto */
    font-size: 0.8em; /* Tamanho da fonte reduzido */
`;

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; /* Ajuste conforme necessário */
`;

export const LoadingMessage = styled.div`
    font-size: 1.2em;
    color: #194e92;
`;
