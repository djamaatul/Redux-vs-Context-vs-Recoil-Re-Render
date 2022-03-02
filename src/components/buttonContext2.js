import React, { useContext } from 'react';
import { CountContext } from '../contexts/context';

function ButtonContext() {
	console.log('Context Button2 Render');
	const { dispatch } = useContext(CountContext);
	return (
		<div>
			<button
				onClick={() => {
					dispatch({ type: 'DECREASE' });
				}}
			>
				INCREASE
			</button>
		</div>
	);
}

export default ButtonContext;
