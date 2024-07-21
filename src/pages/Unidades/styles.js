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
