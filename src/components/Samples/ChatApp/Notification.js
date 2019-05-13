import React, { Fragment } from 'react'
import styled from 'styled-components'

import { ReactComponent as Error } from '../../../assets/icons/svg/error.svg'

const NotificationWrapper = styled.div`
	display: flex;
	height: 20%;
	border-bottom: 1px solid;
	border-bottom-color: ${(props) => props.borderColor || 'palevioletred'};
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
	align-items: center;
	justify-content: flex-start;
	padding: 0 1em;
`

const NotificationText = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 1em;
	color: ${(props) => props.color || 'palevioletred'};
`

const Notification = (props) => {
	const { color } = props
	return (
		<NotificationWrapper backgroundColor={color[2]} borderColor={color[4]}>
			<Error style={{ stroke: color[7] }} />
			<NotificationText color={color[7]}>
				<span style={{ color: color[7] }}>Oops!</span>
				<span style={{ color: color[6] }}>
					Looks like there is a problem with your connection
				</span>
			</NotificationText>
		</NotificationWrapper>
	)
}

export default Notification
