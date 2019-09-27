import {
	GET_ALL_ENABLERS_SUCCESS,
	GET_ALL_ENABLERS_PENDING,
	GET_ALL_ENABLERS_FAILED
} from '../../../../global/types/dashboardTypes';
const enablersStatus = {
	allEnablers: [],
	pending: false,
	success: false,
	failed: false
};

const getAllEnablersReducer = (state = enablersStatus, action) => {
	switch (action.type) {
		case GET_ALL_ENABLERS_PENDING:
			return {
				...state,
				pending: true
			};
		case GET_ALL_ENABLERS_SUCCESS:
			return {
				...state,
				allEnablers: action.enablers,
				success: true
			};
		case GET_ALL_ENABLERS_FAILED:
			return {
				...state,
				failed: true
			};
		default:
			return state;
	}
};

export const dashboardReducers = { getAllEnablersReducer };
