import { loginReducers } from '../modules/auth/login/state/reducers';
import { enablerProfileReducers } from './../modules/enablers/enablerProfile/state/reducers';
import { dashboardReducers } from './../modules/enablers/dashboard/state/reducers';
import { partialRegisterReducers } from './../modules/auth/partialRegister/state/reducers';
import { completeRegistrationReducers } from './../modules/auth/completeRegisteration/state/reducers';
import { insertEnablerReducers } from './../modules/enablers/addEnabler/state/reducers';
export const reducers = {
	...loginReducers,
	...completeRegistrationReducers,
	...partialRegisterReducers,
	...enablerProfileReducers,
	...dashboardReducers,
	...insertEnablerReducers
};
