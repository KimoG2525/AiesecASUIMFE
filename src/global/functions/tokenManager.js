// TO BE DELETED , REPLACED BY AXIOSINTERCEPTOR
import axios from 'axios';
import { URL } from './../API_URL';
export const setToken = token => {
	localStorage.setItem('token', token);
};
export const getToken = () => {
	return localStorage.getItem('token') || '';
};
export const setTokenExpiryDate = date => {
	const newDateObj = new Date(Date.now() + date * 60000);
	localStorage.setItem('tokenExpiryDate', newDateObj);
};
export const getTokenExpiryDate = () => {
	return localStorage.getItem('tokenExpiryDate');
};
export const clearToken = () => {
	localStorage.clear();
};
// not completed or tested yet
export const refreshToken = () => {
	const AuthStr = 'Bearer '.concat(getToken());
	axios
		.post('/Account/RefreshToken')
		.then(response => {
			setToken(response.data.token);
			setTokenExpiryDate(response.data.expiresIn);
			return true;
		})
		.catch(err => {
			return false;
		});
};
// not completed or tested yet
export const checkTokenExpirationMiddleware = store => next => action => {
	if (getToken().length) {
		if (getTokenExpiryDate().getTime() === Date.now() - 120000) {
			next(action);
			refreshToken();
		}
	}
	next(action);
};
