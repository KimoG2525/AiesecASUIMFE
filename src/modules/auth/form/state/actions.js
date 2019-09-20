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
export const save = (userData,token) => {
	console.log(token)
	return dispatch => {
		let email ='';
	axios.get('https://aiesec-asu-im-api.herokuapp.com/api/Account')
	.then( response => {
			//email=response.data.email
			console.log(response)
	})
	.catch(err => {
		console.log("Getting Data Error")
	})

	const user = {
		email:email ,
		firstName:userData.firstName,
		lastName:userData.lastName,
		nickName:userData.nickName,
		mobileNumber:userData.mobileNumber,
		birthDate:userData.birthDate
	}
	axios.put('https://aiesec-asu-im-api.herokuapp.com/api/Account/Update' , user)
	.then( response => {
			console.log('updated successfully')
			axios.put('https://aiesec-asu-im-api.herokuapp.com/api/Account/ChangePassword' , 
			{
				oldPassword:userData.oldPassword,
				newPassword:userData.newPassword
			}).then( response =>
				{
					console.log('Password updated successfully')
				}
			).catch(err => {
				console.log(err)
			})
	})
	.catch(err => {
		console.log(err)
	})



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
