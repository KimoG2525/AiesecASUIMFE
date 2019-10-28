import {
	REGISTER_FAILURE,
	REGISTER_PENDING,
	REGISTER_SUCCESS
} from '../../../../global/types/registerTypes';
import { URL } from '../../../../global/API_URL';
import axios from 'axios';
import { getToken } from '../../../../global/functions/tokenManager';
export const register = user => {
	return dispatch => {
		dispatch(registerPending());
		const AuthStr = 'Bearer '.concat(getToken());
		axios
			.post(URL + '/Account/PartialRegister', user, {
				headers: { Authorization: AuthStr }
			})
			.then(response => {
				dispatch(registerSuccess());
			})
			.catch(function(error) {
				dispatch(registerFailure(error.response.status));
			});
	};
};
export const registerPending = () => {
	return {
		type: REGISTER_PENDING
	};
};
export const registerSuccess = () => {
	return {
		type: REGISTER_SUCCESS
	};
};
export const registerFailure = error => {
	return {
		type: REGISTER_FAILURE,
		error
	};
};
