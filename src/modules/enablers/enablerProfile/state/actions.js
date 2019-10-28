import {
	GET_ENABLER_SUCCEDED,
	GET_ENABLER_FAILED,
	GET_ENABLER_PENDING
} from '../../../../global/types/enablerProfileTypes';
import { URL } from '../../../../global/API_URL';
import axios from 'axios';
import { getToken } from '../../../../global/functions/tokenManager';
export const getEnabler = id => {
	return dispatch => {
		dispatch(enablerPending());
		const AuthStr = 'Bearer '.concat(getToken());
		axios
			.get(URL + `/Enabler/GetEnabler?id=${id}`,{
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
