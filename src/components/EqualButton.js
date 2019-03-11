import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const EqualButton = ({ buttonValue }) => {
	const { doMath } = useContext(NumberContext);
	return (
		<div className="button-div" onClick={() => doMath()}>
			<button>{'='}</button>
		</div>
	);
};

export default EqualButton;
