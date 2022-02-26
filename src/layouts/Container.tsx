import React from 'react';
import Ad from '../components/Ad';
import Discover from '../components/Discover';
import { Container } from '../components/StyledComponents/Reusables';

interface ContainerProps {
	children: React.ReactNode;
}

const ContainerBox = ({ children }: ContainerProps) => {
	return (
		<Container>
			{children}
			<div className="sidebar">
				<Ad />
				<Discover />
			</div>
		</Container>
	);
};

export default ContainerBox;
