import styled from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: grid;
	grid-template-columns: 20% 1fr;
	grid-template-areas:
		'head head'
		'sidebar content'
		'foot foot';
	grid-template-rows: max-content 1fr max-content;
	grid-gap: 1rem;
	header,
	section,
	main,
	footer {
		padding: 1rem;
		border-radius: 0.5rem;
	}
`;

export const HeaderContainer = styled.header`
	grid-area: head;
	display: flex;
	border-bottom: 1px solid #008;
`;

export const SidebarContainer = styled.section`
	grid-area: sidebar;
	height: 100%;
	width: 100%;
	border: 1px solid #008;
	border-left: none;
`;

export const ContentContainer = styled.main`
	grid-area: content;
	height: 100%;
	border: 1px solid #008;
	border-right: none;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const FooterContainer = styled.footer`
	grid-area: foot;
	border-top: 1px solid #008;
`;
