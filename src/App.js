import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import Sidebar from './components/sidebar'; 
import GlobalStyle from './styles/global';

const App = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAuth, setAuth] = useState(!!(token && user));

    useEffect(() => {
        if (token && user) {
            setAuth(true);
        } else {
            setAuth(false);
        }
    }, [token, user]); 

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