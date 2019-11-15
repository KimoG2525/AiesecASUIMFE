import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import conifgureStore from './storeconfig/configureStore';
import * as serviceWorker from './serviceWorker';

const storeConfig = conifgureStore();
ReactDOM.render(
	<Provider store={storeConfig.store}>
		<PersistGate loading={null} persistor={storeConfig.persistor}>
			<App />
		</PersistGate>
	</Provider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
