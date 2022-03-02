import React from 'react';
import { useSelector } from 'react-redux';

function Item() {
	console.log('Redux Item Render');
	const count = useSelector((state) => state.count);
	return <div>{count}</div>;
}

export default Item;
