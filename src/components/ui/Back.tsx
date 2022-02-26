import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

interface BackProps {
	icon?: boolean;
	button?: boolean;
	text?: string;
	[rest: string]: any;
}

const Back = ({ icon, button, text, ...rest }: BackProps) => {
	const navigate = useNavigate();
	const handleBack = () => {
		navigate(-1);
	};
	return (
		<>
			{icon && <FaArrowLeft style={iconStyle} {...rest} onClick={handleBack} />}
			{button && (
				<button style={buttonStyle} {...rest} onClick={handleBack}>
					Go Back
				</button>
			)}
			{text && (
				<Link to="#" style={linkStyle} onClick={handleBack} {...rest}>
					Go back
				</Link>
			)}
		</>
	);
};

export default Back;

const iconStyle: React.CSSProperties = {
	display: 'inline-flex',
	alignItems: 'center',
	fontSize: '1.2rem',
	color: 'white',
	margin: '0.5rem',
};
const buttonStyle: React.CSSProperties = {
	display: 'inline',
	fontSize: '1rem',
	color: 'white',
	margin: '0.5rem',
	backgroundColor: 'transparent',
	border: '2px solid white',
	padding: '0.5rem 1rem',
};
const linkStyle: React.CSSProperties = {
	display: 'inline',
	fontSize: '1.2rem',
	color: 'white',
	margin: '0.5rem',
	textDecoration: 'none',
};
