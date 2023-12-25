import UserBlockFeature from '../../features/userBlock'
import styles from './index.module.scss'

function HubHeaderWidget() {

	const { container } = styles

	return (
		<div className={container}>
			<ul>
				<li>Logo</li>
				<li>Search games</li>
				<li>Donate</li>
			</ul>

			<UserBlockFeature />

		</div>
	)
}

export default HubHeaderWidget