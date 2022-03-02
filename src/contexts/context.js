import React, { createContext, useReducer } from 'react';
import reducer from './reducer';
const initialState = {
	count: 0,
};

export const CountContext = createContext();
function Context({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState);
	return <CountContext.Provider value={{ state, dispatch }}>{children}</CountContext.Provider>;
}

export default Context;
