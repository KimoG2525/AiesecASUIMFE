import {
	GET_ENABLER_SUCCEDED,
	GET_ENABLER_FAILED,
	GET_ENABLER_PENDING
} from '../../../../global/types/enablerProfileTypes';
const enablerState = {
	name: '',
	address: '',
	addressUrl: '',
	mobileNumber: '',
	telephoneNumber: '',
	emailAddress: '',
	websiteUrl: '',
	notes: '',
	companyResponsibleId: 0,
	getEnablerStatus: false,
	getEnablerPending: false
};

const getEnablerReducer = (state = enablerState, action) => {
	console.log(action.type)
	switch (action.type) {
		case GET_ENABLER_SUCCEDED:
			return {
			    ...state,
				enablerState:action.enabler,
				getEnablerStatus: true,
				getEnablerPending: false
			};
		case GET_ENABLER_FAILED:
			return {
				...state,
				getEnablerStatus: false,
				getEnablerPending: false
			};
		case GET_ENABLER_PENDING:
			return {
				...state,
				getEnablerPending: true
			};
		default:
			return state;
	}
};

export const enablerProfileReducers = { getEnablerReducer };
