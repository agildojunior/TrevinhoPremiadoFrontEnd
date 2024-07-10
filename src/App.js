import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import Sidebar from './components/sidebar'; 
import GlobalStyle from './styles/global';

const App = () => {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth(true);
        }
    }, []);

    return (
        <Router>
            <GlobalStyle /> 
            {isAuth ? (
                <Sidebar setAuth={setAuth}>
                    <RoutesApp isAuth={isAuth} setAuth={setAuth} />
                </Sidebar>
            ) : (
                <RoutesApp isAuth={isAuth} setAuth={setAuth} />
            )}
        </Router>
    );
};

export default App;
