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
			<p className="landing-content">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae mollitia, modi, tenetur illum impedit vitae atque
				cupiditate recusandae ducimus commodi, quidem saepe voluptatum? Animi rem adipisci dicta, provident non nam, sed
				distinctio, maiores totam magni consequatur suscipit ea placeat quae minus corporis atque illo optio ab quidem
				impedit. Unde vitae fugiat cum facere nihil maxime et! Cupiditate, tempore vel! Sunt odit in consequatur
				reiciendis dignissimos autem similique, ab corrupti nisi atque aspernatur, reprehenderit molestias, modi velit
				ipsa dolor voluptatem rem minus. Aliquid impedit magnam, aperiam placeat nesciunt veritatis velit natus? Iusto
				commodi, quidem quas numquam nemo, possimus, eos aliquam odit ad ullam neque asperiores minima dolorem modi! Nam
				voluptate ipsam ratione esse consectetur tenetur molestiae, necessitatibus laborum, quis cupiditate itaque
				sequi, delectus corrupti. Doloribus et nemo, mollitia cumque repellendus vitae architecto reprehenderit sequi
			</p>
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
			<div>
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	.landing-content {
		text-align: center;
		width: 60%;
		margin: 2rem 0;
		&:hover {
			color: #fff;
		}
	}
	div:last-child {
		margin: 2rem 0;
	}
`;

const IconContainer = styled.div`
	font-size: 4rem;
	display: flex;
	justify-content: center;
	align-items: end;
	svg {
		margin: 0 1rem;
	}
`;
