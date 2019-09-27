import { SAVE_FAILED, SAVE_SUCCESS } from '../../../../global/types/saveTypes';
import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS
} from '../../../../global/types/logoutTypes';
const formStatus = {
	logoutSuccess: false,
	logoutFailed: false,
	saveSuccess: false,
	saveFailed: false
};

const completeRegisterationReducer = (state = formStatus, action) => {
	switch (action.type) {
		case SAVE_SUCCESS:
			return {
				...state,
				saveSuccess: true,
				saveFailed: false
			};
		case SAVE_FAILED:
			return {
				...state,
				saveSuccess: false,
				saveFailed: true
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				logoutSuccess: true,
				logoutFailed: false
			};
		case LOGOUT_FAILED:
			return {
				...state,
				logoutSuccess: false,
				logoutFailed: true
			};
		default:
			return state;
	}
};
export const completeRegistrationReducers = { completeRegisterationReducer };
