import {
	GET_ENABLER_SUCCEDED,
	GET_ENABLER_FAILED,
	GET_ENABLER_PENDING
} from '../../../../global/types/enablerProfileTypes';
import axios from 'axios';
export const getEnabler = id => {
	return dispatch => {
		dispatch(enablerPending());
		axios
			.get(`/Enabler/GetEnabler?id=${id}`)
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
