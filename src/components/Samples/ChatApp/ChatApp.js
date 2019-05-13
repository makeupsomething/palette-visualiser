import React from 'react'
import styled from 'styled-components'

import Sidebar from './Sidebar'
import Notification from './Notification'
import Message from './Message'
import Input from './Input'

import lego1 from '../../../assets/images/lego_1.jpg'
import lego2 from '../../../assets/images/lego_2.jpg'
import lego3 from '../../../assets/images/lego_3.jpg'

const messageObjects = [
	{
		id: '1',
		logo: lego1,
		user: 'Joe',
		time: '10:41am',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean sit ametmetus vel massa aliquam tincidunt sit amet non sapien.',
	},
	{
		id: '2',
		logo: lego2,
		user: 'Luke',
		time: '10:41am',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean sit ametmetus vel massa aliquam tincidunt sit amet non sapien.',
	},
	{
		id: '3',
		logo: lego3,
		user: 'Mo',
		time: '10:41am',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean sit ametmetus vel massa aliquam tincidunt sit amet non sapien.',
	},
	{
		id: '4',
		logo: lego1,
		user: 'Joe',
		time: '10:41am',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean sit ametmetus vel massa aliquam tincidunt sit amet non sapien.',
	},
	{
		id: '5',
		logo: lego2,
		user: 'Luke',
		time: '10:41am',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean sit ametmetus vel massa aliquam tincidunt sit amet non sapien.',
	},
	{
		id: '6',
		logo: lego3,
		user: 'Mo',
		time: '10:41am',
		text:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean sit ametmetus vel massa aliquam tincidunt sit amet non sapien.',
	},
]

const Wrapper = styled.div`
	display: flex;
	width: 75vw;
	max-width: 1000px;
	height: 50vh;
	box-shadow: 3px 4px 12px 0px #949393;
	border-radius: 12px;
	margin: auto;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 600;
	/* font-family: 'Open Sans', sans-serif; */
`

const MainSection = styled.div`
	display: flex;
	width: 70%;
	flex-direction: column;
	justify-content: space-between;
	padding: 1em 0;
`

const MainSectionHeader = styled.div`
	padding: 0 1em;
	border-bottom: 1px solid;
	border-bottom-color: ${(props) => props.borderColor || 'palevioletred'};
`

const Messages = styled.ul`
	overflow: scroll;
	height: 100%;
	padding: 1em;
	list-style: none;
	margin: 0;
`

const ChatApp = (props) => {
	const { primary, neutral, secondary, success, warning, danger } = props.colors

	return (
		<Wrapper>
			<Sidebar primary={primary} />
			<MainSection>
				<MainSectionHeader borderColor={neutral[3]}>
					<h2>My Palette</h2>
				</MainSectionHeader>
				<Notification color={warning} />
				<Messages>
					{messageObjects.map((message) => {
						return (
							<Message message={message} neutral={neutral} key={message.id} />
						)
					})}
				</Messages>
				<Input neutral={neutral} />
			</MainSection>
		</Wrapper>
	)
}

export default ChatApp
