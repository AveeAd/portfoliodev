import React, { useState } from 'react';
import {
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiReact,
	SiNodedotjs,
	SiExpress,
	SiMongodb,
	SiRedux,
	SiTypescript,
} from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/ui/Button';

const Home = () => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate('/hire');
	};
	return (
		<Container>
			<div>
				<IconContainer>
					<SiHtml5 className="scaleOnHover" style={{ color: '#de4a24' }} />
					<SiCss3 className="scaleOnHover" style={{ color: '#0067b7' }} />
					<SiJavascript className="scaleOnHover" style={{ color: '#ead41c' }} />
					<SiTypescript className="scaleOnHover" style={{ color: '#0073c3' }} />
					<SiReact className="scaleOnHover" style={{ color: '#5bd7ef' }} />
					<SiNodedotjs className="scaleOnHover" style={{ color: '#84ba00' }} />
					<SiExpress className="scaleOnHover" style={{ color: '#ffffff' }} />
					<SiMongodb className="scaleOnHover" style={{ color: '#419341' }} />
					<SiRedux className="scaleOnHover" style={{ color: '#7146b3' }} />
				</IconContainer>
			</div>
			<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '30vh' }}>
				<Button
					borderColor="white"
					width="30vw"
					backgroundColor="transparent"
					color="white"
					eventBg="white"
					eventColor="#002"
					style={{ fontSize: '1.2rem', transition: 'all 300ms ease-in' }}
					onClick={handleClick}
				>
					Let's Build Something...
				</Button>
			</div>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	position: relative;
	height: 100%;
	overflow: hidden;
	&::before {
		content: '';
		height: 20vmax;
		width: 20vmax;
		position: absolute;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 100, 0.8));
		backdrop-filter: blur(2rem);
		top: 60%;
		left: -5%;
		z-index: -1;
		border-radius: 50%;
		animation: scale 3s ease-in-out;
		animation-iteration-count: infinite;
	}
	&::after {
		content: '';
		height: 40vmax;
		width: 40vmax;
		position: absolute;
		background: linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 100, 0.8));
		backdrop-filter: blur(2rem);
		top: -40%;
		left: 60%;
		z-index: -1;
		border-radius: 50%;
		animation: scale 5s ease-in-out;
		animation-iteration-count: infinite;
	}
`;

const IconContainer = styled.div`
	height: 30vh;
	font-size: 4rem;
	display: flex;
	justify-content: center;
	align-items: end;
	svg {
		margin: 0 1rem;
	}
`;
