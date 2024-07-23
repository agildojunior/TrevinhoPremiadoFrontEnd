import React from 'react';
import { Container, Header, Title, WelcomeMessage} from './styles';

const Home = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <Container>
            <Header>
                <Title>Bem-vindo de volta, {user.username}!</Title>
                <WelcomeMessage>Estamos felizes em ter você conosco.</WelcomeMessage>
            </Header>
        </Container>
    );
};

export default Home;