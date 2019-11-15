import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducers } from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistConfig = {
	key: 'root',
	storage
};
export default function configureStore(initialState = {}) {
	const rootReducer = combineReducers({
		login: reducers['loginReducer'],
		register: reducers['completeRegisterationReducer'],
		partialRegister: reducers['partialRegisterReducer'],
		enablerProfile: reducers['getEnablerReducer'],
		dashboard: reducers['getAllEnablersReducer'],
		insertEnabler: reducers['insertEnablerReducer']
	});
	const persistedReducer = persistReducer(persistConfig, rootReducer);
	let store = createStore(
		persistedReducer,
		initialState,
		composeWithDevTools(applyMiddleware(thunk))
	);
	let persistor = persistStore(store);
	return { store, persistor };
}
