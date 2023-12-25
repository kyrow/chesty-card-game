import { useConnectSocket } from '../../shared/hooks/useConnectSocket'
import HubHeaderWidget from '../../widgets/hubHeader'
import styles from './index.module.scss'

function HubPage() {

	const { wrapper, container } = styles

	useConnectSocket()

	return (
		<div className={wrapper}>
			<div className={container}>
				<HubHeaderWidget />
			</div>
		</div>
	)
}

export default HubPage