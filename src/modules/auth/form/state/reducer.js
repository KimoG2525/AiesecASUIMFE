import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS,
	SAVE_FAILED,
	SAVE_SUCCESS
} from './types';

const formStatus = {
	logoutSuccess: false,
	logoutFailed: false,
	saveSuccess: false,
	saveFailed: false
};

const partialRegisterReducer = (state = formStatus, action) => {
	switch (action.type) {
		case SAVE_SUCCESS:
			return {
				...state,
				saveSuccess: true,
				saveFailed: false
			};
		case SAVE_FAILED:
			console.log('failedddd');
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
export const partialRegisterReducers = { partialRegisterReducer };
