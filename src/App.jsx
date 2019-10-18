import React from 'react';
import './App.scss';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import PartialRegister from './modules/auth/partialRegister/PartialRegister.jsx';
import Login from './modules/auth/login/Login';
import CompleteRegisteration from './modules/auth/completeRegisteration/CompleteRegisteration';
import Dashboard from './modules/enablers/dashboard/Dashboard'
import EnablerProfile from './modules/enablers/enablerProfile/EnablerProfile'
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
				<Route
					path='/dashboard'
					component={Dashboard}
				/>
				<Route
					path='/enablerprofile/:id'
					component={EnablerProfile}
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
