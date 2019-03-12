import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const EqualButton = ({ buttonValue }) => {
	const { doMath } = useContext(NumberContext);
	return <button onClick={() => doMath()}>{'='}</button>;
};

export default EqualButton;
