import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { Container, ButtonContainer, Button, ModalButton, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input, Select, Table, Th, Td } from './styles';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { FaTicketAlt, FaUserPlus } from 'react-icons/fa';

const Bilhetes = () => {
    const { id } = useParams();
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [quantidadeBilhetes, setQuantidadeBilhetes] = useState(0);
    const [vendedores, setVendedores] = useState([]);
    const [selectedVendedor, setSelectedVendedor] = useState('');

    useEffect(() => {
        const fetchVendedores = async () => {
            try {
                const response = await axiosInstance.get(`/Vendedores/unidade/${id}`);
                setVendedores(response.data);
            } catch (error) {
                console.error('Erro ao buscar vendedores:', error);
            }
        };

        fetchVendedores();
    }, [id]);

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
            closeModal();
        }
    };

    const handleAssign = async () => {
        try {
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
            closeModal();
        }
    };

    return (
        <Container>
            <ButtonContainer>
                <Button onClick={() => openModal('distribute')}>
                    <FaTicketAlt />
                    <span>Distribuir Bilhetes</span>
                </Button>
                <Button onClick={() => openModal('assign')}>
                    <FaUserPlus />
                    <span>Atribuir a Vendedor</span>
                </Button>
            </ButtonContainer>

            {modalIsOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <h2>{modalType === 'distribute' ? 'Distribuir Bilhetes' : 'Atribuir Bilhetes a Vendedor'}</h2>
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="quantidadeBilhetes">Quantidade de Bilhetes:</label>
                            <Input
                                type="number"
                                id="quantidadeBilhetes"
                                value={quantidadeBilhetes}
                                onChange={(e) => setQuantidadeBilhetes(e.target.value)}
                            />
                            {modalType === 'assign' && (
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
                            <ModalButton onClick={modalType === 'distribute' ? handleDistribute : handleAssign}>
                                {modalType === 'distribute' ? 'Distribuir' : 'Atribuir'}
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
                        <Th>Bilhetes</Th>
                        <Th>Vendidos</Th>
                    </tr>
                </thead>
                <tbody>
                    {vendedores.map((vendedor) => (
                        <tr key={vendedor.id}>
                            <Td>{vendedor.nome}</Td>
                            <Td>{vendedor.quantidadeBilhetes}</Td>
                            <Td>{vendedor.quantidadeBilhetesVendidos}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default Bilhetes;
