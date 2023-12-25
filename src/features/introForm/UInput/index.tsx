import React from 'react';
import { useFormContext, FieldError } from 'react-hook-form';
import styles from './index.module.scss'

interface UInputType {
	name: string;
	type?: string;
	placeholder?: string;
	labelText?: string
}

const UInput: React.FC<UInputType> = ({ name, type = 'text', placeholder, labelText }) => {

	const { register, formState: { errors } } = useFormContext();
	const { inputField, container } = styles

	const getErrorMessage = (error: FieldError | undefined): string => {
		return error ? error.message || "Error" : "";
	};

	return (
		<div className={container}>
			<label>{labelText}</label>
			<input
				{...register(name, { required: 'This field is required' })}
				type={type}
				placeholder={placeholder}
				className={inputField}
			/>
			{errors[name] && <span>{getErrorMessage(errors[name] as FieldError)}</span>}
		</div>
	);
};

export default UInput;
