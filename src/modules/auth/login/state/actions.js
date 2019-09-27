import {
	LOGIN_FAILURE,
	LOGIN_PENDING,
	LOGIN_SUCCESS
} from '../../../../global/types/loginTypes';
import axios from 'axios';
import { URL } from './../../../../global/API_URL';

export const login = user => {
	return dispatch => {
		dispatch(loginPending);
		axios
			.post(URL + '/Account/Token', user)
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
