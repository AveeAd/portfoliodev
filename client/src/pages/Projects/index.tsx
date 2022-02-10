import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<ProjectContainer>
			<h1>Projects</h1>
			<img src="/images/void.svg" width={250} height={250} alt="" />
		</ProjectContainer>
	);
};

export default Projects;

const ProjectContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;
