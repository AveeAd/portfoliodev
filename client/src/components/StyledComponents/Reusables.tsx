import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled(NavLink)`
	text-decoration: none;
	background-color: transparent;
	font-weight: 600;
	color: #ccc;
	width: 100%;
	display: inline-block;
	border-bottom: 1px solid #ccc;
	padding: 0.5rem 1rem;
	&.active {
		color: #002;
		background-color: #ccc;
		border-bottom: 1px solid #002;
		border-radius: 0.5rem;
	}
`;
