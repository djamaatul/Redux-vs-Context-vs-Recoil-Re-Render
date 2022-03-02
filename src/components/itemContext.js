import React, { useContext } from 'react';
import { CountContext } from '../contexts/context';

function ItemContext() {
	console.log('Context Item Render');
	const { state } = useContext(CountContext);
	return <div>{state.count}</div>;
}

export default ItemContext;
