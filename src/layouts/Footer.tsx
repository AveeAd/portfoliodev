import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import styled from 'styled-components';
import { FooterContainer } from '../components/StyledComponents/Layouts';

const Footer = () => {
	return (
		<FooterContainer>
			<SocialIcons>
				<FaFacebook />
				<FaInstagram />
				<FaGithub />
				<FaTwitter />
				<FaLinkedin />
			</SocialIcons>
		</FooterContainer>
	);
};

export default Footer;

const SocialIcons = styled.div`
	display: flex;
	justify-content: end;
	font-size: 1.5rem;
	svg {
		margin-right: 1rem;
	}
`;
