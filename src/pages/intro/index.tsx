import styles from './index.module.scss'
import IntroFormFeature from '../../features/introForm'

function IntroPage() {

	const { container } = styles

	return (
		<div className={container}>
			<IntroFormFeature />
		</div>
	)
}

export default IntroPage