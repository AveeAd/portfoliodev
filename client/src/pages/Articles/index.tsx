import React from 'react';
import styled from 'styled-components';

const Articles = () => {
	return (
		<ArticleContainer>
			<h1>Articles</h1>
			<img src="/images/void.svg" width={250} height={250} alt="" />
		</ArticleContainer>
	);
};

export default Articles;

const ArticleContainer = styled.div`
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
