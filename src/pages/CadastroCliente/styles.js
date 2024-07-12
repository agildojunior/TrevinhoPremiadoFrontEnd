import styled from 'styled-components';

export const CadastroForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #194e92;
    color: white;
    cursor: pointer;

    &:hover {
        background-color: #224657;
    }

    &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
    }
`;
