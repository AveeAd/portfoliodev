import React from 'react';
import { SidebarContainer } from '../components/StyledComponents/Layouts';
import { Menu } from '../components/StyledComponents/Reusables';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Menu to="/">Home</Menu>
			<Menu to="/button">Button</Menu>
			<Menu to="/modal">Modal</Menu>
			<Menu to="/404">404</Menu>
		</SidebarContainer>
	);
};

export default Sidebar;
