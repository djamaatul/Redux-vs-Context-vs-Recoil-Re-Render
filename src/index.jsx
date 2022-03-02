import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Context from './contexts/context';
import { RecoilRoot } from 'recoil';
console.log('Index');

ReactDOM.render(
	<React.StrictMode>
		<RecoilRoot>
			<Context>
				<Provider store={store}>
					<Router>
						<Routes>
							<Route path='/'>
								<Route index element={<App />} />
							</Route>
						</Routes>
					</Router>
				</Provider>
			</Context>
		</RecoilRoot>
	</React.StrictMode>,
	document.getElementById('root')
);
