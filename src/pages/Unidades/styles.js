import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const TableResponsive = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 18px;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  border: 1px solid #ddd;
  padding: 8px;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;

  @media (max-width: 768px) {
    padding: 6px;
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #2980b9;
  }

  @media (max-width: 768px) {
    padding: 3px 7px;
    margin: 0 3px;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoadingMessage = styled.p`
  text-align: center;
  font-size: 18px;
  color: #888;
`;

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

export const ModalHeader = styled.div`
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
`;

export const ModalBody = styled.div`
    margin-bottom: 20px;
`;

export const ModalFooter = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px;
    margin-top: 10px;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #ccc;
`;