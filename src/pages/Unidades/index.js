import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axiosInstance from '../../axiosInstance';
import { Container, TableResponsive, Table, Th, Td, Button, LoaderContainer, LoadingMessage, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, Input } from './styles';
import { toast } from 'react-toastify';

const Unidades = () => {
    const [unidades, setUnidades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedUnidade, setSelectedUnidade] = useState(null);
    const [quantidadeBilhetes, setQuantidadeBilhetes] = useState(0);
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchUnidades = async () => {
            try {
                const response = await axiosInstance.get('/Unidades/unidadeslist');
                setUnidades(response.data);
            } catch (error) {
                console.error('Erro ao buscar unidades:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUnidades();
    }, []);

    const handleEdit = (id) => {
        navigate(`/unidades/editar/${id}`);
    };

    const handleDistribute = (id) => {
        setSelectedUnidade(id);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
        setQuantidadeBilhetes(0);
    };

    const distributeBilhetes = async () => {
        try {
            await axiosInstance.post('/DistribuicaoBilhete/distribuir-bilhetes', null, {
                params: {
                    quantidadeBilhetes,
                    idUnidade: selectedUnidade
                }
            });
            toast.success('Bilhetes distribuídos com sucesso!');
        } catch (error) {
            toast.warning('Erro ao distribuir bilhetes!');
            console.error('Erro ao distribuir bilhetes:', error);
        } finally {
            closeModal();
        }
    };

    return (
        <Container>
            {loading ? (
                <LoaderContainer>
                    <LoadingMessage>Carregando dados...</LoadingMessage>
                </LoaderContainer>
            ) : (
                <TableResponsive>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Cidade</Th>
                                <Th>Estado</Th>
                                <Th>Responsável</Th>
                                <Th>Ações</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {unidades.map((unidade) => (
                                <tr key={unidade.id}>
                                    <Td>{unidade.cidade}</Td>
                                    <Td>{unidade.estado}</Td>
                                    <Td>{unidade.nome_Pessoa}</Td>
                                    <Td>
                                        <Button onClick={() => handleEdit(unidade.id)}>Editar</Button>
                                        <Button onClick={() => handleDistribute(unidade.id)}>Distribuir Bilhetes</Button>
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableResponsive>
            )}

            {modalIsOpen && (
                <ModalOverlay>
                    <ModalContent>
                        <ModalHeader>
                            <h2>Distribuir Bilhetes</h2>
                        </ModalHeader>
                        <ModalBody>
                            <label htmlFor="quantidadeBilhetes">Quantidade de Bilhetes:</label>
                            <Input
                                type="number"
                                id="quantidadeBilhetes"
                                value={quantidadeBilhetes}
                                onChange={(e) => setQuantidadeBilhetes(e.target.value)}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={distributeBilhetes}>Distribuir</Button>
                            <Button onClick={closeModal}>Cancelar</Button>
                        </ModalFooter>
                    </ModalContent>
                </ModalOverlay>
            )}
        </Container>
    );
};

export default Unidades;
