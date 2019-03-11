import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const Display = ({ displayValue }) => {
	const { number, storedNumber } = useContext(NumberContext);
	return (
		<div>
			<h1>{number.length ? number : '0'}</h1>
		</div>
	);
};

export default Display;
