import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../axiosInstance';
import { Page, FormLogin, Label, Input, Button, LogoImage } from './styles'; 
import logoImg from '../../assets/images/logo.png';
import { toast } from 'react-toastify';

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
            localStorage.setItem('token', JSON.stringify(token.token));
            localStorage.setItem('user', JSON.stringify(user));
            setAuth(true);
            if (user.id_Nivel === 5) {
                navigate('/vender');
            } else {
                navigate('/home');
            }
        } catch (error) {
            toast.info('Username ou Senha inválidos!');
        }
    };

    return (
        <Page>
            <FormLogin onSubmit={handleSubmit}>
                <LogoImage src={logoImg} alt="Logo" />
                <Label htmlFor="username">Usuário</Label>
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
                <Button type="submit">Acessar</Button>
            </FormLogin>
        </Page>
    );
};

export default Login;
