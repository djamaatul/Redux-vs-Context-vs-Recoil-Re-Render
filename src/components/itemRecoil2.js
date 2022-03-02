import React from 'react';
import { counter } from '../recoil/recoil';
import { useRecoilValue } from 'recoil';

function ItemRecoil() {
	console.log('Recoil Item2 Render');
	const count = useRecoilValue(counter);
	return <div>{count}</div>;
}

export default ItemRecoil;
