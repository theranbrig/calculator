import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
	const { clearValue } = useContext(NumberContext);
	return (
			<button onClick={() => clearValue()}>C</button>

	);
};

export default ClearButton;
