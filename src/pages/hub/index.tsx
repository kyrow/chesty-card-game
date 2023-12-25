import { useConnectSocket } from '../../shared/hooks/useConnectSocket'

function HubPage() {

	useConnectSocket()

	return (
		<div>HubPage</div>
	)
}

export default HubPage