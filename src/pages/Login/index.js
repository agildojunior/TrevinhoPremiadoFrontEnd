import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import { Page, FormLogin, H1, P, Label, Input, Anchor, Button } from './styles';

const Login = ({ setAuth }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/Usuarios/auth', null, {
                params: {
                    username,
                    password
                }
            });

            const { token, user } = response.data;
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            setAuth(true);
            navigate('/home'); 
        } catch (error) {
            console.error('Login failed', error);
            alert('Username ou Senha invalidos!');
        }
    };

    return (
        <Page>
            <FormLogin onSubmit={handleSubmit}>
                <H1>Login</H1>
                <P>Preencha os campos com suas credenciais.</P>
                <Label htmlFor="username">Username</Label>
                <Input
                    type="text"
                    placeholder="Digite seu username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <Label htmlFor="password">Senha</Label>
                <Input
                    type="password"
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Anchor href="/">Esqueci minha senha</Anchor>
                <Button type="submit">Acessar</Button>
            </FormLogin>
        </Page>
    );
};

export default Login;
