import { loginReducers } from '../modules/auth/Home/state/reducer';
import { registerReducers } from './../modules/auth/register/state/reducers';
export const reducers = { ...loginReducers, ...registerReducers };
