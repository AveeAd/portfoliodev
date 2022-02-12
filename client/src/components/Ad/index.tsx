import styled from 'styled-components';
import { Image } from '../StyledComponents/Reusables';

const Ad = () => {
	return (
		<AdBox>
			<Image width="100%" height="100%" src="/images/void.svg" />
		</AdBox>
	);
};

export default Ad;

const AdBox = styled.div`
	width: 100%;
	height: 50%;
	padding: 0.5rem;
`;
