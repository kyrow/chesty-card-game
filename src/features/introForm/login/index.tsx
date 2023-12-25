import { useForm, FormProvider } from 'react-hook-form';
import UInput from '../UInput';
import styles from './index.module.scss'

interface LoginFormInputs {
	accessKey: string;
	// Добавьте здесь другие поля формы, если они есть
}

function LoginFormFeature() {

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
				<UInput name="accessKey" type="text" placeholder="accessKey" />
				<button type="submit">Log in</button>
			</form>
		</FormProvider>
	)
}

export default LoginFormFeature