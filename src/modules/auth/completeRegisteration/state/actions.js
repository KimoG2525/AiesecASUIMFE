import { SAVE_FAILED, SAVE_SUCCESS } from '../../../../global/types/saveTypes';
import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS
} from '../../../../global/types/logoutTypes';
import axios from 'axios';
import LocalStorageService from '../../../../global/functions/LocalStorageService';

const localStorageService = LocalStorageService.getService();

export const logout = () => {
	return dispatch => {
		// This is the Authorization for back-end
		axios
			.post('/Account/Logout')
			.then(response => {
				// clearing the cached token when logging out and dispatching the action to the store
				localStorageService.setAccessToken('');
				dispatch(logoutAction());
			})
			.catch(err => {
				dispatch(logoutFailure(err));
			});
	};
};
export const save = userData => {
	return dispatch => {
		axios
			.get('/Account')
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
						axios.put('/Account/Update', user),
						axios.put('/Account/ChangePassword', {
							oldPassword: userData.oldPassword,
							newPassword: userData.newPassword
						})
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
