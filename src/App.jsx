import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './modules/sideComponents/PrivateRoute';
import PartialRegister from './modules/auth/partialRegister/PartialRegister.jsx';
import Login from './modules/auth/login/Login';
import CompleteRegisteration from './modules/auth/completeRegisteration/CompleteRegisteration';
import Dashboard from './modules/enablers/dashboard/Dashboard'
import EnablerProfile from './modules/enablers/enablerProfile/EnablerProfile'
import AddEnabler from './modules/enablers/addEnabler/AddEnabler'
import PublicRoute from './modules/sideComponents/PublicRoute';
const App = props => {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<PublicRoute exact path='/' component={Login} />
					<PrivateRoute path='/partialregister' component={PartialRegister} />
					<PrivateRoute
						path='/completeregisteration'
						component={CompleteRegisteration}
					/>
					<PrivateRoute path='/dashboard' component={Dashboard} />
					<PrivateRoute path='/enablerprofile/:id' component={EnablerProfile} />
				</Switch>
			</div>
		</Router>
	);
};
export default App;
