import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import { CadastroForm, Input, Button } from './styles';
import { toast } from 'react-toastify';
import InputMask from 'react-input-mask';

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
            const dt_Nascimento = new Date(dtNascimento).toISOString();
            await axiosInstance.post('/Pessoas', {
                nome,
                cpf,
                dt_Nascimento,
                contato,
                endereco
            });
            toast.success('Cliente cadastrado com sucesso!');
            setNome('');
            setCpf('');
            setDtNascimento('');
            setContato('');
            setEndereco('');
        } catch (error) {
            toast.error('Erro ao cadastrar cliente!');
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
            <InputMask
                mask="(99) 99999-9999"
                value={contato}
                onChange={(e) => setContato(e.target.value)}
                placeholder="Contato"
            >
                {(inputProps) => <Input {...inputProps} type="text" required />}
            </InputMask>
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
