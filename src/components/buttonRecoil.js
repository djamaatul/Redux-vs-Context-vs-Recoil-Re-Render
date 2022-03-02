import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { counter } from '../recoil/recoil';

function ButtonRecoil() {
	console.log('Recoil Button Render');
	const [count, setCount] = useRecoilState(counter);
	return (
		<div>
			<button onClick={() => setCount((count) => count + 1)}>INCREASE</button>
		</div>
	);
}

export default ButtonRecoil;
