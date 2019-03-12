import React, { useContext } from 'react';
import CalculatorButton from './NumberButton';
import FunctionButton from './FunctionButton';
import ClearButton from './ClearButton';
import styled from 'styled-components';
import Display from './Display';
import { NumberContext } from './NumberProvider';
import EqualButton from './EqualButton';
import BackButton from './BackButton';
import NegativeButton from './NegativeButton';

const CalculatorStyles = styled.div`
	background: #c38f9e;
	padding: 90px;
	width: 60%;
	margin-left: calc(20% - 90px);
	display: grid;
	justify-items: center;
	grid-template-areas:
		'display'
		'numbers';
	button {
		width: 100%;
		height: 60px;
		border-radius: 20px;
		border: 3px solid white;
		background-color: #41b3a3;
		font-size: 2rem;
		color: white;
		&:focus {
			outline: none;
		}
	}
	.display {
		font-family: 'Old Standard TT', serif;
		font-weight: 700;
		grid-area: display;
		h1 {
			color: white;
			font-size: 4rem;
			margin: 0;
			text-align: right;
		}
	}
	.number-pad {
		grid-area: numbers;
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(4, 1fr);
		.button-div:focus {
			outline: none;
		}
	}
	.zero-button {
		grid-column: 1/3;
	}
`;

const Calculator = () => {
	const { setValue, addFunction, minusFunction, setFunctionType } = useContext(NumberContext);
	return (
		<CalculatorStyles>
			<div className="display">
				<Display />
			</div>
			<div className="number-pad">
				<ClearButton />
				<BackButton />
				<NegativeButton />
				<FunctionButton buttonValue={'/'} />
				<CalculatorButton buttonValue={7} />
				<CalculatorButton buttonValue={8} />
				<CalculatorButton buttonValue={9} />
				<FunctionButton buttonValue={'*'} />
				<CalculatorButton buttonValue={4} />
				<CalculatorButton buttonValue={5} />
				<CalculatorButton buttonValue={6} />
				<FunctionButton buttonValue={'-'} />
				<CalculatorButton buttonValue={1} />
				<CalculatorButton buttonValue={2} />
				<CalculatorButton buttonValue={3} />
				<FunctionButton buttonValue={'+'} />
				<div className="zero-button">
					<CalculatorButton buttonValue={0} />
				</div>
				<CalculatorButton buttonValue={'.'} />
				<EqualButton />
			</div>
		</CalculatorStyles>
	);
};

export default Calculator;
