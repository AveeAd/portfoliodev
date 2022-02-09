import React from 'react';
import { SidebarContainer } from '../components/StyledComponents/Layouts';
import { Menu } from '../components/StyledComponents/Reusables';
import { FaHome, FaNewspaper, FaProjectDiagram, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
	return (
		<SidebarContainer>
			<Menu to="/">
				<FaHome />
				&nbsp; Home
			</Menu>
			<Menu to="/articles">
				<FaNewspaper />
				&nbsp; Articles
			</Menu>
			<Menu to="/projects">
				<FaProjectDiagram />
				&nbsp; Projects
			</Menu>
			<Menu to="/about">
				<FaUserCircle />
				&nbsp; About
			</Menu>
		</SidebarContainer>
	);
};

export default Sidebar;
