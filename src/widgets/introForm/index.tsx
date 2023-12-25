import { useState } from 'react'
import styles from './index.module.scss'
import LoginFormFeature from '../../features/introForm/login'
import RegisterFormFeature from '../../features/introForm/register'

function IntroFormWidget() {

	const { container, textBlock } = styles
	const [isRegisterForm, setRegisterForm] = useState(false)

	return (
		<div className={container}>

			{isRegisterForm ?
				<span>Enter yours accessKey</span>
				:
				<span>Register</span>
			}

			{isRegisterForm && <LoginFormFeature />}
			{!isRegisterForm && <RegisterFormFeature />}

			<div className={textBlock}>
				{isRegisterForm ?
					<span>I don't have an account</span>
					:
					<span>I already have an account</span>
				}
				<a onClick={() => setRegisterForm(!isRegisterForm)}>
					{isRegisterForm ? "Sign up" : 'Sign in'}
				</a>
			</div>

		</div>
	)
}

export default IntroFormWidget