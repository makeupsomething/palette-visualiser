import React, { Fragment } from 'react'
import { Normalize } from 'styled-normalize'

import InputGroup from './components/InputGroup'

const App = () => {
	return (
		<Fragment>
			<Normalize />
			<InputGroup baseColor="#3183c8" />
			<InputGroup baseColor="#b8c4ce" />
			<InputGroup baseColor="#3daea3" />
			<InputGroup baseColor="#38c171" />
			<InputGroup baseColor="#f4ca64" />
			<InputGroup baseColor="#dc2f30" />
		</Fragment>
	)
}

export default App
