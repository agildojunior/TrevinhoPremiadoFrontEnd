import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import { toast } from 'react-toastify';
import axiosInstance from '../../axiosInstance'; 
import { Container, TableResponsive, Table, Th, Td, Button, LoaderContainer, LoadingMessage } from './styles';

const Caixas = () => {
    const { id } = useParams(); 
    const [caixas, setCaixas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCaixas = async () => {
            try {
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
    }, [id]); 

    const fecharCaixa = async (caixaId) => {
        try {
            await axiosInstance.put(`/Caixas/mudar-status/${caixaId}`);
            toast.success('Caixa Fechado com sucesso!');
        } catch (error) {
            console.error('Erro ao fechar o caixa:', error);
            setError('Erro ao fechar o caixa.');
        } finally {
            setTimeout(() => {
                window.location.reload(); 
            }, 1000);
        }
    };

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
                                    <Td>R$ {caixa.valor_Total !== undefined ? caixa.valor_Total.toFixed(2) : '0.00'}</Td>
                                    <Td>R$ {caixa.pix !== undefined ? caixa.pix.toFixed(2) : '0.00'}</Td>
                                    <Td>R$ {caixa.dinheiro !== undefined ? caixa.dinheiro.toFixed(2) : '0.00'}</Td>
                                    <Td>
                                        <Button onClick={() => fecharCaixa(caixa.caixaId)}>Fechar Caixa</Button>
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
