import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
`;

export const LoaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
`;

export const LoadingMessage = styled.div`
    font-size: 1.2em;
`;

export const SelectContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const SelectLabel = styled.label`
    font-size: 1em;
`;

export const Select = styled.select`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const InputLabel = styled.label`
    font-size: 1em;
`;

export const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    max-width: 400px;
`;

export const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    color: white;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ResultContainer = styled.div`
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    width: 100%;
    max-width: 600px;
`;

export const ResultTitle = styled.h2`
    margin-bottom: 10px;
`;

export const ResultDetails = styled.div`
    font-size: 1em;

    p {
        margin: 5px 0;
    }
`;
