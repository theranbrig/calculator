import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ buttonValue }) => {
	const { setCalcFunction } = useContext(NumberContext);
	return (
		<div className="button-div" onClick={() => setCalcFunction(buttonValue)}>
			<button>{buttonValue}</button>
		</div>
	);
};

export default FunctionButton;
