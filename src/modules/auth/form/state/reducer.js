import {
	LOGOUT_FAILED,
	LOGOUT_SUCCESS,
	SAVE_FAILED,
	SAVE_SUCCESS
} from './types';
import { LOGIN_SUCCESS } from '../../Home/state/types';
import { registerReducers } from './../../register/state/reducers';

const formStatus = {
	logoutSuccess: false,
	saveSuccess: false,
	logoutError: {},
	saveError: {}
};

const registerReducer = (state = formStatus, action) => {
	switch (action.type) {
		case SAVE_SUCCESS:
			return {
				...state,
				saveSuccess: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				logoutSuccess: true
			};
		case SAVE_FAILED:
			return {
				...state,
				saveSuccess: false,
				saveError: action.error
			};
		case LOGOUT_FAILED:
			return {
				...state,
				logoutSuccess: false,
				logoutError: action.error
			};
		default:
			return state;
	}
};
export const RegisterReducers = { registerReducer };
