import { REGISTER_FAILURE, REGISTER_PENDING, REGISTER_SUCCESS } from './types';
const registerInitalState = {
	data: {},
	error: 0,
	registerPending: false
};
const registerReducer = (state = registerInitalState, action) => {
	switch (action.type) {
		case REGISTER_PENDING:
			return {
				...state,
				registerPending: true
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				registerPending: false
			};
		case REGISTER_FAILURE:
			return {
				...state,
				registerPending: false,
				error: action.error
			};
		default:
			return state;
	}
};
export const registerReducers = { registerReducer };
