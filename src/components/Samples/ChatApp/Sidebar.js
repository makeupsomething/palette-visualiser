import React, { Fragment } from 'react'
import styled from 'styled-components'
import { ReactComponent as Bell } from '../../../assets/icons/svg/bell.svg'

const SidebarWrapper = styled.div`
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

const Sidebar = (props) => {
	const { primary } = props
	return (
		<SidebarWrapper backgroundColor={primary[6]}>
			<SideBarHeader>
				<HeaderText>
					<TeamName>Design Team</TeamName>
					<UserName>
						<OnlineStatusIcon />
						User Person
					</UserName>
				</HeaderText>
				<Bell style={{ stroke: primary[3] }} />
			</SideBarHeader>
			<SideBarList>
				<SideBarItem backgroundColor={primary[6]}>Inbox</SideBarItem>
				<SideBarItem backgroundColor={primary[6]}>Starred</SideBarItem>
			</SideBarList>
			<SidebarSectionHeader>Channels</SidebarSectionHeader>
			<SideBarList>
				<SideBarItem backgroundColor={primary[6]}>Design</SideBarItem>
				<SideBarItem backgroundColor={primary[6]}>Engineering</SideBarItem>
				<SideBarItem backgroundColor={primary[3]}>Marketing</SideBarItem>
				<SideBarItem backgroundColor={primary[6]}>Support</SideBarItem>
			</SideBarList>
		</SidebarWrapper>
	)
}

export default Sidebar
