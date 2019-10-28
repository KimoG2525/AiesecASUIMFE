import {
	LOGIN_FAILURE,
	LOGIN_SUCCESS,
	LOGIN_PENDING
} from '../../../../global/types/loginTypes';
import { LOGOUT_SUCCESS } from '../../../../global/types/logoutTypes';

const userSession = {
	hasCompletedRegisteration: false,
	userRole: '',
	loginSuccess: false,
	loginFailed: false
};

const loginReducer = (state = userSession, action) => {
	switch (action.type) {
		case LOGIN_PENDING:
			return {
				...state,
				loginFailed: false,
				loginSuccess: false
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				hasCompletedRegisteration: action.data.hasCompletedRegisteration,
				userRole: action.data.userRole,
				loadingLogin: false,
				loginSuccess: true,
				loginFailed: false
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loadingLogin: false,
				loginFailed: true
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				hasCompletedRegisteration: false,
				loginSuccess: false
			};
		default:
			return state;
	}
};

export const loginReducers = { loginReducer };
