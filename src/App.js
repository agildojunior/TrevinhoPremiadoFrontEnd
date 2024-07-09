import React, { useState, useEffect } from 'react';
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
        <>
            <GlobalStyle /> 
            <Sidebar>
                <RoutesApp isAuth={isAuth} setAuth={setAuth} />
            </Sidebar>
        </>
    );
};

export default App;
