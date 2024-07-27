import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import {
    Bilhete, BilheteLeft, BilheteRight, DataContainer, NumberContainer, DataItem, Title, Value, NumberTitle, PrintButton,
    NumberValue, LogoContainer, BilhetesContainer, NumberTopLeft, NumberTopRight, NumberBottomLeft, NumberBottomRight, FooterText
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
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        const fetchUltimaTransacao = async () => {
            try {
                const response = await axiosInstance.get(`/Bilhetes/ultima-transacao/${user.id}`);
                setBilhetes(response.data || []); 
            } catch (error) {
                console.error('Erro ao buscar bilhetes da última transação:', error);
            }
        };

        fetchUltimaTransacao();
    }, [user.id]);

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
            <PrintButton onClick={handlePrint}>Imprimir Bilhetes</PrintButton>
            <BilhetesContainer className="printableArea">
                {bilhetes.map((bilhete) => (
                    <Bilhete key={bilhete.id}>
                        <BilheteLeft>
                            <DataContainer>
                                <DataItem>
                                    <Title>ID</Title>
                                    <Value>{bilhete.id}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>NOME</Title>
                                    <Value>...</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>CONTATO</Title>
                                    <Value>...</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>ENDEREÇO</Title>
                                    <Value>...</Value>
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
            </BilhetesContainer>
        </>
    );
};

export default UltimaVenda;
