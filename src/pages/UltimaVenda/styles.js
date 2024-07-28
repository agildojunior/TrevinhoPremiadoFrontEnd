import styled from 'styled-components';

export const BilhetesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
`;

export const Bilhete = styled.div`
    margin-top: 100px;
    display: flex;
    border: 1px solid black;
    width: 250px;
    height: 142px;
    padding: 5px;
    box-sizing: border-box;
    font-size: 10px;
    cursor: pointer;
    background-color: #f9f9f9; 
    transform: rotate(90deg);
`;

export const BilheteLeft = styled.div`
    display: flex;
    width: 40%;
    flex-direction: column;
    padding-right: 5px;
    overflow: hidden;
`;

export const BilheteRight = styled.div`
    flex: 1;
    display: flex;
    width: 60%;
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
    font-size: 8px;
`;

export const Value = styled.div`
    font-weight: bold;
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
    font-weight: bold;
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
    font-weight: bold;
    position: absolute;
    bottom: 5px;
    left: 5px;
    right: 5px;
    text-align: center;
    font-size: 8px;
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

export const PrintButton = styled.button`
    margin: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #194e92;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;