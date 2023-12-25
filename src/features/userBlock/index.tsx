import { useUser } from '../../shared/store/useUserStore'
import styles from './index.module.scss'

function UserBlockFeature() {

	const username = useUser((state) => state.NickName)
	const { container } = styles

	return (
		<div className={container}>
			<span>{username}</span>
			<img src="public/1009294.png" alt="user-avatar" />
		</div>
	)
}

export default UserBlockFeature