import React from 'react';
import { SidebarContainer } from '../components/StyledComponents/Layouts';
import { Menu } from '../components/StyledComponents/Reusables';
import { FaHome, FaNewspaper, FaProjectDiagram, FaUserCircle, FaChevronRight, FaChevronLeft } from 'react-icons/fa';

const Sidebar = () => {
	const [isOpen, setIsOpen] = React.useState<boolean>(true);
	return (
		<SidebarContainer collapse={isOpen}>
			<button className="collapse" onClick={() => setIsOpen(!isOpen)}>
				{isOpen ? <FaChevronRight /> : <FaChevronLeft />}
			</button>
			<Menu to="/">
				<FaHome />
				<span>&nbsp; Home</span>
			</Menu>
			<Menu to="/articles">
				<FaNewspaper />
				<span>&nbsp; Articles</span>
			</Menu>
			<Menu to="/projects">
				<FaProjectDiagram />
				<span>&nbsp; Projects</span>
			</Menu>
			<Menu to="/about">
				<FaUserCircle />
				<span>&nbsp; About</span>
			</Menu>
		</SidebarContainer>
	);
};

export default Sidebar;
