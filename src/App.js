import React, { useState, useEffect } from 'react';
import RoutesApp from './routes/RoutesApp';

const App = () => {
    const [isAuth, setAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setAuth(true);
        }
    }, []);

    return <RoutesApp isAuth={isAuth} setAuth={setAuth} />;
};

export default App;
