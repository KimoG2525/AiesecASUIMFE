import {
	GET_ENABLER_SUCCEDED,
	GET_ENABLER_FAILED,
	GET_ENABLER_PENDING
} from '../../../../global/types/enablerProfileTypes';
import { URL } from '../../../../global/API_URL';
import axios from 'axios';
export const getEnabler = (id, token) => {
	return dispatch => {
		dispatch(enablerPending());
		const AuthStr = 'Bearer '.concat(token);
		axios
			.get(URL + '/Enabler/GetEnabler', id, {
				headers: { Authorization: AuthStr }
			})
			.then(response => {
				dispatch(recievedEnablerSuccess(response.data));
			})
			.catch(err => {
				dispatch(recievedEnablerFailed(err));
			});
	};
};
const enablerPending = () => {
	return {
		type: GET_ENABLER_PENDING
	};
};
const recievedEnablerSuccess = enabler => {
	return {
		type: GET_ENABLER_SUCCEDED,
		enabler
	};
};
const recievedEnablerFailed = error => {
	return {
		type: GET_ENABLER_FAILED,
		error
	};
};
