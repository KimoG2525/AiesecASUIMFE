import {
	LOGIN_FAILURE,
	LOGIN_SUCCESS
} from '../../../../global/types/loginTypes';
import axios from 'axios';
import { LOGIN_PENDING } from './../../../../global/types/loginTypes';

export const login = user => {
	return dispatch => {
		dispatch(loginPending());
		axios
			.post('/Account/Token', user)
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
