import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS,
	SAVE_FAILED,
	SAVE_SUCCESS
} from './types';
import axios from 'axios';

export const logout = () => {
	return dispatch => {
		axios
			.post('https://aiesec-asu-im-api.herokuapp.com/api/Account/Logout')
			.then(response => {
				dispatch(logoutAction);
			})
			.catch(err => {
				dispatch(logoutFailure(err));
				console.log(err);
			});
	};
};
export const save = userData => {
	return dispatch => {
		axios
			.post(
				'https://aiesec-asu-im-api.herokuapp.com/api/Account/Register',
				userData
			)
			.then(response => {
				dispatch(dataSaved());
			})
			.catch(err => {
				dispatch(dataSavedFailed(err));
			});
	};
};
const dataSaved = () => {
	return {
		type: SAVE_SUCCESS
	};
};
const dataSavedFailed = err => {
	return {
		type: SAVE_FAILED,
		error: err
	};
};
const logoutAction = () => {
	return {
		type: LOGOUT_SUCCESS
	};
};
const logoutFailure = err => {
	return {
		type: LOGOUT_FAILED,
		error: err
	};
};
