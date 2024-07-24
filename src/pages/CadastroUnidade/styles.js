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
    border-radius: 5px;
`;

export const Select = styled.select`
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

export const Dropdown = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0 0 8px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: white;
    max-height: 150px;
    overflow-y: auto;
    width: 100%;
    z-index: 1000;
`;

export const DropdownItem = styled.li`
    padding: 8px;
    cursor: pointer;

    &:hover {
        background-color: #f0f0f0;
    }
`;
