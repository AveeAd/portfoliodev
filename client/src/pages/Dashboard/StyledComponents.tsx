import styled from 'styled-components';

export const DashboardContainer = styled.div`
	.content {
		padding: 0.5rem 2rem;
	}
`;

export const Navbar = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5rem 2rem;
	margin: 0.5rem 0;
	a {
		text-decoration: none;
		color: #888;
		font-size: 1.2rem;
		font-weight: bold;
		padding: 0.5rem 1rem;
		&.active {
			color: #fff;
			border-bottom: 2px solid #fff;
		}
	}
`;
