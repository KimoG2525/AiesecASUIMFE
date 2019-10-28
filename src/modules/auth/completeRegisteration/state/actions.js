import { SAVE_FAILED, SAVE_SUCCESS } from '../../../../global/types/saveTypes';
import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS
} from '../../../../global/types/logoutTypes';
import axios from 'axios';
import { URL } from './../../../../global/API_URL';
import { getToken, setToken } from '../../../../global/functions/tokenManager';
export const logout = () => {
	return dispatch => {
		// This is the Authorization for back-end
		const AuthStr = 'Bearer '.concat(getToken());
		axios
			.post(URL + '/Account/Logout', null, {
				headers: { Authorization: AuthStr }
			})
			.then(response => {
				// clearing the cached token when logging out and dispatching the action to the store
				setToken('');
				dispatch(logoutAction());
			})
			.catch(err => {
				dispatch(logoutFailure(err));
			});
	};
};
export const save = userData => {
	return dispatch => {
		const AuthStr = 'Bearer '.concat(getToken());
		axios
			.get(URL + '/Account', {
				headers: { Authorization: AuthStr }
			})
			.then(response => {
				const user = {
					email: response.data.email,
					firstName: userData.firstName,
					lastName: userData.lastName,
					nickName: userData.nickName,
					mobileNumber: userData.mobileNumber,
					birthDate: userData.birthDate
				};
				// we are using axios.all here because we need to call multiple endpoints at same time for one result that is saving the data
				axios
					.all([
						axios.put(URL + '/Account/Update', user, {
							headers: { Authorization: AuthStr }
						}),
						axios.put(
							URL + '/Account/ChangePassword',
							{
								oldPassword: userData.oldPassword,
								newPassword: userData.newPassword
							},
							{
								headers: { Authorization: AuthStr }
							}
						)
					])
					.then(() => {
						dispatch(dataSaved);
					})
					.catch(err => {
						dispatch(dataSavedFailed);
					});
			})
			.catch(err => {
				dispatch(dataSavedFailed);
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
