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
	transition: all 300ms ease-in-out;
	&.active,
	&:hover {
		color: #002;
		background-color: #ccc;
		border-bottom: 1px solid #002;
		border-radius: 0.5rem;
	}
`;

interface imageProps {
	width?: string;
	height?: string;
	src?: string;
	alt?: string;
	circle?: boolean;
}

export const Image = styled.div`
	${({ width, height, src, circle }: imageProps) => `
			width: ${width};
			height: ${height};
			background-color: #fff3;
			background-image: url(${src});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			clip-path: ${circle ? 'circle(50%)' : 'none'};
			`}
`;
