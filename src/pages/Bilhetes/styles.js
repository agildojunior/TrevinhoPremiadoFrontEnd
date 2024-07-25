import styled from 'styled-components';

export const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
    position: relative;
    width: 100%;
`;

export const Button = styled.button`
    background-color: #194e92;
    color: white;
    border: none;
    width: 100px;
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    text-align: center;
    padding: 10px;

    &:hover {
        background-color: #0056b3;
    }

    svg {
        font-size: 2em;
        margin-bottom: 10px;
    }

    span {
        font-size: 0.9em;
    }
`;

export const ModalButton = styled.button`
    background-color: #194e92;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 4px;
    width: 400px;
`;

export const ModalHeader = styled.div`
    margin-bottom: 10px;
`;

export const ModalBody = styled.div`
    margin-bottom: 10px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Select = styled.select`
    width: 100%;
    padding: 8px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export const Table = styled.table`
    overflow-x: auto;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    width: 100%;
    border-collapse: collapse;
    font-size: 18px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Th = styled.th`
    background-color: #194e92;
    border: 1px solid #ddd;
    color: #fff;
    padding: 12px;

    @media (max-width: 768px) {
        padding: 8px;
    }
`;

export const Td = styled.td`
    border: 1px solid #ddd;
    padding: 12px;
    background-color: #f9f9f9;

    &:nth-child(even) {
        background-color: #f1f1f1;
    }

    &:hover {
        background-color: #e0e0e0;
    }

    @media (max-width: 768px) {
        padding: 8px;
    }
`;

export const CounterContainer = styled.div`
    background-color: #194e92;
    color: white;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 170px;
    position: absolute;
    right: 0;
    top: 0;
`;

export const CounterTitle = styled.h3`
    margin: 0;
    padding-bottom: 10px;
    font-size: 0.9em;
`;

export const CounterValue = styled.p`
    font-size: 1.5em;
    margin: 0;
`;

export const Loader = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 2em; /* Tamanho maior da fonte */
    font-weight: bold; /* Texto em negrito */
    color: #333;
    z-index: 1002;
    background: rgba(255, 255, 255, 0.8); /* Fundo branco semi-transparente */
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;