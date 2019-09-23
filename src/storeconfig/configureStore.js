import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
export default function configureStore(initialState = {}) {
	const rootReducer = combineReducers({
		login: reducers['loginReducer'],
		register: reducers['registerReducer'],
		partialRegister: reducers['partialRegisterReducer']
	});
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
