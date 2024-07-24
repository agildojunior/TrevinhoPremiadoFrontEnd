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
    width: 200px; /* Tamanho fixo dos botões */
    height: 200px; /* Ajustado para acomodar o título */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    font-size: 2em; /* Tamanho dos ícones */
    transition: background-color 0.3s;
    text-align: center;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Icon = styled.div`
    font-size: 2.5em; /* Tamanho dos ícones */
`;

export const ButtonLabel = styled.div`
    margin-top: 10px;
    font-size: 0.9em; /* Tamanho do texto */
`;
