import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { CadastroForm, Input, Select, Button } from './styles';

const CadastroUnidade = () => {
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [Id_Pessoa, setId_Pessoa] = useState('');
    const [pessoas, setPessoas] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchPessoas = async () => {
            try {
                const response = await axiosInstance.get('/Pessoas');
                console.log(response.data);
                setPessoas(response.data);
            } catch (error) {
                console.error('Erro ao buscar pessoas', error);
            }
        };

        fetchPessoas();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosInstance.post('/Unidades', { cidade, estado, Id_Pessoa });
            alert('Unidade cadastrada com sucesso!');
            setCidade('');
            setEstado('');
            setId_Pessoa('');
        } catch (error) {
            console.error('Erro ao cadastrar unidade', error);
            alert('Erro ao cadastrar unidade');
        } finally {
            setLoading(false);
        }
    };

    const filteredPessoas = pessoas.filter((pessoa) =>
        pessoa.nome.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <CadastroForm onSubmit={handleSubmit}>
            <h1>Cadastro de Unidade</h1>
            <Input
                type="text"
                value={cidade}
                onChange={(e) => setCidade(e.target.value)}
                placeholder="Cidade"
                required
            />
            <Input
                type="text"
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                placeholder="Estado"
                required
            />
            <Input
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Filtrar responsável"
            />
            <Select
                value={Id_Pessoa}
                onChange={(e) => setId_Pessoa(e.target.value)}
                required
            >
                <option value="">Responsável</option>
                {filteredPessoas.map((pessoa) => (
                    <option key={pessoa.id} value={pessoa.id}>
                        {pessoa.nome}
                    </option>
                ))}
            </Select>
            <Button type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
        </CadastroForm>
    );
};

export default CadastroUnidade;
