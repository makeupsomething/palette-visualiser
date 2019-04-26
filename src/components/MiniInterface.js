import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Bell } from '../assets/icons/svg/bell.svg'
import { ReactComponent as Paperclip } from '../assets/icons/svg/paperclip.svg'
import { ReactComponent as Smile } from '../assets/icons/svg/happy-face.svg'
import { ReactComponent as Error } from '../assets/icons/svg/error.svg'
import lego1 from '../assets/images/lego_1.jpg'
import lego2 from '../assets/images/lego_2.jpg'
import lego3 from '../assets/images/lego_3.jpg'

const Wrapper = styled.div`
	display: flex;
	width: 75vw;
	height: 50vh;
	box-shadow: 3px 4px 12px 0px #949393;
	border-radius: 12px;
	margin: auto;
	font-family: 'IBM Plex Sans', sans-serif;
	font-weight: 600;
	/* font-family: 'Open Sans', sans-serif; */
`

const Sidebar = styled.div`
	display: inline-block;
	width: 30%;
	height: 100%;
	border-radius: 12px 0 0 12px;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
`

const SideBarHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1em;
	color: white;
`

const HeaderText = styled.div`
	padding: 1em;
`

const TeamName = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	padding-bottom: 1em;
	font-size: 1.3em;
`

const UserName = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-weight: 400;
`

const OnlineStatusIcon = styled.div`
	display: inline-block;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
	width: 12px;
	height: 12px;
	border-radius: 50%;
	margin-right: 0.7em;
`

const SidebarSectionHeader = styled.div`
	padding: 1em;
	color: white;
`

const SideBarList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`

const SideBarItem = styled.li`
	padding: 1em 1.5em;
	color: white;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
	font-weight: 400;
`

const MainSection = styled.div`
	display: flex;
	width: 70%;
	flex-direction: column;
	justify-content: space-between;
	padding: 1em;
`

const MainSectionHeader = styled.div`
	padding: 0 1em;
	border-bottom: 1px solid gray;
`

const Messages = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: scroll;
	height: 100%;
	padding: 0 1em;
	list-style: none;
	margin: 0;
`

const MessageItem = styled.li`
	height: 25%;
`

const Message = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-weight: 400;
`

const ProfilePicture = styled.img`
	width: 10%;
	height: 10%;
	border-radius: 50%;
`

const InputSection = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: lightgray;
	border-radius: 12px;
	margin: 1em;
`

const TextInput = styled.input`
	border: none;
	background-color: transparent;
	padding: 0.5em;
`

const Notification = styled.div`
	display: flex;
	height: 20%;
	border-bottom: 1px solid yellow;
	background-color: lightyellow;
	align-items: center;
	justify-content: flex-start;
	padding: 0 1em;
`

const NotificationText = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 1em;
`

const MiniInterface = (props) => {
	const { colors } = props
	const [shade1, shade2, shade3, shade4, shade5, shade6, shade7] = colors

	return (
		<Wrapper>
			<Sidebar backgroundColor={shade4}>
				<SideBarHeader>
					<HeaderText>
						<TeamName>Design Team</TeamName>
						<UserName>
							<OnlineStatusIcon />
							User Person
						</UserName>
					</HeaderText>
					<Bell style={{ stroke: shade6 }} />
				</SideBarHeader>
				<SideBarList>
					<SideBarItem backgroundColor={shade4}>Inbox</SideBarItem>
					<SideBarItem backgroundColor={shade4}>Starred</SideBarItem>
				</SideBarList>
				<SidebarSectionHeader>Channels</SidebarSectionHeader>
				<SideBarList>
					<SideBarItem backgroundColor={shade4}>Design</SideBarItem>
					<SideBarItem backgroundColor={shade4}>Engineering</SideBarItem>
					<SideBarItem backgroundColor={shade2}>Marketing</SideBarItem>
					<SideBarItem backgroundColor={shade4}>Support</SideBarItem>
				</SideBarList>
			</Sidebar>
			<MainSection>
				<MainSectionHeader>
					<h2>heading</h2>
				</MainSectionHeader>
				<Notification>
					<Error />
					<NotificationText>
						<span>Oops!</span>
						<span>Looks like there is a problem with your connection</span>
					</NotificationText>
				</Notification>
				<Messages>
					<MessageItem>
						<Message>
							<ProfilePicture src={lego1} alt="Logo" />
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean
								sit amet metus vel massa aliquam tincidunt sit amet non sapien.
							</span>
						</Message>
					</MessageItem>
					<MessageItem>
						<Message>
							<ProfilePicture src={lego2} alt="Logo" />
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean
								sit amet metus vel massa aliquam tincidunt sit amet non sapien.
							</span>
						</Message>
					</MessageItem>
					<MessageItem>
						<Message>
							<ProfilePicture src={lego2} alt="Logo" />
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean
								sit amet metus vel massa aliquam tincidunt sit amet non sapien.
							</span>
						</Message>
					</MessageItem>
					<MessageItem>
						<Message>
							<ProfilePicture src={lego3} alt="Logo" />
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean
								sit amet metus vel massa aliquam tincidunt sit amet non sapien.
							</span>
						</Message>
					</MessageItem>
					<MessageItem>
						<Message>
							<ProfilePicture src={lego1} alt="Logo" />
							<span>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								feugiat sollicitudin ex, quis rutrum ex feugiat lacinia. Aenean
								sit amet metus vel massa aliquam tincidunt sit amet non sapien.
							</span>
						</Message>
					</MessageItem>
				</Messages>
				<InputSection>
					<TextInput disabled placeholder="Type your message" />
					<span>
						<Paperclip />
						<Smile />
					</span>
				</InputSection>
			</MainSection>
		</Wrapper>
	)
}

export default MiniInterface
