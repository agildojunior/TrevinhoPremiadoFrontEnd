import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { CadastroForm, Input, Select, Button, Dropdown, DropdownItem } from './styles';
import { toast } from 'react-toastify';

const CadastroUnidade = () => {
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [id_Pessoa, setid_Pessoa] = useState('');
    const [pessoas, setPessoas] = useState([]);
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

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
            await axiosInstance.post('/Unidades', { cidade, estado, id_Pessoa });
            toast.success('Unidade cadastrada com sucesso!');
            setCidade('');
            setEstado('');
            setid_Pessoa('');
            setFilter('');
        } catch (error) {
            console.error('Erro ao cadastrar unidade', error);
            toast.error('Erro ao cadastrar unidade!');
        } finally {
            setLoading(false);
        }
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setShowDropdown(true);
    };

    const handleOptionSelect = (pessoaId, pessoaNome) => {
        setid_Pessoa(pessoaId);
        setFilter(pessoaNome);
        setShowDropdown(false);
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
                onChange={handleFilterChange}
                placeholder="Filtrar responsável"
                onFocus={() => setShowDropdown(true)}
            />
            {showDropdown && filteredPessoas.length > 0 && (
                <Dropdown>
                    {filteredPessoas.slice(0, 5).map((pessoa) => (
                        <DropdownItem
                            key={pessoa.id}
                            onClick={() => handleOptionSelect(pessoa.id, pessoa.nome)}
                        >
                            {pessoa.nome} | Contato:{pessoa.contato}
                        </DropdownItem>
                    ))}
                </Dropdown>
            )}
            <Select
                value={id_Pessoa}
                onChange={(e) => setid_Pessoa(e.target.value)}
                required
                style={{ display: 'none' }} // Esconder o select real
            >
                <option value="">Responsável</option>
                {filteredPessoas.map((pessoa) => (
                    <option key={pessoa.id} value={pessoa.id}>
                        {pessoa.contato}
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
