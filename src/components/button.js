import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../redux/action';

function Button() {
	console.log('Redux Button Render');
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch({ type: increase })}>INCREASE</button>
		</div>
	);
}

export default Button;
