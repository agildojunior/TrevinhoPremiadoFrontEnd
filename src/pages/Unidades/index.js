import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axiosInstance from '../../axiosInstance';
import { Container, TableResponsive, Table, Th, Td, Button, LoaderContainer, LoadingMessage } from './styles';

const Unidades = () => {
    const [unidades, setUnidades] = useState([]);
    const [loading, setLoading] = useState(true);
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
                                    </Td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </TableResponsive>
            )}
        </Container>
    );
};

export default Unidades;
