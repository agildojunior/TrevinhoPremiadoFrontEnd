import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SidebarContainer, LogoImage, PageContent, NavbarContent, MenuIcon, NavbarTitle, MenuTitle, SidebarMenu, SidebarMenuItem, SidebarMenuTitle } from './styles';
import { MdMenu, MdHome, MdWork, MdPerson, MdArrowRight, MdArrowDropDown, MdExitToApp } from 'react-icons/md'; // Importando MdExitToApp para o ícone de logout
import logoImg from '../../assets/images/logo.png';

const Sidebar = ({ children, setAuth }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [menuOpen, setMenuOpen] = useState({
        paineis: false,
        funcoes: false,
    });

    const navigate = useNavigate();

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
            <SidebarContainer isOpen={isOpen}>
                <MenuTitle><LogoImage src={logoImg} alt="Logo" /></MenuTitle>
                <SidebarMenu>
                    <SidebarMenuTitle onClick={() => toggleMenu('paineis')}>
                        Painéis {menuOpen.paineis ? <MdArrowDropDown /> : <MdArrowRight />}
                    </SidebarMenuTitle>
                    {menuOpen.paineis && (
                        <>
                            <SidebarMenuItem onClick={() => handleNavigation('/home')}><MdHome size={18} /> Home</SidebarMenuItem>
                            <SidebarMenuItem onClick={() => handleNavigation('/teste')}><MdWork size={18} /> Teste</SidebarMenuItem>
                        </>
                    )}
                </SidebarMenu>
                <SidebarMenu>
                    <SidebarMenuTitle onClick={() => toggleMenu('funcoes')}>
                        Funções {menuOpen.funcoes ? <MdArrowDropDown /> : <MdArrowRight />}
                    </SidebarMenuTitle>
                    {menuOpen.funcoes && (
                        <>
                            <SidebarMenuItem><MdHome size={18} /> Finanças</SidebarMenuItem>
                            <SidebarMenuItem><MdWork size={18} /> Teste</SidebarMenuItem>
                            <SidebarMenuItem><MdPerson size={18} /> Perfil</SidebarMenuItem>
                            <SidebarMenuItem><MdPerson size={18} /> Xablau</SidebarMenuItem>
                        </>
                    )}
                </SidebarMenu>
                <SidebarMenu>
                  <SidebarMenuItem onClick={handleLogout}><MdExitToApp size={18} /> Sair</SidebarMenuItem>
                </SidebarMenu>
            </SidebarContainer>
            <PageContent isOpen={isOpen}>
                <NavbarContent>
                    <MenuIcon>
                        <MdMenu size={24} onClick={toggleSidebar} />
                    </MenuIcon>
                    <NavbarTitle>Titulo da Navbar</NavbarTitle>
                </NavbarContent>
                <div style={{ margin: '20px' }}>{children}</div>
            </PageContent>
        </>
    );
};

export default Sidebar;
