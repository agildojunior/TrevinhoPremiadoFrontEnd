import React, { useEffect, useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { Container, LoaderContainer, LoadingMessage, SelectContainer, SelectLabel, Select, InputContainer, InputLabel, Input, Button, ResultContainer, ResultTitle, ResultDetails } from './styles';

const BuscarGanhador = () => {
    const [loading, setLoading] = useState(true);
    const [selectedUnidade, setSelectedUnidade] = useState('');
    const [numeroSorteado, setNumeroSorteado] = useState('');
    const [dataSorteio, setDataSorteio] = useState(new Date().toISOString().split('T')[0]);
    const [filteredUnidades, setFilteredUnidades] = useState([]);
    const [bilhete, setBilhete] = useState(null);
    const [error, setError] = useState('');

    const user = JSON.parse(localStorage.getItem('user')); 
    const isCoordenador = user?.id_Nivel === 4; 

    useEffect(() => {
        const fetchUnidades = async () => {
            try {
                const response = await axiosInstance.get('/Unidades/unidadeslist');
                if (isCoordenador) {
                    setFilteredUnidades(response.data.filter(unidade => unidade.id_Pessoa === user.id_Pessoa));
                } else {
                    setFilteredUnidades(response.data);
                }
            } catch (error) {
                console.error('Erro ao buscar unidades:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUnidades();
    }, [isCoordenador, user.id_Pessoa]);

    const handleSelectChange = (e) => {
        setSelectedUnidade(e.target.value);
    };

    const handleNumeroSorteadoChange = (e) => {
        setNumeroSorteado(e.target.value);
    };

    const handleDataSorteioChange = (e) => {
        setDataSorteio(e.target.value);
    };

    const handleBuscarBilhete = async () => {
        try {
            const response = await axiosInstance.get('/Bilhetes/buscar-por-dados', {
                params: {
                    idUnidade: selectedUnidade,
                    dataGeracao: dataSorteio,
                    numeroSorteado: numeroSorteado
                }
            });
            setBilhete(response.data);
            setError('');
        } catch (error) {
            console.error('Erro ao buscar bilhete:', error);
            setBilhete(null);
            setError('Bilhete não encontrado ou erro na busca.');
        }
    };

    return (
        <Container>
            {loading ? (
                <LoaderContainer>
                    <LoadingMessage>Carregando dados...</LoadingMessage>
                </LoaderContainer>
            ) : (
                <>
                    <SelectContainer>
                        <SelectLabel htmlFor="unidade-select">Selecione a Unidade:</SelectLabel>
                        <Select
                            id="unidade-select"
                            value={selectedUnidade}
                            onChange={handleSelectChange}
                        >
                            <option value="">Todas as Unidades</option>
                            {filteredUnidades.map((unidade) => (
                                <option key={unidade.id} value={unidade.id}>
                                    {unidade.cidade} - {unidade.estado}
                                </option>
                            ))}
                        </Select>
                    </SelectContainer>
                    <InputContainer>
                        <InputLabel htmlFor="numero-sorteado">Digite o Número Sorteado:</InputLabel>
                        <Input 
                            id="numero-sorteado" 
                            type="text" 
                            value={numeroSorteado} 
                            onChange={handleNumeroSorteadoChange} 
                        />
                    </InputContainer>
                    <InputContainer>
                        <InputLabel htmlFor="data-sorteio">Selecione a Data do Sorteio:</InputLabel>
                        <Input 
                            id="data-sorteio" 
                            type="date" 
                            value={dataSorteio} 
                            onChange={handleDataSorteioChange} 
                        />
                    </InputContainer>
                    <Button onClick={handleBuscarBilhete}>Buscar Bilhete</Button>
                    {error && <p>{error}</p>}
                    {bilhete && (
                        <ResultContainer>
                            <ResultTitle>Detalhes do Bilhete:</ResultTitle>
                            <ResultDetails>
                                <p><strong>ID:</strong> {bilhete.id}</p>
                                <p><strong>Número 1:</strong> {bilhete.num_01}</p>
                                <p><strong>Número 2:</strong> {bilhete.num_02}</p>
                                <p><strong>Número 3:</strong> {bilhete.num_03}</p>
                                <p><strong>Data de Geração:</strong> {new Date(bilhete.dt_Geracao).toLocaleDateString()}</p>
                                <p><strong>Vendido:</strong> {bilhete.vendido ? 'Sim' : 'Não'}</p>
                            </ResultDetails>
                        </ResultContainer>
                    )}
                </>
            )}
        </Container>
    );
};

export default BuscarGanhador;
