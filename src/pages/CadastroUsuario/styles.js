import styled from 'styled-components';

export const CadastroForm = styled.form`
    padding: 30px 0px;
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
    background-color: #194e92;
    color: white;
    cursor: pointer;
    &:disabled {
        background-color: #cccccc;
    }
`;
