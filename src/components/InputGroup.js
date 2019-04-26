import React, { Fragment } from 'react'
import { lightenDarkenColor } from '../utils'
import MiniInterface from './MiniInterface'

const generateShades = (baseColor) => {
	return [
		lightenDarkenColor(baseColor, -30),
		lightenDarkenColor(baseColor, -30),
		lightenDarkenColor(baseColor, -20),
		baseColor,
		lightenDarkenColor(baseColor, 20),
		lightenDarkenColor(baseColor, 30),
		lightenDarkenColor(baseColor, 40),
	]
}

const Input = (props) => {
	const { index, colors, setColors } = props
	function updateColor(color) {
		const newColors = colors.map((c, i) => {
			if (index !== i) {
				return c
			}
			return color
		})
		setColors(newColors)
	}
	return (
		<input
			type="color"
			value={colors[index]}
			onChange={(e) => updateColor(e.target.value)}
		/>
	)
}

const InputGroup = (props) => {
	const { baseColor } = props
	const [colors, setColors] = React.useState([])

	React.useEffect(() => {
		if (colors.length === 0) {
			setColors(generateShades(baseColor))
		} else {
			setColors(generateShades(colors[3]))
		}
	}, [colors])

	return (
		<Fragment>
			{colors.length > 0
				? colors.map((color, index) => {
						return (
							<Input
								index={index}
								colors={colors}
								setColors={setColors}
								key={`colors-${index}`}
							/>
						)
				  })
				: null}
			<MiniInterface colors={colors} />
		</Fragment>
	)
}

export default InputGroup
