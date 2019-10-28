import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../global/functions/validation';
const PrivateRoute = ({ component: Component, ...props }) => {
	return (
		<Route
			{...props}
			render={innerProps =>
				isLoggedIn() ? (
					<Component {...innerProps} />
				) : (
					<Redirect to={{ pathname: '/', state: { from: props.location } }} />
				)
			}
		/>
	);
};
export default PrivateRoute;
