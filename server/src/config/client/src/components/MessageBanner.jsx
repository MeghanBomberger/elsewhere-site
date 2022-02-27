import { useContext } from 'react'
import { GlobalContext } from '../App'
import './MessageBanner.scss'

export default function MessageBanner() {
	const context = useContext(GlobalContext)

	return (
		<div className="message-banner">
			<p>{context.state.message}</p>
		</div>
	)
}
