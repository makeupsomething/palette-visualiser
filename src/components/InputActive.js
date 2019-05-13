import React from 'react'
import styled from 'styled-components'
import { ChromePicker } from 'react-color'

import { generateShades } from '../utils'

const ColorInputWrapper = styled.div`
	display: flex;
	height: fit-content;
	justify-content: space-between;
	width: ${(props) => (props.isActive ? '45%' : '12%')};
	background-color: ${(props) =>
		props.isActive ? '#333333b8' : 'transparent'};
	padding: ${(props) => (props.isActive ? '1em' : '0')};
	transition: width 0.3s, padding 0.3s;
`

const SwatchWrapper = styled.div`
	height: ${(props) => (props.isActive ? '250px' : '200px')};
	width: ${(props) => (props.isActive ? '35%' : '100%')};
	transition: width 0.3s, height 0.3s;
`

const MainSwatch = styled.div`
	height: 60%;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
`

const Swatches = styled.div`
	height: 40%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	flex-wrap: wrap;
`

const Swatch = styled.div`
	width: 50%;
	background-color: ${(props) => props.backgroundColor || 'palevioletred'};
`

const ColorPickerContainer = styled.div`
	opacity: ${(props) => (props.isActive ? '100' : '0')};
	width: ${(props) => (props.isActive ? 'fit-content' : '0%')};
	height: ${(props) => (props.isActive ? 'fit-content' : '0%')};
	transition: width 0.7s, height, 0.7s, opacity 0.7s;
`

const InputActive = (props) => {
	const { baseColor, colors, setColors, type } = props
	const [color, setColor] = React.useState(baseColor)
	const [isActive, setIsActive] = React.useState(false)

	const toggleInput = () => {
		setIsActive(!isActive)
	}

	React.useEffect(() => {
		setColors((prevColors) => {
			return { ...prevColors, [type]: generateShades(color) }
		})
	}, [color])

	return (
		<ColorInputWrapper isActive={isActive}>
			<SwatchWrapper isActive={isActive}>
				<MainSwatch backgroundColor={color} onClick={() => toggleInput()} />
				<Swatches>
					{colors.map((c) => {
						return <Swatch backgroundColor={c} key={c} />
					})}
				</Swatches>
			</SwatchWrapper>
			<ColorPickerContainer isActive={isActive}>
				{isActive && (
					<ChromePicker
						color={color}
						onChange={(color) => setColor(color.hex)}
					/>
				)}
			</ColorPickerContainer>
		</ColorInputWrapper>
	)
}

export default InputActive
