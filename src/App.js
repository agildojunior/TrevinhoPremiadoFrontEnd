import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesApp from './routes/RoutesApp';
// import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const token = localStorage.getItem('token');
    const user = JSON.parse(localStorage.getItem('user'));
    const isAuthRef = useRef(localStorage.getItem('isAuth') === 'true');
    const [showSidebar, setShowSidebar] = useState(true);

    useEffect(() => {
        if (token && user) {
            isAuthRef.current = true;
            localStorage.setItem('isAuth', 'true');
            if (user.id_Nivel === 5) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        } else {
            isAuthRef.current = false;
            localStorage.setItem('isAuth', 'false');
            setShowSidebar(false);
        }
    }, [token, user]);

    return (
        <Router>
            <GlobalStyle />
            {isAuthRef.current ? (
                showSidebar ? (
                    <>
                        <Navbar>
                            <RoutesApp />
                        </Navbar>
                    </>
                ) : (
                    <>
                        <Navbar>
                            <RoutesApp />
                        </Navbar>
                    </>
                )
            ) : (
                <RoutesApp />
            )}
            <ToastContainer />
        </Router>
    );
};

export default App;
