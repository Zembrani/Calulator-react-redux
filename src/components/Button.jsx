import React from 'react'

import './Button.css'

const button = props => {
	let classStyle = 'button '
	classStyle += props.operation ? 'operation' : ''
	classStyle += props.double ? 'double' : ''
	classStyle += props.triple ? 'triple' : ''
	
	return (
		<button
			className={classStyle}
			onClick={e => props.click && props.click(e.target.innerHTML)}
		>
			{props.label}
		</button>
	)
}
export default button