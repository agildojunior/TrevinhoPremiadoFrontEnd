import styled from 'styled-components';

export const Bilhete = styled.div`
    display: flex;
    border: 2px solid black;
    width: 300px;  /* Largura ajustada */
    height: 150px; /* Altura ajustada */
    padding: 5px;
    box-sizing: border-box;
    font-size: 10px; /* Tamanho da fonte ajustado */
    position: relative; /* Permite posicionar a frase na parte inferior */
`;

export const BilheteLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding-right: 5px;
    overflow: hidden; /* Garante que o conteúdo não ultrapasse as bordas */
`;

export const BilheteRight = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    position: relative; /* Permite o posicionamento absoluto dos números */
    overflow: hidden; /* Garante que o conteúdo não ultrapasse as bordas */
`;

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1; /* Garante que o container use o espaço disponível */
`;

export const NumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute; /* Permite o posicionamento absoluto dos números */
    top: 0;
    right: 0;
    bottom: 15px; /* Espaçamento reduzido para a frase na parte inferior */
    left: 0;
    padding: 5px;
    box-sizing: border-box;
`;

export const DataItem = styled.div`
    margin-bottom: 2px; /* Espaçamento reduzido */
    display: flex;
    flex-direction: column;
`;

export const NumberItem = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 2px; /* Espaçamento reduzido */
`;

export const Title = styled.div`
    font-weight: bold;
    margin-bottom: 1px; /* Margem reduzida */
    font-size: 8px; /* Tamanho da fonte ajustado */
`;

export const Value = styled.div`
    border: 1px solid black;
    padding: 2px; /* Reduzido o padding */
    box-sizing: border-box;
    text-align: center;
    width: 100%; /* Ajusta a largura para preencher o espaço disponível */
    font-size: 8px; /* Tamanho da fonte ajustado */
    word-wrap: break-word; /* Quebra o texto longo para evitar ultrapassar as bordas */
`;

export const NumberTitle = styled.div`
    font-weight: bold;
    margin-bottom: 1px; /* Margem reduzida */
    font-size: 8px; /* Tamanho da fonte ajustado */
    text-align: center; /* Alinha o título centralizado */
`;

export const NumberValue = styled.div`
    border: 1px solid black;
    padding: 4px; /* Aumentado o padding para mais espaço interno */
    box-sizing: border-box;
    text-align: center;
    width: 100%; /* Ajusta a largura para preencher o espaço disponível */
    font-size: 10px; /* Tamanho da fonte ajustado */
    word-wrap: break-word; /* Quebra o texto longo para evitar ultrapassar as bordas */
`;

// Estilos específicos para os números
export const NumberTopLeft = styled(NumberItem)`
    position: absolute; /* Permite o posicionamento absoluto dos números */
    top: 5px;
    left: 5px;
`;

export const NumberTopRight = styled(NumberItem)`
    position: absolute; /* Permite o posicionamento absoluto dos números */
    top: 5px;
    right: 5px;
    text-align: right;
`;

export const NumberBottomLeft = styled(NumberItem)`
    position: absolute; /* Permite o posicionamento absoluto dos números */
    bottom: 5px;
    left: 5px;
    text-align: left;
`;

export const NumberBottomRight = styled(NumberItem)`
    position: absolute; /* Permite o posicionamento absoluto dos números */
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
    font-size: 6px; /* Tamanho da fonte ajustado para a frase */
    color: #333; /* Cor do texto */
`;

export const LogoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px; /* Ajuste o tamanho da logo conforme necessário */
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain; /* Ajusta a imagem dentro do container */
    }
`;