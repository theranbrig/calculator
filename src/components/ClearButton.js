import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
	const { clearValue } = useContext(NumberContext);
	return (
		<div className="button-div">
			<button onClick={() => clearValue()}>C</button>
		</div>
	);
};

export default ClearButton;
