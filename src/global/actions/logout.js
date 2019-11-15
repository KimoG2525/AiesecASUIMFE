import { LOGOUT_FAILED, LOGOUT_SUCCESS } from '../types/logoutTypes';
import axios from 'axios';
export const logout = token => {
	return dispatch => {
		axios
			.post('/Account/Logout')
			.then(response => {
				dispatch(logoutAction());
			})
			.catch(err => {
				dispatch(logoutFailure(err));
				console.log(err);
			});
	};
};
