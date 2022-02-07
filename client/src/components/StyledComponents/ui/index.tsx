import styled from 'styled-components';

export interface ButtonStyleProps {
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	display?: string;
	width?: string;
	height?: string;
	margin?: string;
}

export const StyledButton = styled.button`
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	text-align: center;
	cursor: pointer;
	${(props: ButtonStyleProps) => `
      color: ${props?.color};
      background-color: ${props?.backgroundColor};
      border-color: ${props?.borderColor};
      display: ${props?.display};
      width: ${props?.width};
      height: ${props?.height};
      border: 1px solid ${props?.borderColor ? props?.borderColor : `transparent`};
      margin: ${props?.margin};
    `}
`;

export interface ModalStyleProps {
	show?: boolean;
	width?: string;
	height?: string;
}

export const StyledModal = styled.div`
	position: fixed;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	.background {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 1001;
		width: 100vw;
		height: 100vh;
	}
	.content {
		position: relative;
		width: 30vw;
		height: 50vh;
		overflow: hidden;
		top: 20%;
		left: calc(50% - 15vw);
		z-index: 1002;
		background-color: #002;
		border-radius: 0.5rem;
		box-shadow: 0 0 100px 5px rgba(255, 255, 255, 0.5);
		.header,
		.body,
		.footer {
			padding: 1rem;
		}
		.header {
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 20%;
		}
		.body {
			border: 2px solid #002;
			overflow-y: auto;
			max-height: 60%;
		}
		& .footer {
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 20%;
		}
	}
	${(props: ModalStyleProps) => `
      display: ${props?.show ? 'block' : 'none'};
    `}
`;
