import { useState } from 'react';
import styled from 'styled-components';
import FormElement from '../../ui/FormElement';
import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';

const ArticleForm = () => {
	const [show, setShow] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	return (
		<FormContainer>
			<Button backgroundColor={show ? '#f00' : '#ccc'} color={show ? '#fff' : '#333'} onClick={() => setShow(!show)}>
				{show ? 'Close' : 'Add'}
			</Button>
			{show && (
				<form onSubmit={handleSubmit((data: any) => console.log(data))}>
					<div>
						<FormElement
							type="text"
							register={register}
							id="title"
							placeholder="Enter Title"
							label="Title"
							errors={errors}
						/>
						<FormElement
							type="textarea"
							register={register}
							id="description"
							placeholder="Enter Description"
							label="Description"
							errors={errors}
						/>
						<Button margin="0.5rem 0">Submit</Button>
					</div>
				</form>
			)}
		</FormContainer>
	);
};

export default ArticleForm;

const FormContainer = styled.div`
	width: 100%;
	form {
		overflow: hidden;
		width: 100%;
		div {
			animation: slideVertical 300ms ease-in forwards;
		}
	}
`;
