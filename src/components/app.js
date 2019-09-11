import React from 'react';
import Boards from './boards';
import formBucket from '../buckets/form';

const App = ({
	bucketState: {
		input1 = "",
		num1,
		input2 = "",
		num2,
	},
	bucketMethods: {
		setInput1,
		increment1,
		setInput2,
		increment2,
	},
}) => (
	<div>
		<div>
			<input type="text" value={input1} onChange={setInput1}></input>
			<input type="text" value={input2} onChange={setInput2}></input>
		</div>
		<Boards />
	</div>
);

export default formBucket.tap(App, [
    "input1",
    "input2",
    "num1",
    "num2",
]);
