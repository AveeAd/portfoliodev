import { ContentContainer, LayoutContainer } from '../components/StyledComponents/Layouts';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { LayoutProps } from '../Interfaces';

const Layout = ({ children }: LayoutProps) => {
	return (
		<LayoutContainer>
			<Sidebar />
			<ContentContainer>{children}</ContentContainer>
			<Footer />
		</LayoutContainer>
	);
};

export default Layout;
