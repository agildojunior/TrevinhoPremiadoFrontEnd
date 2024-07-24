import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axiosInstance from '../../axiosInstance';
import { Container, ButtonContainer, IconButton, Icon, ButtonLabel, LoaderContainer, LoadingMessage, FilterInput } from './styles';
import { FaCity } from 'react-icons/fa'; // Importando o ícone de cidade

const BilhetesListUnidades = () => {
    const [unidades, setUnidades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');
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

    const handleBilhetes = (id) => {
        navigate(`/bilhetes/${id}`);
    };

    const filteredUnidades = unidades.filter(unidade =>
        unidade.cidade.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <Container>
            {loading ? (
                <LoaderContainer>
                    <LoadingMessage>Carregando dados...</LoadingMessage>
                </LoaderContainer>
            ) : (
                <>
                    <FilterInput 
                        type="text" 
                        placeholder="Filtrar por cidade..." 
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                    <ButtonContainer>
                        {filteredUnidades.map((unidade) => (
                            <IconButton key={unidade.id} onClick={() => handleBilhetes(unidade.id)} title={`Bilhetes de ${unidade.cidade} + ${unidade.estado}`}>
                                <Icon><FaCity /></Icon>
                                <ButtonLabel>Bilhetes de {unidade.cidade}/{unidade.estado}</ButtonLabel>
                            </IconButton>
                        ))}
                    </ButtonContainer>
                </>
            )}
        </Container>
    );
};

export default BilhetesListUnidades;
