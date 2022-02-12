import styled from 'styled-components';

export const LayoutContainer = styled.div`
	height: 100vh;
	width: 100vw;
	padding: 1rem;
	overflow: hidden;
	display: grid;
	grid-template-columns: max-content auto;
	grid-template-areas:
		'sidebar content'
		'sidebar foot';
	grid-template-rows: 1fr max-content;
	grid-gap: 1rem;
	section,
	main,
	footer {
		padding: 1rem;
		border-radius: 0.5rem;
	}
`;

export const SidebarContainer = styled.section`
	position: relative;
	grid-area: sidebar;
	height: 100%;
	width: max-content;
	border-left: none;
	.collapse {
		position: absolute;
		background-color: #ccc;
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
	width: calc(100% - 1rem);
	margin-right: 1rem;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const FooterContainer = styled.footer`
	grid-area: foot;
`;
