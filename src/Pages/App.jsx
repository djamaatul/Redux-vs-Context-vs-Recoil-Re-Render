import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useRecoilState } from 'recoil';

import { CountContext } from '../contexts/context';
import { counter } from '../recoil/recoil';

import Button from '../components/button';
import Button2 from '../components/button2';
import ButtonContext from '../components/buttonContext';
import ButtonContext2 from '../components/buttonContext2';
import ButtonRecoil from '../components/buttonRecoil';
import ButtonRecoil2 from '../components/buttonRecoil2';

import Item from '../components/item';
import Item2 from '../components/item2';
import ItemContext from '../components/itemContext';
import ItemContext2 from '../components/itemContext2';
import ItemRecoil from '../components/itemRecoil';
import ItemRecoil2 from '../components/itemRecoil2';

const App = (props) => {
	///UnCommend all this for see Performance in AppButton

	// const { dispatch: dis } = useContext(CountContext);
	// const [count, setCount] = useRecoilState(counter);
	// const dispatch = useDispatch();
	console.log('App');
	return (
		<div>
			<h1>Open your console for see re render component </h1>
			<h4>Clear first your console</h4>
			<br />
			<table style={{ backgroundColor: '#aabbbb' }}>
				<thead>
					<tr>
						<td>Management</td>
						<td>Item1</td>
						<td>Item2</td>
						<td>Button1</td>
						<td>Button2</td>
						<td>in AppButton</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<h2>Redux</h2>
						</td>
						<td>
							<Item />
						</td>
						<td>
							<Item2 />
						</td>
						<td>
							<Button />
						</td>
						<td>
							<Button2 />
						</td>
						{/* <td>
							<button onClick={() => dispatch({ type: 'INCREASE' })}>Redux</button>
						</td> */}
					</tr>
					<tr>
						<td>
							<h2>Context</h2>
						</td>
						<td>
							<ItemContext />
						</td>
						<td>
							<ItemContext2 />
						</td>
						<td>
							<ButtonContext />
						</td>
						<td>
							<ButtonContext2 />
						</td>
						{/* <td>
							<button onClick={() => dis({ type: 'INCREASE' })}>Context</button>
						</td> */}
					</tr>
					<tr>
						<td>
							<h2>Recoil</h2>
						</td>
						<td>
							<ItemRecoil />
						</td>
						<td>
							<ItemRecoil2 />
						</td>
						<td>
							<ButtonRecoil />
						</td>
						<td>
							<ButtonRecoil2 />
						</td>
						{/* <td>
							<button onClick={() => setCount(count + 1)}>Recoil</button>
						</td> */}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

export default App;
