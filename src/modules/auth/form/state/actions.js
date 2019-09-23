import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS,
	SAVE_FAILED,
	SAVE_SUCCESS
} from './types';
import axios from 'axios';

export const logout = token => {
	return dispatch => {
		console.log(token);
		const AuthStr = 'Bearer '.concat(token);
		axios
			.post(
				'https://aiesec-asu-im-api.herokuapp.com/api/Account/Logout',
				null,
				{
					headers: { Authorization: AuthStr }
				}
			)
			.then(response => {
				dispatch(logoutAction());
			})
			.catch(err => {
				dispatch(logoutFailure(err));
				console.log(err);
			});
	};
};
export const save = (userData, token) => {
	return dispatch => {
		const AuthStr = 'Bearer '.concat(token);
		axios
			.get('https://aiesec-asu-im-api.herokuapp.com/api/Account', {
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
				axios
					.all([
						axios.put(
							'https://aiesec-asu-im-api.herokuapp.com/api/Account/Update',
							user,
							{
								headers: { Authorization: AuthStr }
							}
						),
						axios.put(
							'https://aiesec-asu-im-api.herokuapp.com/api/Account/ChangePassword',
							{
								oldPassword: userData.oldPassword,
								newPassword: userData.password
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
						console.log(err);
						dispatch(dataSavedFailed);
					});
			})
			.catch(err => {
				console.log(err);
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
