import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ buttonValue }) => {
	const { setCalcFunction } = useContext(NumberContext);
	return (
		<button
			onClick={() => {
				setCalcFunction(buttonValue);
			}}>
			{buttonValue}
		</button>
	);
};

export default FunctionButton;
