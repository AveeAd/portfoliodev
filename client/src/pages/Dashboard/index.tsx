import { NavLink, Outlet } from 'react-router-dom';
import { DashboardContainer, Navbar } from './StyledComponents';

const Dashboard = () => {
	return (
		<DashboardContainer>
			<Navbar>
				<div>
					<NavLink to="/dashboard/article">Article</NavLink>
					<NavLink to="/dashboard/project">Project</NavLink>
					<NavLink to="/dashboard/about">About</NavLink>
				</div>
				<NavLink to="/">Back To Home</NavLink>
			</Navbar>
			<div className="content">
				<Outlet />
			</div>
		</DashboardContainer>
	);
};

export default Dashboard;
