import { useState } from 'react'
import { useUser } from '../../shared/store/useUserStore'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'

function IntroFormFeature() {

	const { container } = styles
	const [nickname, setnickname] = useState<string>('')

	const enterNickname = useUser((state) => state.setNickName)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setnickname(e.target.value);
	};

	return (
		<div className={container}>
			<label>Nickname</label>
			<input type='text' onChange={handleChange} />
			<Link to='/hub' onClick={() => enterNickname(nickname)}>Go</Link>
		</div>
	)
}

export default IntroFormFeature