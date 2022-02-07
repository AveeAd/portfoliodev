import React from 'react';
import { ContentContainer, LayoutContainer } from '../components/StyledComponents/Layouts';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LayoutProps } from '../Interfaces';

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutContainer>
			<Header />
			<Sidebar />
			<ContentContainer>{children}</ContentContainer>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
