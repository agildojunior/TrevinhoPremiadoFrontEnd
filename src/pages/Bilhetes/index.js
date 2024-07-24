import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { Container, ButtonContainer, Button, ModalButton, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Select, Table, Th, Td, CounterContainer, CounterTitle, CounterValue, Loader } from './styles'; // Importando Loader
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTicketAlt, FaUserPlus, FaPlusSquare, FaRedo } from 'react-icons/fa'; 

const Bilhetes = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [quantidadeBilhetes, setQuantidadeBilhetes] = useState(0);
    const [vendedores, setVendedores] = useState([]);
    const [selectedVendedor, setSelectedVendedor] = useState('');
    const [bilhetesEstoque, setBilhetesEstoque] = useState(0);
    const [loading, setLoading] = useState(false); 
    const user = JSON.parse(localStorage.getItem('user')); 

    useEffect(() => {
        const fetchVendedores = async () => {
            try {
                const response = await axiosInstance.get(`/Vendedores/unidade/${id}`);
                setVendedores(response.data);
            } catch (error) {
                console.error('Erro ao buscar vendedores:', error);
            }
        };

        const fetchBilhetesEstoque = async () => {
            try {
                const response = await axiosInstance.get(`/Bilhetes/estoque-unidade/${id}`);
                setBilhetesEstoque(response.data);
            } catch (error) {
                console.error('Erro ao buscar bilhetes em estoque:', error);
            }
        };

        fetchVendedores();
        fetchBilhetesEstoque();
    }, [id]);

    useEffect(() => {
        const checkCoordinator = async () => {
            try {
                const response = await axiosInstance.get(`/Unidades/${id}`);
                const unidade = response.data;

                if (unidade.id_Pessoa !== user.id_Pessoa && user.id_Nivel === 4) {
                    navigate('/home');
                }
            } catch (error) {
                console.error('Erro ao verificar coordenador:', error);
            }
        };

        checkCoordinator();
    }, [id, user.id_Pessoa, user.id_Nivel, navigate]);

    const openModal = (type) => {
        setModalType(type);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setQuantidadeBilhetes(0);
        setSelectedVendedor('');
    };

    const handleDistribute = async () => {
        try {
            setLoading(true);
            await axiosInstance.post('/DistribuicaoBilhete/distribuir-bilhetes', null, {
                params: {
                    quantidadeBilhetes,
                    idUnidade: id
                }
            });
            toast.success('Bilhetes distribuídos com sucesso!');
        } catch (error) {
            toast.error('Erro ao distribuir bilhetes!');
            console.error('Erro ao distribuir bilhetes:', error);
        } finally {
            setLoading(false); 
            closeModal();
            setTimeout(() => {
                window.location.reload(); 
            }, 3000);
        }
    };

    const handleAssign = async () => {
        try {
            setLoading(true); 
            await axiosInstance.post('/DistribuicaoBilhete/distribuir-bilhetes-para-vendedor', null, {
                params: {
                    quantidadeBilhetes,
                    idUnidade: id,
                    idVendedor: selectedVendedor
                }
            });
            toast.success('Bilhetes atribuídos ao vendedor com sucesso!');
        } catch (error) {
            toast.error('Erro ao atribuir bilhetes!');
            console.error('Erro ao atribuir bilhetes:', error);
        } finally {
            setLoading(false); 
            closeModal();
            setTimeout(() => {
                window.location.reload(); 
            }, 3000);
        }
    };

    const handleGenerate = async () => {
        try {
            setLoading(true); 
            await axiosInstance.post('/Bilhetes/gerar-bilhetes-unidade', null, {
                params: {
                    idUnidade: id,
                    valorBilhete: 2 
                }
            });
            toast.success('Bilhetes gerados com sucesso!');
        } catch (error) {
            toast.warning('Bilhetes já gerados!');
        } finally {
            setLoading(false); 
        }
    };

    const handleReturn = async () => {
        try {
            setLoading(true);
            await axiosInstance.post('/Bilhetes/retornar-para-estoque', null, {
                params: {
                    quantidadeBilhetes,
                    idVendedor: selectedVendedor
                }
            });
            toast.success('Bilhetes retornados ao estoque com sucesso!');
        } catch (error) {
            toast.error('Erro ao retornar bilhetes ao estoque!');
            console.error('Erro ao retornar bilhetes ao estoque:', error);
        } finally {
            setLoading(false);
            closeModal();
            setTimeout(() => {
                window.location.reload(); 
            }, 3000);
        }
    };

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={handleGenerate} disabled={loading}>
                    <FaPlusSquare /> 
                    <span>Gerar Bilhetes</span>
                </Button>
                <Button onClick={() => openModal('distribute')} disabled={loading}>
                    <FaTicketAlt />
                    <span>Distribuir Bilhetes</span>
                </Button>
                {user.id_Nivel !== 4 && (
                    <>
                        <Button onClick={() => openModal('assign')} disabled={loading}>
                            <FaUserPlus />
                            <span>Atribuir a Vendedor</span>
                        </Button>
                        <Button onClick={() => openModal('return')} disabled={loading}>
                            <FaRedo />
                            <span>Retornar ao Estoque</span>
                        </Button>
                    </>
                )}
                <CounterContainer>
                    <CounterTitle>Bilhetes em estoque</CounterTitle>
                    <CounterValue>{bilhetesEstoque}</CounterValue>
                </CounterContainer>
            </ButtonContainer>

            {loading && <Loader>Carregando...</Loader>}

            {modalIsOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{modalType === 'distribute' ? 'Distribuir Bilhetes' : modalType === 'assign' ? 'Atribuir Bilhetes a Vendedor' : 'Retornar Bilhetes ao Estoque'}</h2>
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="quantidadeBilhetes">Quantidade de Bilhetes:</label>
                            <Input
                                type="number"
                                id="quantidadeBilhetes"
                                value={quantidadeBilhetes}
                                onChange={(e) => setQuantidadeBilhetes(e.target.value)}
                            />
                            {(modalType === 'assign' || modalType === 'return') && (
                                <>
                                    <label htmlFor="vendedor">Selecionar Vendedor:</label>
                                    <Select
                                        id="vendedor"
                                        value={selectedVendedor}
                                        onChange={(e) => setSelectedVendedor(e.target.value)}
                                    >
                                        <option value="">Selecione um vendedor</option>
                                        {vendedores.map((vendedor) => (
                                            <option key={vendedor.id} value={vendedor.id}>
                                                {vendedor.nome}
                                            </option>
                                        ))}
                                    </Select>
                                </>
                            )}
                        </ModalBody>
                        <ModalFooter>
                            <ModalButton onClick={modalType === 'distribute' ? handleDistribute : modalType === 'assign' ? handleAssign : handleReturn} disabled={loading}>
                                {modalType === 'distribute' ? 'Distribuir' : modalType === 'assign' ? 'Atribuir' : 'Retornar'}
                            </ModalButton>
                            <ModalButton onClick={closeModal}>Cancelar</ModalButton>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            )}

            <Table>
                <thead>
                    <tr>
                        <Th>Nome</Th>
                        <Th>Bilhetes Atribuídos</Th>
                        <Th>Vendidos</Th>
                    </tr>
                </thead>
                <tbody>
                    {vendedores.map((vendedor) => (
                        <tr key={vendedor.id}>
                            <Td>{vendedor.nome}</Td>
                            <Td>{vendedor.totalBilhetes}</Td>
                            <Td>{vendedor.totalVendidos}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Bilhetes;
