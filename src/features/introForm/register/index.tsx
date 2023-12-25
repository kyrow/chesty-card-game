import { useForm, FormProvider } from 'react-hook-form';
import UInput from '../UInput';
import styles from './index.module.scss'

interface LoginFormInputs {
	accessKey: string;
	// Добавьте здесь другие поля формы, если они есть
}

function RegisterFormFeature() {

	const { container } = styles
	const methods = useForm<LoginFormInputs>();

	const onSubmit = (data: LoginFormInputs) => {
		console.log(data);
	};

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				className={container}
			>
				<UInput name="email" type="text" placeholder="JohnDoe@gmail.com" labelText='email' />
				<UInput name="nickname" type="text" placeholder="Johny" labelText='nickname' />
				<UInput name="accessKey" type="text" placeholder="83dsa99*&.." labelText='accessKey' />

				<button type="submit">Register</button>
			</form>
		</FormProvider>
	)
}

export default RegisterFormFeature