import { loginReducers } from '../modules/auth/Home/state/reducer';
import { registerReducers } from './../modules/auth/register/state/reducers';
import { partialRegisterReducers } from './../modules/auth/form/state/reducer';
export const reducers = {
	...loginReducers,
	...registerReducers,
	...partialRegisterReducers
};
