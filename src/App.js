import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import Sidebar from './components/sidebar'; 
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
            <ToastContainer />
        </Router>
    );
};

export default App;