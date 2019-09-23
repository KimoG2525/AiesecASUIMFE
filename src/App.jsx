import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Register from './modules/auth/register/Register.jsx';
import Home from './modules/auth/Home/Home';
import Form from './modules/auth/form/Form';
import { connect } from 'react-redux';
const App = props => {
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
const mapStateToProps = state => {
	return {
		token: state.login.token
	};
};
export default connect(mapStateToProps)(App);
