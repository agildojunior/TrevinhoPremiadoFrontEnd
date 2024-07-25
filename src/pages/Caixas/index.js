import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Importar useParams
import axiosInstance from '../../axiosInstance'; 
import { Container, TableResponsive, Table, Th, Td, Button, LoaderContainer, LoadingMessage } from './styles';

const Caixas = () => {
    const { id } = useParams(); // Obter o ID da URL
    const [caixas, setCaixas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCaixas = async () => {
            try {
                // Usar o ID da URL na requisição
                const response = await axiosInstance.get(`/Caixas/abertos-por-unidade/${id}`); 
                setCaixas(response.data);
            } catch (error) {
                console.error('Erro ao buscar caixas:', error);
                setError('Erro ao carregar dados.');
            } finally {
                setLoading(false);
            }
        };

        fetchCaixas();
    }, [id]); // Adicionar id como dependência do useEffect

    return (
        <Container>
            {loading ? (
                <LoaderContainer>
                    <LoadingMessage>Carregando dados...</LoadingMessage>
                </LoaderContainer>
            ) : error ? (
                <LoaderContainer>
                    <LoadingMessage>{error}</LoadingMessage>
                </LoaderContainer>
            ) : (
                <TableResponsive>
                    <Table>
                        <thead>
                            <tr>
                                <Th>Nome do Vendedor</Th>
                                <Th>Data de Abertura</Th>
                                <Th>Valor do Caixa</Th>
                                <Th>PIX</Th>
                                <Th>DINHEIRO</Th>
                                <Th>Ações</Th>
                            </tr>
                        </thead>
                        <tbody>
                            {caixas.map((caixa) => (
                                <tr key={caixa.caixaId}>
                                    <Td>{caixa.vendedorNome}</Td>
                                    <Td>{new Date(caixa.data_Abertura).toLocaleDateString()}</Td>
                                    <Td>{caixa.valor_Total !== undefined ? caixa.valor_Total.toFixed(2) : '0.00'}</Td>
                                    <Td>{caixa.pix !== undefined ? caixa.pix.toFixed(2) : '0.00'}</Td>
                                    <Td>{caixa.dinheiro !== undefined ? caixa.dinheiro.toFixed(2) : '0.00'}</Td>
                                    <Td>
                                        <Button>Fechar Caixa</Button>
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

export default Caixas;
