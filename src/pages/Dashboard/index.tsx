import { useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { DashboardContainer, Navbar } from './StyledComponents';

const Dashboard = () => {
	const navigate = useNavigate();
	const location = useLocation();
	useEffect(() => {
		if (location.pathname === '/dashboard') {
			navigate('/dashboard/article');
		}
	});
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
