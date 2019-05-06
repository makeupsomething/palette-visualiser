import React, { Fragment } from 'react'
import styled from 'styled-components'
import Values from 'values.js'
import { ChromePicker } from 'react-color'
import MiniInterface from './MiniInterface'

const Swatch = styled.div`
	display: inline-block;
	width: 25px;
	height: 25px;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
`

const generateShades = (baseColor) => {
	const color = new Values(baseColor).all(20)
	return color.map((c) => {
		return `#${c.hex}`
	})
}

const InputGroup = (props) => {
	const { baseColor } = props
	const [color, setColor] = React.useState(baseColor)
	const [colors, setColors] = React.useState(generateShades(baseColor))

	React.useEffect(() => {
		if (colors.length === 0) {
			setColors(generateShades(color))
		} else {
			setColors(generateShades(color))
		}
	}, [color])

	return (
		<Fragment>
			<ChromePicker color={color} onChange={(color) => setColor(color.hex)} />
			{colors.map((c) => {
				return <Swatch backgroundColor={c} key={c} />
			})}
			{/* <MiniInterface colors={colors} /> */}
		</Fragment>
	)
}

export default InputGroup
