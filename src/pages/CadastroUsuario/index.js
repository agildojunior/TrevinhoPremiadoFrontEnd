import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import { CadastroForm, Input, Select, Button } from './styles';
import { toast } from 'react-toastify';

const CadastroUsuario = () => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [status, setStatus] = useState(true);
    const [idNivel, setIdNivel] = useState('');
    const [idUnidade, setIdUnidade] = useState('');
    const [nomePessoa, setNomePessoa] = useState('');
    const [cpfPessoa, setCpfPessoa] = useState('');
    const [dtNascimentoPessoa, setDtNascimentoPessoa] = useState('');
    const [contatoPessoa, setContatoPessoa] = useState('');
    const [enderecoPessoa, setEnderecoPessoa] = useState('');
    const [unidades, setUnidades] = useState([]);
    const [niveis, setNiveis] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [unidadesResponse, niveisResponse] = await Promise.all([
                    axiosInstance.get('/Unidades'),
                    axiosInstance.get('/NivelUsuario')
                ]);
                setUnidades(unidadesResponse.data);
                setNiveis(niveisResponse.data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            // Cadastrar Pessoa
            const dt_Nascimento = new Date(dtNascimentoPessoa).toISOString();
            const pessoaResponse = await axiosInstance.post('/Pessoas', {
                nome: nomePessoa,
                cpf: cpfPessoa,
                dt_Nascimento,
                contato: contatoPessoa,
                endereco: enderecoPessoa
            });
            const pessoaId = pessoaResponse.data.id;

            // Cadastrar Usuário com o ID da Pessoa
            const usuarioData = {
                user,
                password,
                status,
                id_Nivel: idNivel,
                id_Pessoa: pessoaId,
                id_Unidade: idUnidade
            };

            console.log('Dados do Usuário:', usuarioData);

            const usuarioResponse = await axiosInstance.post('/Usuarios', usuarioData);

            console.log('Resposta do Servidor:', usuarioResponse);

            toast.success('Usuário cadastrado com sucesso!');
            setUser('');
            setPassword('');
            setStatus(true);
            setIdNivel('');
            setIdUnidade('');
            setNomePessoa('');
            setCpfPessoa('');
            setDtNascimentoPessoa('');
            setContatoPessoa('');
            setEnderecoPessoa('');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            toast.error('Erro ao cadastrar usuário!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <CadastroForm onSubmit={handleSubmit}>
            <h1>Cadastro de Usuário</h1>
            <Input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                placeholder="User"
                required
            />
            <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <Select
                value={status}
                onChange={(e) => setStatus(e.target.value === 'true')}
                required
            >
                <option value="true">Ativo</option>
                <option value="false">Inativo</option>
            </Select>
            <Select
                value={idNivel}
                onChange={(e) => setIdNivel(e.target.value)}
                required
            >
                <option value="">Selecione o Nível</option>
                {niveis.map((nivel) => (
                    <option key={nivel.id} value={nivel.id}>
                        {nivel.nivel}
                    </option>
                ))}
            </Select>
            <Select
                value={idUnidade}
                onChange={(e) => setIdUnidade(e.target.value)}
                required
            >
                <option value="">Selecione a Unidade</option>
                {unidades.map((unidade) => (
                    <option key={unidade.id} value={unidade.id}>
                        {unidade.cidade} - {unidade.estado}
                    </option>
                ))}
            </Select>
            <Input
                type="text"
                value={nomePessoa}
                onChange={(e) => setNomePessoa(e.target.value)}
                placeholder="Nome"
                required
            />
            <Input
                type="text"
                value={cpfPessoa}
                onChange={(e) => setCpfPessoa(e.target.value)}
                placeholder="CPF"
                required
            />
            <Input
                type="date"
                value={dtNascimentoPessoa}
                onChange={(e) => setDtNascimentoPessoa(e.target.value)}
                placeholder="Data de Nascimento"
                required
            />
            <Input
                type="text"
                value={contatoPessoa}
                onChange={(e) => setContatoPessoa(e.target.value)}
                placeholder="Contato"
                required
            />
            <Input
                type="text"
                value={enderecoPessoa}
                onChange={(e) => setEnderecoPessoa(e.target.value)}
                placeholder="Endereço"
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
        </CadastroForm>
    );
};

export default CadastroUsuario;
