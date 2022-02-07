import React from 'react';
import { StyledButton } from '../StyledComponents/ui';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	color?: string;
	backgroundColor?: string;
	borderColor?: string;
	display?: string;
	width?: string;
	height?: string;
	margin?: string;
}

const Button = ({
	children,
	onClick,
	color,
	backgroundColor,
	borderColor,
	display,
	width,
	height,
	margin,
}: ButtonProps) => {
	return (
		<StyledButton
			onClick={onClick}
			color={color}
			backgroundColor={backgroundColor}
			borderColor={borderColor}
			display={display}
			width={width}
			height={height}
			margin={margin}
		>
			{children}
		</StyledButton>
	);
};
export default Button;
