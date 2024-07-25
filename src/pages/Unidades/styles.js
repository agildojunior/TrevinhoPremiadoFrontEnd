import styled from 'styled-components';

// Container principal para a página
export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

// Container para a tabela responsiva
export const TableResponsive = styled.div`
  overflow-x: auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

// Tabela
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

// Cabeçalhos da tabela
export const Th = styled.th`
  background-color: #194e92;
  border: 1px solid #ddd;
  color: #fff;
  padding: 12px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

// Células da tabela
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

  @media (max-width: 768px) {
    padding: 8px 16px;
  }
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

// Modal Overlay
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Conteúdo do Modal
export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #000;
  background: #fff;
  max-width: 500px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  z-index: 1001;
`;

// Cabeçalho do Modal
export const ModalHeader = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

// Corpo do Modal
export const ModalBody = styled.div`
  margin-bottom: 20px;
`;

// Rodapé do Modal
export const ModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
`;

// Input
export const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

// Select
export const Select = styled.select`
  width: 100%;
  padding: 8px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
