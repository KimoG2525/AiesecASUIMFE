import axios from 'axios';

import {
	INSERT_ENABLER_FAILED,
	INSERT_ENABLER_PENDING,
	INSERT_ENABLER_SUCCEEDED
} from './../../../../global/types/addEnablerTypes';

export const insertEnabler = enabler => {
	return dispatch => {
		dispatch(insertEnablerPending());
		axios
			.post('/Enabler/InsertEnabler', enabler)
			.then(response => {
				dispatch(insertEnablerSucceeded(response.data));
			})
			.catch(err => {
				dispatch(insertEnablerFailed(err));
			});
	};
};
const insertEnablerPending = () => {
	return {
		type: INSERT_ENABLER_PENDING
	};
};

const insertEnablerSucceeded = data => {
	return {
		type: INSERT_ENABLER_SUCCEEDED,
		data
	};
};
const insertEnablerFailed = err => {
	return {
		type: INSERT_ENABLER_FAILED,
		err
	};
};
