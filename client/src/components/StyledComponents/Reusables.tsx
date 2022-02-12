import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled(NavLink)`
	text-decoration: none;
	background-color: transparent;
	font-weight: 600;
	color: #888;
	display: flex;
	align-items: center;
	border-bottom: 1px solid #8888;
	padding: 0.8rem;
	margin-bottom: 0.5rem;
	&:last-child {
		margin-bottom: 0;
	}
	transition: all 200ms ease-in-out;
	&.active,
	&:hover {
		color: #002;
		background-color: #aaa;
		border-bottom: 1px solid #002;
		border-radius: 0.5rem;
	}
`;

interface imageProps {
	width?: string;
	height?: string;
	src?: string;
	circle?: boolean;
	border?: string;
	borderRadius?: string;
}

export const Image = styled.div`
	${({ width, height, src, circle, border, borderRadius }: imageProps) => `
			width: ${width};
			height: ${height};
			background-color: #fff3;
			background-image: url(${src});
			background-size: contain;
			background-position: center;
			background-repeat: no-repeat;
			border: ${border};
			border-radius: ${borderRadius};
			clip-path: ${circle ? 'circle(50%)' : 'none'};			
			`}
`;

export const Container = styled.div`
	display: grid;
	grid-template-columns: 75% 25%;
	grid-template-areas: 'content sidebar';
	grid-gap: 1rem;
	height: 100%;
	overflow: hidden;
	.sidebar {
		grid-area: sidebar;
		height: 100%;
	}
`;

export const SubContainer = styled.div`
	grid-area: content;
	padding: 1rem;
	height: 100%;
	overflow-y: auto;
`;
