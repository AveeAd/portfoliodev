import React from 'react';
import styled from 'styled-components';

interface FormElementProps {
	register?: any;
	control?: any;
	type: string;
	label?: string;
	id?: string;
	errors?: any;
	onChange?: any;
	setValue?: any;
	placeholder?: string;
	defaultValue?: any;
	value?: any;
}

const FormElement = ({
	register,
	control,
	type,
	label,
	id,
	errors,
	onChange,
	setValue,
	placeholder,
	defaultValue,
	value,
}: FormElementProps) => {
	let innerComponent;
	switch (type) {
		case 'text':
		case 'email':
		case 'number':
			innerComponent = (
				<input
					type={type}
					placeholder={placeholder}
					{...register(id)}
					id={id}
					defaultValue={defaultValue}
					value={value}
				/>
			);
			break;
		case 'textarea':
			innerComponent = (
				<textarea id={id} {...register(id)} defaultValue={defaultValue} value={value} placeholder={placeholder} />
			);
			break;
	}
	return (
		<FormGroup>
			{label && <label htmlFor={id}>{label}</label>}
			{innerComponent}
		</FormGroup>
	);
};

export default FormElement;

const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0.5rem 0;
	label {
		margin-bottom: 0.25rem;
		font-weight: 600;
	}
	input[type='text'],
	input[type='email'],
	input[type='number'] {
		background-color: #fff2;
		padding: 0.5rem 1rem;
		border: 2px solid #ccc8;
		border-radius: 5px;
		color: #ccc;
		&:focus {
			outline: none;
			border-color: #ccc;
			&::placeholder {
				color: #ccc;
			}
		}
	}
	textarea {
		background-color: #fff2;
		padding: 0.5rem 1rem;
		border: 2px solid #ccc8;
		border-radius: 5px;
		color: #ccc;
		&:focus {
			outline: none;
			border-color: #ccc;
			&::placeholder {
				color: #ccc;
			}
		}
	}
`;
