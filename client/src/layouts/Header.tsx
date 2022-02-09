import React from 'react';
import { HeaderContainer } from '../components/StyledComponents/Layouts';
import { Image } from '../components/StyledComponents/Reusables';

const Header = () => {
	return (
		<HeaderContainer>
			<Image
				width="60px"
				height="60px"
				circle
				src="https://images.theconversation.com/files/102848/original/image-20151123-18264-j336wc.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
			/>
		</HeaderContainer>
	);
};

export default Header;
