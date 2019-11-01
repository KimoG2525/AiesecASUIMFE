import {
	GET_ALL_ENABLERS_SUCCESS,
	GET_ALL_ENABLERS_PENDING,
	GET_ALL_ENABLERS_FAILED
} from '../../../../global/types/dashboardTypes';
import axios from 'axios';
export const getAllEnablers = pageNum => {
	return dispatch => {
		dispatch(getAllEnablersPending());
		axios
			.get('/Enabler/GetAllEnablers?pageIndex=0&perPage=50')
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
