import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
import Sidebar from './components/sidebar'; 
import Navbar from './components/navbar'; 
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const [isAuth, setAuth] = useState(!!(token && user));
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        if (token && user) {
            setAuth(true);
            if (user.id_Nivel === 5) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        } else {
            setAuth(false);
            setShowSidebar(false);
        }
    }, [token, user]);

    return (
        <Router>
            <GlobalStyle />
            {isAuth ? (
                showSidebar ? (
                    <>
                        <Sidebar setAuth={setAuth}>
                            <RoutesApp isAuth={isAuth} setAuth={setAuth} />
                        </Sidebar>
                    </>
                ) : (
                    <>
                        <Navbar setAuth={setAuth}>
                            <RoutesApp isAuth={isAuth} setAuth={setAuth} />
                        </Navbar>
                    </>
                )
            ) : (
                <RoutesApp isAuth={isAuth} setAuth={setAuth} />
            )}
            <ToastContainer />
        </Router>
    );
};

export default App;
