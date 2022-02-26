import React from 'react';
import { StyledModal } from '../StyledComponents/ui';

interface ModalProps {
	show?: boolean;
	handleClose?: () => void;
	children?: React.ReactNode;
}

const Modal = ({ show, handleClose, children }: ModalProps) => {
	return (
		<StyledModal show={show}>
			<div className="background" onClick={handleClose}></div>
			<div className="content">{children}</div>
		</StyledModal>
	);
};

export default Modal;
