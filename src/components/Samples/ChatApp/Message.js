import React from 'react'
import styled from 'styled-components'

const MessageItem = styled.li`
	height: 25%;
`

const MessageWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-weight: 400;
`

const MessageTextSection = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;
	padding: 1em;
`

const MessageText = styled.span`
	color: ${(props) => props.color || 'palevioletred'};
`

const MessageUserName = styled.span`
	font-size: 1.3em;
`

const MessageTime = styled.span`
	font-size: 0.7em;
	padding-left: 1em;
`

const ProfilePicture = styled.img`
	width: 7%;
	height: 7%;
	border-radius: 50%;
`

const Message = (props) => {
	const { message, neutral } = props
	return (
		<MessageItem>
			<MessageWrapper>
				<ProfilePicture src={message.logo} alt="Logo" />
				<MessageTextSection>
					<div>
						<MessageUserName>{message.user}</MessageUserName>
						<MessageTime>{message.time}</MessageTime>
					</div>
					<MessageText color={neutral[7]}>{message.text}</MessageText>
				</MessageTextSection>
			</MessageWrapper>
		</MessageItem>
	)
}

export default Message
