import React from 'react';
import styled from 'styled-components';

interface LayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <Container>{children}</Container>;
};

export default Layout;

const Container = styled.div``;
