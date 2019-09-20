import { LOGIN_FAILURE, LOGIN_PENDING, LOGIN_SUCCESS } from './types';
import { LOGOUT_SUCCESS } from './../../form/state/types';
const userSession = {
	token: '',
	expiresIn: 0,
	hasCompletedRegisteration: false,
	loadingLogin: false,
	loginFailed: false
};

const loginReducer = (state = userSession, action) => {
	console.log(action.data)
	switch (action.type) {
		case LOGIN_PENDING:
			return {
				...state,
				loadingLogin: true
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				loadingLogin: false,
				token: action.token,
				loginFailed: false,
				expiresIn: action.expiresIn,
				hasCompletedRegisteration: action.hasCompletedRegisteration
			};
		case LOGIN_FAILURE:
			return {
				...state,
				loadingLogin: false,
				loginFailed: true
			};
		case LOGOUT_SUCCESS:
			return {};

		default:
			return state;
	}
};

export const loginReducers = { loginReducer };
