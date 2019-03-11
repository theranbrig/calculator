import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const FunctionButton = ({ buttonValue }) => {
	const { setFunctionType } = useContext(NumberContext);
	return (
		<div className="button-div" onClick={() => setFunctionType(buttonValue)}>
			<button>{buttonValue}</button>
		</div>
	);
};

export default FunctionButton;
