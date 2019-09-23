import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS } from './types';

import axios from 'axios';

export const login = user => {
	return dispatch => {
		dispatch(loginPending);
		axios
			.post('https://aiesec-asu-im-api.herokuapp.com/api/Account/Token', user)
			.then(response => {
				dispatch(loginSuccess(response.data));
			})
			.catch(e => {
				dispatch(loginFailure(e));
			});
	};
};

const loginPending = () => {
	return {
		type: LOGIN_PENDING
	};
};

const loginSuccess = data => {
	return {
		type: LOGIN_SUCCESS,
		data
	};
};

const loginFailure = error => {
	console.log(error);

	return {
		type: LOGIN_FAILURE,
		error
	};
};
