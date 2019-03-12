import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const BackButton = ({ buttonValue }) => {
	const { handleBackButton } = useContext(NumberContext);
	return <button onClick={() => handleBackButton()}>&#8592;</button>;
};

export default BackButton;
