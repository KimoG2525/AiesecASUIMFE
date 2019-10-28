import {
	GET_ALL_ENABLERS_SUCCESS,
	GET_ALL_ENABLERS_PENDING,
	GET_ALL_ENABLERS_FAILED
} from '../../../../global/types/dashboardTypes';
import { URL } from '../../../../global/API_URL';
import axios from 'axios';
import { getToken } from '../../../../global/functions/tokenManager';
export const getAllEnablers = pageNum => {
	return dispatch => {
		dispatch(getAllEnablersPending());
		const AuthStr = 'Bearer '.concat(getToken());
		axios
			.get(URL + '/Enabler/GetAllEnablers?pageIndex=0&perPage=50', {
				headers: { Authorization: AuthStr }
			})
			.then(response => {
				dispatch(getAllEnablersSuccess(response.data));
			})
			.catch(err => {
				dispatch(getAllEnablersFailed(err));
			});
	};
};

const getAllEnablersPending = () => {
	return {
		type: GET_ALL_ENABLERS_PENDING
	};
};
const getAllEnablersSuccess = enablers => {
	return {
		type: GET_ALL_ENABLERS_SUCCESS,
		enablers
	};
};

const getAllEnablersFailed = err => {
	return {
		type: GET_ALL_ENABLERS_FAILED,
		err
	};
};
