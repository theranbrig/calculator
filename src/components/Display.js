import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';
import styled from 'styled-components';

const DisplayStyles = styled.div`
	display: grid;
	grid-template-rows: 90px 50px;
	grid-template-columns: 1fr;
`;

const Display = ({ displayValue }) => {
	const { number, storedNumber, functionType } = useContext(NumberContext);
	return (
		<div>
			<h1>{!number.length && !storedNumber ? '0' : number ? number : storedNumber}</h1>
			<p>{`${storedNumber} ${functionType} ${number}`}</p>
		</div>
	);
};

export default Display;
