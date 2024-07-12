import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { CadastroForm, Input, Button } from './styles';

const CadastroCliente = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');
    const [contato, setContato] = useState('');
    const [endereco, setEndereco] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axiosInstance.post('/Usuarios', {
                nome,
                cpf,
                dt_Nascimento: dtNascimento,
                contato,
                endereco
            });
            alert('Cliente cadastrado com sucesso!');
            setNome('');
            setCpf('');
            setDtNascimento('');
            setContato('');
            setEndereco('');
        } catch (error) {
            console.error('Erro ao cadastrar cliente', error);
            alert('Erro ao cadastrar cliente');
        } finally {
            setLoading(false);
        }
    };

    return (
        <CadastroForm onSubmit={handleSubmit}>
            <h1>Cadastro de Cliente</h1>
            <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Nome"
                required
            />
            <Input
                type="text"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                placeholder="CPF"
                required
            />
            <Input
                type="date"
                value={dtNascimento}
                onChange={(e) => setDtNascimento(e.target.value)}
                placeholder="Data de Nascimento"
                required
            />
            <Input
                type="text"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                placeholder="Contato"
                required
            />
            <Input
                type="text"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                placeholder="Endereço"
                required
            />
            <Button type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Cadastrar'}
            </Button>
        </CadastroForm>
    );
};

export default CadastroCliente;
