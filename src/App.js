import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Normalize } from 'styled-normalize'

import ChatApp from './components/Samples/ChatApp/ChatApp'
import InputActive from './components/InputActive'
import { generateShades } from './utils'

const SwatchContainer = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: center;
	margin: auto;
	margin-top: 5em;
	margin-bottom: 5em;
	max-width: 80%;
`

const baseColors = {
	primary: '#3183c8',
	neutral: '#b8c4ce',
	secondary: '#3daea3',
	success: '#38c171',
	warning: '#f4ca64',
	danger: '#dc2f30',
}

const App = () => {
	const [colors, setColors] = React.useState({
		primary: generateShades(baseColors.primary),
		neutral: generateShades(baseColors.neutral),
		secondary: generateShades(baseColors.secondary),
		success: generateShades(baseColors.success),
		warning: generateShades(baseColors.warning),
		danger: generateShades(baseColors.danger),
	})

	return (
		<Fragment>
			<Normalize />
			<SwatchContainer>
				{Object.keys(baseColors).map((type) => {
					return (
						<InputActive
							baseColor={baseColors[type]}
							key={baseColors[type]}
							colors={colors[type]}
							setColors={setColors}
							type={type}
						/>
					)
				})}
			</SwatchContainer>
			<ChatApp colors={colors} />
		</Fragment>
	)
}

export default App
