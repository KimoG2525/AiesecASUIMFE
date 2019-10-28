import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../global/functions/validation';
const PublicRoute = ({ component: Component, ...props }) => {
	return (
		<Route
			{...props}
			render={innerProps =>
				!isLoggedIn() ? (
					<Component {...innerProps} />
				) : (
					<Redirect to={'/dashboard'} />
				)
			}
		/>
	);
};
export default PublicRoute;
