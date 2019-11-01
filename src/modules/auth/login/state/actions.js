import {
	LOGIN_FAILURE,
	LOGIN_SUCCESS
} from '../../../../global/types/loginTypes';
import axios from 'axios';
import { URL } from './../../../../global/API_URL';
import LocalStorageService from "../../../../global/functions/LocalStorageService";
import { LOGIN_PENDING } from './../../../../global/types/loginTypes';

const localStorageService = LocalStorageService.getService();

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
