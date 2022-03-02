import React from 'react';
import { useDispatch } from 'react-redux';
import { increase, decrease } from '../redux/action';

function Button() {
	console.log('Redux Button2 Render');
	const dispatch = useDispatch();
	return (
		<div>
			<button onClick={() => dispatch({ type: decrease })}>Decrease</button>
		</div>
	);
}

export default Button;
