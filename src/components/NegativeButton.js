import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = ({ buttonValue }) => {
	const { toggleNegative } = useContext(NumberContext);
	return <button onClick={() => toggleNegative()}>{'-/+'}</button>;
};

export default NegativeButton;
