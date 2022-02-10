import styled from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
	overflow: hidden;
	display: grid;
	grid-template-columns: max-content auto;
	grid-template-areas:
		'head head'
		'sidebar content'
		'foot foot';
	grid-template-rows: max-content 1fr max-content;
	grid-gap: 1rem;
	section,
	main,
	footer {
		padding: 1rem;
		border-radius: 0.5rem;
	}
	header:hover,
	main:hover,
	section:hover,
	footer:hover {
		border-color: #00f;
	}
`;

export const HeaderContainer = styled.header`
	grid-area: head;
	display: flex;
	border-bottom: 1px solid #008;
	padding: 0.5rem 2rem;
`;

export const SidebarContainer = styled.section`
	position: relative;
	grid-area: sidebar;
	height: 100%;
	width: max-content;
	border: 1px solid #008;
	border-left: none;
	.collapse {
		position: absolute;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		display: grid;
		place-content: center;
		top: 10%;
		right: -15px;
	}
	${({ collapse }: { collapse: boolean }) =>
		collapse ? 'a {width: max-content; span { display: none;}}' : 'a{span {display: inline;} width: 15vw;}'}
`;

export const ContentContainer = styled.main`
	grid-area: content;
	height: 100%;
	width: calc(100% - 1rem);
	margin-right: 1rem;
	border: 1px solid #008;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const FooterContainer = styled.footer`
	grid-area: foot;
	border-top: 1px solid #008;
`;
