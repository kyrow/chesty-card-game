import styles from './index.module.scss'

import IntroFormWidget from '../../widgets/introForm'

function IntroPage() {

	const { container } = styles

	return (
		<div className={container}>
			<IntroFormWidget />
		</div>
	)
}

export default IntroPage