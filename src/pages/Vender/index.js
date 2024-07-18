import React from 'react';
import {
    Bilhete,
    BilheteLeft,
    BilheteRight,
    DataContainer,
    NumberContainer,
    DataItem,
    Title,
    Value,
    NumberTitle,
    LogoContainer,
    NumberValue,
    NumberTopLeft,
    NumberTopRight,
    NumberBottomLeft,
    NumberBottomRight,
    FooterText
} from './styles';

import logo from '../../assets/images/logo.png';

const Vender = () => {
    return (
        <Bilhete>
            <BilheteLeft>
                <DataContainer>
                    <DataItem>
                        <Title>N/D</Title>
                        <Value>...</Value>
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
                        <Value>...</Value>
                    </DataItem>
                </DataContainer>
            </BilheteLeft>
            <BilheteRight>
                <NumberContainer>
                    <NumberTopLeft>
                        <NumberTitle>Nº 01</NumberTitle>
                        <NumberValue>0001</NumberValue>
                    </NumberTopLeft>
                    <NumberTopRight>
                        <NumberTitle>Nº 02</NumberTitle>
                        <NumberValue>0002</NumberValue>
                    </NumberTopRight>
                    <LogoContainer>
                        <img src={logo} alt="Logo" />
                    </LogoContainer>
                    <NumberBottomLeft>
                        <NumberTitle>Nº 03</NumberTitle>
                        <NumberValue>0003</NumberValue>
                    </NumberBottomLeft>
                    <NumberBottomRight>
                        <NumberTitle>EXTRA</NumberTitle>
                        <NumberValue>0004</NumberValue>
                    </NumberBottomRight>
                </NumberContainer>
                <FooterText>
                    Parte do valor arrecadado é voltado para doações e famílias carentes.
                </FooterText>
            </BilheteRight>
        </Bilhete>
    );
};

export default Vender;
