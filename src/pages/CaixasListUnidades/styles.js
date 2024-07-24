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
    width: 160px; 
    height: 160px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1.5em; 
    transition: background-color 0.3s;
    text-align: center;

    &:hover {
        background-color: #0056b3;
    }
`;

export const Icon = styled.div`
    font-size: 1.8em;
`;

export const ButtonLabel = styled.div`
    margin-top: 8px; 
    font-size: 0.8em; 
`;

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh; 
`;

export const LoadingMessage = styled.div`
    font-size: 1.2em;
    color: #194e92;
`;

export const FilterInput = styled.input`
    padding: 10px;
    font-size: 1em;
    border-radius: 4px;
    border: 1px solid #aaa;
    width: 100%;
    max-width: 400px;
`;
