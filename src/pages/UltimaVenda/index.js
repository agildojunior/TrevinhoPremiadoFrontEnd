import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import {
    Bilhete, BilheteLeft, BilheteRight, DataContainer, NumberContainer, DataItem, ComprovanteContainer, ComprovanteItem, ComprovanteTitle, ComprovanteValue,
    NumberValue, LogoContainer, BilhetesContainer, NumberTopLeft, NumberTopRight, NumberBottomLeft, NumberBottomRight, FooterText, Title, Value, NumberTitle,
} from './styles';
import logo from '../../assets/images/logo.png';

// CSS para impressão
const printStyles = `
@media print {
    body * {
        visibility: hidden;
    }
    .printableArea, .printableArea * {
        visibility: visible;
    }
    .printableArea {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
}`;

const UltimaVenda = () => {
    const [bilhetes, setBilhetes] = useState([]);
    const [pessoa, setPessoa] = useState(null);
    const [transacao, setTransacao] = useState(null);
    const [loading, setLoading] = useState(true); 
    const user = JSON.parse(localStorage.getItem('user'));
    const [quantidade, setQuantidade] = useState(0);
    const [valorTotal, setValorTotal] = useState(0);

    const truncateText = (text, length) => {
        if (text.length <= length) return text;
        return text.slice(0, length) + '...';
    };

    useEffect(() => {
        const fetchUltimaTransacao = async () => {
            try {
                const response = await axiosInstance.get(`/Bilhetes/ultima-transacao/${user.id}`);
                const bilhetes = response.data || [];
                setBilhetes(bilhetes);
                setQuantidade(bilhetes.length);

                const response3 = await axiosInstance.get(`/Transacoes/ultimaTransacao/${bilhetes[0].id}`);
                setTransacao(response3.data || null);
                console.log(response3.data);
    
                const total = bilhetes.reduce((acc, bilhete) => acc + bilhete.valor, 0);
                setValorTotal(total);
    
                if (bilhetes.length > 0) {
                    const bilheteId = bilhetes[0].id;
                    const response2 = await axiosInstance.get(`/bilhetes/pessoa-do-bilhete/${bilheteId}`);
                    setPessoa(response2.data || null);
                }
            } catch (error) {
                console.error('Erro ao buscar bilhetes da última transação:', error);
            } finally {
                setLoading(false); 
            }
        };
    
        fetchUltimaTransacao();
    }, [user.id]);

    useEffect(() => {
        if (!loading && bilhetes.length > 0) {
            handlePrint();
        }
    }, [bilhetes, loading]);

    const getCurrentDate = () => {
        const today = new Date();
        return today.toLocaleDateString('pt-BR');
    };

    const handlePrint = () => {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.media = 'print';
        style.appendChild(document.createTextNode(printStyles));
        document.head.appendChild(style);

        window.print();

        document.head.removeChild(style);
    };

    return (
        <>
            <BilhetesContainer className="printableArea">
                {bilhetes.map((bilhete) => (
                    <Bilhete key={bilhete.id}>
                        <BilheteLeft>
                            <DataContainer>
                                <DataItem>
                                    <Title>N/S</Title>
                                    <Value>{bilhete.id}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>NOME</Title>
                                    <Value>{pessoa ? pessoa.nome : '...'}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>CONTATO</Title>
                                    <Value>{pessoa ? pessoa.contato : '...'}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>ENDEREÇO</Title>
                                    <Value>{pessoa ? truncateText(pessoa.endereco, 20) : '...'}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>VENDEDOR</Title>
                                    <Value>{user.username}</Value>
                                </DataItem>
                            </DataContainer>
                        </BilheteLeft>
                        <BilheteRight>
                            <NumberContainer>
                                <NumberTopLeft>
                                    <NumberTitle>Nº 01</NumberTitle>
                                    <NumberValue>{bilhete.num_01 || '...'}</NumberValue>
                                </NumberTopLeft>
                                <NumberTopRight>
                                    <NumberTitle>Nº 02</NumberTitle>
                                    <NumberValue>{bilhete.num_02 || '...'}</NumberValue>
                                </NumberTopRight>
                                <LogoContainer>
                                    <img src={logo} alt="Logo" />
                                </LogoContainer>
                                <NumberBottomLeft>
                                    <NumberTitle>Nº 03</NumberTitle>
                                    <NumberValue>{bilhete.num_03 || '...'}</NumberValue>
                                </NumberBottomLeft>
                                <NumberBottomRight>
                                    <NumberTitle>EXTRA</NumberTitle>
                                    <NumberValue>...</NumberValue>
                                </NumberBottomRight>
                            </NumberContainer>
                            <FooterText>
                                {getCurrentDate()}
                            </FooterText>
                        </BilheteRight>
                    </Bilhete>
                ))}
                <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <ComprovanteContainer>
                    <ComprovanteItem>
                        <ComprovanteTitle>Quantidade de Bilhetes:</ComprovanteTitle>
                        <ComprovanteValue>{quantidade}</ComprovanteValue>
                    </ComprovanteItem>
                    <ComprovanteItem>
                        <ComprovanteTitle>Valor por Unidade:</ComprovanteTitle>
                        <ComprovanteValue>R$ {bilhetes.length > 0 ? bilhetes[0].valor.toFixed(2) : '0.00'}</ComprovanteValue>
                    </ComprovanteItem>
                    <ComprovanteItem>
                        <ComprovanteTitle>Valor Total:</ComprovanteTitle>
                        <ComprovanteValue>R$ {valorTotal.toFixed(2)}</ComprovanteValue>
                    </ComprovanteItem>
                    <ComprovanteItem>
                        <ComprovanteTitle>Forma de Pagamento:</ComprovanteTitle>
                        <ComprovanteValue>{transacao ? transacao.metodo_Pagamento : '...'}</ComprovanteValue>
                    </ComprovanteItem>
                </ComprovanteContainer>
            </div>
            </BilhetesContainer>
        </>
    );
};

export default UltimaVenda;
