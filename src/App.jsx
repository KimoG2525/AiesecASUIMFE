import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PartialRegister from './modules/auth/partialRegister/PartialRegister.jsx';
import Login from './modules/auth/login/Login';
import CompleteRegisteration from './modules/auth/completeRegisteration/CompleteRegisteration';
import { connect } from 'react-redux';
const App = props => {
	return (
		<Router>
			<div className='App'>
				<Route exact path='/' component={Login} />
				<Route path='/partialregister' component={PartialRegister} />
				<Route
					path='/completeregisteration'
					component={CompleteRegisteration}
				/>
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
