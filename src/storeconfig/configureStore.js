import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
export default function configureStore(initialState = {}) {
	const rootReducer = combineReducers({
		login: reducers['loginReducer'],
		register: reducers['completeRegisterationReducer'],
		partialRegister: reducers['partialRegisterReducer'],
		enablerProfile: reducers['getEnablerReducer'],
		dashboard: reducers['getAllEnablersReducer']
	});
	return createStore(
		rootReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
}
