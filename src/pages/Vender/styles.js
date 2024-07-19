import styled from 'styled-components';

export const BilhetesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 10px;
`;

export const Bilhete = styled.div`
    display: flex;
    border: 1px solid ${({ selected }) => (selected ? 'blue' : 'black')};
    width: 300px;
    height: 150px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 10px;
    position: relative;
    cursor: pointer;
    min-width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const BilheteLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
    overflow: hidden;
`;

export const BilheteRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`;

export const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 15px;
    left: 0;
    padding: 5px;
    box-sizing: border-box;
`;

export const DataItem = styled.div`
    margin-bottom: 2px;
    display: flex;
    flex-direction: column;
`;

export const NumberItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2px;
`;

export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 1px;
    font-size: 8px;
`;

export const Value = styled.div`
    border: 1px solid black;
    padding: 2px;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    font-size: 8px;
    word-wrap: break-word;
`;

export const NumberTitle = styled.div`
    font-weight: bold;
    margin-bottom: 1px;
    font-size: 8px;
    text-align: center;
`;

export const NumberValue = styled.div`
    border: 1px solid black;
    padding: 4px;
    box-sizing: border-box;
    text-align: center;
    width: 100%;
    font-size: 10px;
    word-wrap: break-word;
`;

export const NumberTopLeft = styled(NumberItem)`
    position: absolute;
    top: 5px;
    left: 5px;
`;

export const NumberTopRight = styled(NumberItem)`
    position: absolute;
    top: 5px;
    right: 5px;
    text-align: right;
`;

export const NumberBottomLeft = styled(NumberItem)`
    position: absolute;
    bottom: 5px;
    left: 5px;
    text-align: left;
`;

export const NumberBottomRight = styled(NumberItem)`
    position: absolute;
    bottom: 5px;
    right: 5px;
    text-align: right;
`;

export const FooterText = styled.div`
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    text-align: center;
    font-size: 6px;
    color: #333;
`;

export const LogoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

// Estilo do botão flutuante
export const FloatingButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 10px 20px;
    background-color: #004080;
    color: white;
    border: none;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;

    &:hover {
        background-color: #003366;
    }
`;

// Estilo do modal
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: ${({ open }) => (open ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

// Estilo do conteúdo do modal
export const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    max-width: 90%;
    text-align: center;
`;

// Botão de fechar o modal
export const CloseButton = styled.button`
    background-color: #0056b3; /* Cor um pouco mais escura */
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    margin-top: 20px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    &:hover {
        background-color: #003d7a; /* Cor mais escura ao passar o mouse */
        transform: scale(1.05);
    }
`;