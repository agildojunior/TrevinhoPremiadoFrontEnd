import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SidebarContainer, LogoImage, PageContent, NavbarContent, MenuIcon, NavbarTitle, MenuTitle, SidebarMenu, SidebarMenuItem, SidebarMenuTitle } from './styles';
import { MdMenu, MdHome, MdWork, MdPerson, MdArrowRight, MdArrowDropDown, MdExitToApp } from 'react-icons/md';
import logoImg from '../../assets/images/logo.png';

const Sidebar = ({ children, setAuth }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState({
        paineis: false,
        cadastro: false,
        bilhetes: false,
    });
    const [navbarTitle, setNavbarTitle] = useState('Titulo da Navbar');

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case '/home':
                setNavbarTitle('Inicio');
                break;
            case '/teste':
                setNavbarTitle('Teste');
                break;
            case '/cadastroUnidade':
                setNavbarTitle('Cadastro de Unidade');
                break;
            case '/cadastroUsuario':
                setNavbarTitle('Cadastro de Usuário');
                break;
            case '/cadastroCliente':
                setNavbarTitle('Cadastro de Cliente');
                break;
            case '/vender':
                setNavbarTitle('Vender Bilhetes');
                break;
            case '/vendidos':
                setNavbarTitle('Bilhetes Vendidos');
                break;
            default:
                setNavbarTitle('Titulo da Navbar');
                break;
        }
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setAuth(false);
        navigate('/login');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleMenu = (menu) => {
        setMenuOpen(prevState => ({
            ...prevState,
            [menu]: !prevState[menu]
        }));
    };

    return (
        <>
            <SidebarContainer $isOpen={isOpen}>
                <MenuTitle><LogoImage src={logoImg} alt="Logo" /></MenuTitle>
                <SidebarMenu>
                    <SidebarMenuTitle onClick={() => toggleMenu('paineis')}>
                        Painéis {menuOpen.paineis ? <MdArrowDropDown /> : <MdArrowRight />}
                    </SidebarMenuTitle>
                    {menuOpen.paineis && (
                        <>
                            <SidebarMenuItem onClick={() => handleNavigation('/home')}><MdHome size={18} /> Inicio</SidebarMenuItem>
                            <SidebarMenuItem onClick={() => handleNavigation('/teste')}><MdWork size={18} /> Teste</SidebarMenuItem>
                        </>
                    )}
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuTitle onClick={() => toggleMenu('cadastro')}>
                        Cadastro {menuOpen.cadastro ? <MdArrowDropDown /> : <MdArrowRight />}
                    </SidebarMenuTitle>
                    {menuOpen.cadastro && (
                        <>
                            <SidebarMenuItem onClick={() => handleNavigation('/cadastroUsuario')}><MdHome size={18} /> Usuário</SidebarMenuItem>
                            <SidebarMenuItem onClick={() => handleNavigation('/cadastroUnidade')}><MdWork size={18} /> Unidade</SidebarMenuItem>
                            <SidebarMenuItem onClick={() => handleNavigation('/cadastroCliente')}><MdPerson size={18} /> Cliente</SidebarMenuItem>
                        </>
                    )}
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuTitle onClick={() => toggleMenu('bilhetes')}>
                        Bilhetes {menuOpen.bilhetes ? <MdArrowDropDown /> : <MdArrowRight />}
                    </SidebarMenuTitle>
                    {menuOpen.bilhetes && (
                        <>
                            <SidebarMenuItem onClick={() => handleNavigation('/vender')}><MdWork size={18} /> Vender</SidebarMenuItem>
                            <SidebarMenuItem onClick={() => handleNavigation('/vendidos')}><MdWork size={18} /> Vendidos</SidebarMenuItem>
                        </>
                    )}
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuItem onClick={handleLogout}><MdExitToApp size={18} /> Sair</SidebarMenuItem>
                </SidebarMenu>
            </SidebarContainer>
            <PageContent $isOpen={isOpen}>
                <NavbarContent>
                    <MenuIcon>
                        <MdMenu size={24} onClick={toggleSidebar} />
                    </MenuIcon>
                    <NavbarTitle>{navbarTitle}</NavbarTitle>
                </NavbarContent>
                <div style={{ margin: '20px' }}>{children}</div>
            </PageContent>
        </>
    );
};

export default Sidebar;
