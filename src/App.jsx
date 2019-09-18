import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './modules/auth/register/Register.jsx';
import Home from './modules/auth/Home/Home';
import Form from './modules/auth/form/Form';
const App = () => {
	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={Home} />
				<Route path='/register' component={Register} />
				<Route path='/form' component={Form} />
			</div>
		</Router>
	);
};

export default App;
