import React from 'react';
import styled from 'styled-components';

const Discover = () => {
	return (
		<DiscoverBox>
			<h4>Discover</h4>
			<div>
				{Array.from({ length: 10 }, (v, i) => i + 1).map((v) => (
					<Badge>{Array.from({ length: Math.random() * 7 + 3 }, (v: any, i: number) => 'a').join()}</Badge>
				))}
			</div>
		</DiscoverBox>
	);
};

export default Discover;

const DiscoverBox = styled.div`
	height: 50%;
	padding: 1rem;
	div {
		display: flex;
		flex-wrap: wrap;
	}
`;

const Badge = styled.span`
	padding: 0.2rem 0.5rem;
	background-color: #888;
	color: #002;
	border-radius: 1rem;
	margin: 0.2rem;
`;
