import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { CadastroForm, Input, Select, Button, Dropdown, DropdownItem } from './styles';
import { toast } from 'react-toastify';
import { useParams, useNavigate } from 'react-router-dom';

const EditarUnidade = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [id_Pessoa, setId_Pessoa] = useState('');
    const [pessoas, setPessoas] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const fetchPessoas = async () => {
            try {
                const response = await axiosInstance.get('/Pessoas');
                setPessoas(response.data);
            } catch (error) {
                console.error('Erro ao buscar pessoas', error);
            }
        };

        fetchPessoas();
    }, []); 

    useEffect(() => {
        const fetchUnidade = async () => {
            try {
                const response = await axiosInstance.get(`/Unidades/${id}`);
                const unidade = response.data;
                setCidade(unidade.cidade);
                setEstado(unidade.estado);
                setId_Pessoa(unidade.id_Pessoa);
                const pessoa = pessoas.find(p => p.id === unidade.id_Pessoa);
                if (pessoa) setFilter(pessoa.nome);
            } catch (error) {
                console.error('Erro ao buscar unidade', error);
                toast.error('Erro ao buscar unidade!');
            }
        };

        if (pessoas.length > 0) { // Verifica se já buscou as pessoas
            fetchUnidade();
        }
    }, [id, pessoas]); // Executa quando o id mudar e quando as pessoas forem carregadas

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosInstance.put(`/Unidades/${id}`, { cidade, estado, id_Pessoa });
            toast.success('Unidade atualizada com sucesso!');
            navigate('/unidades');
        } catch (error) {
            console.error('Erro ao atualizar unidade', error);
            toast.error('Erro ao atualizar unidade!');
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setShowDropdown(true);
    };

    const handleOptionSelect = (pessoaId, pessoaNome) => {
        setId_Pessoa(pessoaId);
        setFilter(pessoaNome);
        setShowDropdown(false);
    };

    const filteredPessoas = pessoas.filter((pessoa) =>
        pessoa.nome.toLowerCase().includes(filter.toLowerCase())
    );

    // Atualiza o filtro com base no id_Pessoa
    useEffect(() => {
        if (id_Pessoa) {
            const pessoa = pessoas.find(p => p.id === id_Pessoa);
            if (pessoa) {
                setFilter(pessoa.nome);
            }
        }
    }, [id_Pessoa, pessoas]);

    return (
        <CadastroForm onSubmit={handleSubmit}>
            <h1>Editar Unidade</h1>
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
                onChange={handleFilterChange}
                placeholder="Filtrar responsável"
                onFocus={() => setShowDropdown(true)}
                onBlur={() => setTimeout(() => setShowDropdown(false), 100)}
            />
            {showDropdown && filteredPessoas.length > 0 && (
                <Dropdown>
                    {filteredPessoas.slice(0, 5).map((pessoa) => (
                        <DropdownItem
                            key={pessoa.id}
                            onClick={() => handleOptionSelect(pessoa.id, pessoa.nome)}
                        >
                            {pessoa.nome}
                        </DropdownItem>
                    ))}
                </Dropdown>
            )}
            <Select
                value={id_Pessoa}
                onChange={(e) => setId_Pessoa(e.target.value)}
                required
                style={{ display: 'none' }}
            >
                <option value="">Responsável</option>
                {pessoas.map((pessoa) => (
                    <option key={pessoa.id} value={pessoa.id}>
                        {pessoa.nome}
                    </option>
                ))}
            </Select>
            <Button type="submit" disabled={loading}>
                {loading ? 'Atualizando...' : 'Atualizar'}
            </Button>
        </CadastroForm>
    );
};

export default EditarUnidade;
