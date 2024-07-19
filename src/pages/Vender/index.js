import React, { useEffect, useState } from 'react';
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
    FooterText,
    BilhetesContainer,
    FloatingButton,
    ModalOverlay,
    ModalContent,
    CloseButton
} from './styles';
import logo from '../../assets/images/logo.png';
import axiosInstance from '../../axiosInstance';

const Vender = () => {
    const [bilhetes, setBilhetes] = useState([]);
    const [selectedBilhetes, setSelectedBilhetes] = useState(new Set());
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        const fetchBilhetes = async () => {
            try {
                const user = JSON.parse(localStorage.getItem('user'));
                const response = await axiosInstance.get(`/bilhetes/listar-por-vendedor`, {
                    params: {
                        idUsuario: user.id,
                        vendido: false
                    }
                });
                setBilhetes(response.data);
            } catch (error) {
                console.error('Erro ao buscar bilhetes:', error);
            }
        };

        fetchBilhetes();
    }, []);

    const handleBilheteClick = (id) => {
        setSelectedBilhetes(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            console.log(`Bilhetes selecionados: ${Array.from(newSelected).join(',')}`);
            return newSelected;
        });
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <>
            <BilhetesContainer>
                {bilhetes.map((bilhete) => (
                    <Bilhete
                        key={bilhete.id}
                        selected={selectedBilhetes.has(bilhete.id)}
                        onClick={() => handleBilheteClick(bilhete.id)}
                    >
                        <BilheteLeft>
                            <DataContainer>
                                <DataItem>
                                    <Title>N/D</Title>
                                    <Value>{bilhete.id}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>NOME</Title>
                                    <Value>{bilhete.nome || '...'}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>CONTATO</Title>
                                    <Value>{bilhete.contato || '...'}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>ENDEREÇO</Title>
                                    <Value>{bilhete.endereco || '...'}</Value>
                                </DataItem>
                                <DataItem>
                                    <Title>VENDEDOR</Title>
                                    <Value>{bilhete.vendedor || '...'}</Value>
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
                                    <NumberValue>{bilhete.extra || '...'}</NumberValue>
                                </NumberBottomRight>
                            </NumberContainer>
                            <FooterText>
                                XX/XX/XXXX
                            </FooterText>
                        </BilheteRight>
                    </Bilhete>
                ))}
            </BilhetesContainer>
            <FloatingButton onClick={toggleModal}>
                Vender bilhetes
            </FloatingButton>
            <ModalOverlay open={modalOpen}>
                <ModalContent>
                    <h2>Modal</h2>
                    <p>Conteúdo do Modal</p>
                    <CloseButton onClick={toggleModal}>Fechar</CloseButton>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

export default Vender;
