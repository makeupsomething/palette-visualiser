import React from 'react'
import styled from 'styled-components'

import { ReactComponent as Paperclip } from '../../../assets/icons/svg/paperclip.svg'
import { ReactComponent as Smile } from '../../../assets/icons/svg/happy-face.svg'

const InputSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
	border-radius: 12px;
	margin: 1em;
	padding: 0.5em;
`

const TextInput = styled.input`
	border: none;
	background-color: transparent;
	padding: 0.5em;
	::placeholder {
		color: ${(props) => props.color || 'palevioletred'};
	}
`

const Input = (props) => {
	const { neutral } = props

	return (
		<InputSection backgroundColor={neutral[3]}>
			<TextInput disabled placeholder="Type your message" color={neutral[7]} />
			<span>
				<Paperclip style={{ stroke: neutral[7] }} />
				<Smile style={{ stroke: neutral[7] }} />
			</span>
		</InputSection>
	)
}

export default Input
