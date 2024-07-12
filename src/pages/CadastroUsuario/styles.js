import styled from 'styled-components';

export const CadastroForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Select = styled.select`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 4px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    &:disabled {
        background-color: #cccccc;
    }
`;
