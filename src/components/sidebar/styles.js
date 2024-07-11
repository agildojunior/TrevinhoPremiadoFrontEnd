import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 250px; 
  height: 100%; 
  background-color: #194e92;
  color: #ffffff; 
  position: fixed; 
  top: 0;
  left: ${({ $isOpen }) => ($isOpen ? '0' : '-250px')};
  transition: left 0.3s ease-in-out;
  padding-top: 20px;
  overflow-y: auto;
  scrollbar-width: none; 
  -ms-overflow-style: none; 
  ::-webkit-scrollbar {
    width: 0px;  
    background: transparent;  
  }
`;

export const PageContent = styled.div`
  margin-left: ${({ $isOpen }) => ($isOpen ? '250px' : '0')};
  transition: margin-left 0.3s ease-in-out;
`;

export const NavbarContent = styled.div`   
  display: flex;
  align-items: center;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

export const MenuIcon = styled.div`
  padding-right: 15px;
  cursor: pointer;
`;

export const NavbarTitle = styled.h3`
  margin-left: 10px;
`;

export const MenuTitle = styled.h2`
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px 0;
`;

export const SidebarMenuItem = styled.li`
  color: #fff;
  padding: 8px;
  padding-left: 35px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #bbb;
  }
`;

export const SidebarMenuTitle = styled.li`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  padding-left: 25px;
  padding-bottom: 3px;
  cursor: pointer;
  &:hover {
    color: #bbb;
  }
`;

export const LogoImage = styled.img`
    width: 150px;
    height: auto;
    align-self: center;
`;