import React from 'react';
import { StyledButton } from '../StyledComponents/ui';

interface ButtonProps {
	children: React.ReactNode;
	onClick?: () => void;
	color?: string;
	[rest: string]: any;
}

const Button = ({ children, onClick, ...rest }: ButtonProps) => {
	return (
		<StyledButton onClick={onClick} {...rest}>
			{children}
		</StyledButton>
	);
};
export default Button;
