import {
	INSERT_ENABLER_FAILED,
	INSERT_ENABLER_PENDING,
	INSERT_ENABLER_SUCCEEDED
} from './../../../../global/types/addEnablerTypes';

const insertEnablerState = {
	insertEnablerSucceeded: false,
	inserEnablerFailed: false
};

const insertEnablerReducer = (state = insertEnablerState, action) => {
	switch (action.type) {
		case INSERT_ENABLER_PENDING:
			return {
				...state,
				insertEnablerSucceeded: false,
				inserEnablerFailed: false
			};
		case INSERT_ENABLER_SUCCEEDED:
			return {
				...state,
				insertEnablerSucceeded: true,
				inserEnablerFailed: false
			};
		case INSERT_ENABLER_FAILED:
			return {
				...state,
				insertEnablerSucceeded: false,
				inserEnablerFailed: true
			};
		default:
			return state;
	}
};

export const insertEnablerReducers = { insertEnablerReducer };
