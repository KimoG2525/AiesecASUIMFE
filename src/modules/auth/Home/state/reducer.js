import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS } from './types';
import { LOGOUT_SUCCESS } from './../../form/state/types';
const userSession = {
	token: '',
	expiresIn: 0,
	hasCompletedRegisteration: false,
	loadingLogin: false,
	loginSuccess: false,
	loginFailed: false
};

const loginReducer = (state = userSession, action) => {
	switch (action.type) {
		case LOGIN_PENDING:
			return {
				...state,
				loadingLogin: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.data.token,
				expiresIn: action.data.expiresIn,
				hasCompletedRegisteration: action.data.hasCompletedRegisteration,
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
				token: '',
				expiresIn: 0,
				hasCompletedRegisteration: false,
				loginSuccess: false
			};
		default:
			return state;
	}
};

export const loginReducers = { loginReducer };
