import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Bilhete, BilheteLeft, BilheteRight, DataContainer, NumberContainer, DataItem, Title, Value, NumberTitle, LogoContainer,
    NumberValue, NumberTopLeft, NumberTopRight, NumberBottomLeft, NumberBottomRight, FooterText, BilhetesContainer, 
    FloatingButton, ModalOverlay, ModalContent, CloseButton, Form, Label, Input, SubmitButton, Select, FloatingButtonLeft
} from './styles';
import logo from '../../assets/images/logo.png';
import axiosInstance from '../../axiosInstance';

const Vender = () => {
    const navigate = useNavigate(); 
    const [bilhetes, setBilhetes] = useState([]);
    const [selectedBilhetes, setSelectedBilhetes] = useState(new Set());
    const [modalOpen, setModalOpen] = useState(false);
    const [pessoa, setPessoa] = useState(null);
    const [nome, setNome] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [contato, setContato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [metodoPagamento, setMetodoPagamento] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        if (pessoa) {
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
        }
    }, [pessoa]);

    const handleBilheteClick = (id) => {
        setSelectedBilhetes(prevSelected => {
            const newSelected = new Set(prevSelected);
            if (newSelected.has(id)) {
                newSelected.delete(id);
            } else {
                newSelected.add(id);
            }
            return newSelected;
        });
    };

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const dt_Nascimento = new Date(dtNascimento).toISOString();
            const params = new URLSearchParams({
                nome: nome,
                dt_Nascimento: dt_Nascimento,
                contato: contato,
                endereco: endereco
            }).toString();
            const response = await axiosInstance.post(`/Pessoas/find-or-create?${params}`);
            setPessoa(response.data);
        } catch (error) {
            console.error('Erro ao encontrar ou criar pessoa:', error);
        }
    };

    // Função para obter a data atual no formato DD/MM/AAAA
    const getCurrentDate = () => {
        const today = new Date();
        return today.toLocaleDateString('pt-BR');
    };

    const handleVenda = async () => {
        if (!metodoPagamento) {
            alert('Por favor, selecione um método de pagamento.');
            return;
        }
    
        try {
            const idsBilhetes = Array.from(selectedBilhetes).join(',');
            const params = {
                idUsuario: user.id,
                idPessoa: pessoa.id,
                idsBilhetes: idsBilhetes,
                metodoPagamento: metodoPagamento
            };
            
            await axiosInstance.post(`/Caixas/processar-venda`, null, { params });
            
            alert('Venda processada com sucesso!');
            setTimeout(() => {
                navigate('/ultimaVenda');
            }, 1000);
        } catch (error) {
            console.error('Erro ao processar venda:', error);
            alert('Erro ao processar venda.');
        }
    };

    const handleUltimaVendaClick = () => {
        navigate('/ultimaVenda'); // Navegar para a rota /ultimaVenda
    };

    return (
        <>
            {!pessoa ? (
                <Form onSubmit={handleSubmit}>
                    <h2>Dados do comprador</h2>
                    <Label>
                        Nome:
                        <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                    </Label>
                    <Label>
                        Data de Nascimento:
                        <Input type="date" value={dtNascimento} onChange={(e) => setDtNascimento(e.target.value)} required />
                    </Label>
                    <Label>
                        Telefone:
                        <Input type="text" value={contato} onChange={(e) => setContato(e.target.value)} required />
                    </Label>
                    <Label>
                        Endereço:
                        <Input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
                    </Label>
                    <SubmitButton type="submit">Próximo</SubmitButton>
                </Form>
            ) : (
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
                                            <Value>{pessoa.nome}</Value>
                                        </DataItem>
                                        <DataItem>
                                            <Title>CONTATO</Title>
                                            <Value>{pessoa.contato}</Value>
                                        </DataItem>
                                        <DataItem>
                                            <Title>ENDEREÇO</Title>
                                            <Value>{pessoa.endereco}</Value>
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
                                            <NumberValue>{bilhete.extra || '...'}</NumberValue>
                                        </NumberBottomRight>
                                    </NumberContainer>
                                    <FooterText>
                                        {getCurrentDate()}
                                    </FooterText>
                                </BilheteRight>
                            </Bilhete>
                        ))}
                    </BilhetesContainer>
                    <FloatingButton onClick={toggleModal}>Finalizar Compra</FloatingButton>
                    <FloatingButtonLeft onClick={handleUltimaVendaClick}>Última Venda</FloatingButtonLeft>
                    <ModalOverlay open={modalOpen}>
                        <ModalContent>
                            <h2>Deseja finalizar esta compra?</h2>
                            <Label>
                                Método de Pagamento:
                                <Select value={metodoPagamento} onChange={(e) => setMetodoPagamento(e.target.value)} required>
                                    <option value="" disabled>Selecione</option>
                                    <option value="PIX">PIX</option>
                                    <option value="DINHEIRO">DINHEIRO</option>
                                </Select>
                            </Label>
                            <SubmitButton onClick={handleVenda}>Confirmar</SubmitButton>
                            <CloseButton onClick={toggleModal}>Cancelar</CloseButton>
                        </ModalContent>
                    </ModalOverlay>
                </>
            )}
        </>
    );
};

export default Vender;