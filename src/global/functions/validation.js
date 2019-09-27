// change validation to use email checker then add our domain checker
import { validate } from 'email-validator';
export const validateEmail = email => {
	if (validate(email) && email.split('@')[1].toLowerCase() === 'aiesec.net') {
		return true;
	}
	return false;
};
export const validatePassword = password => {
	if (password === undefined || password.length < 8) {
		return false;
	}
	return true;
};
const checkAllInputsEqualValue = (userData, value) => {
	for (let i = 0; i < value.length; i++)
		if (
			userData.firstName === value[i] ||
			userData.lastName === value[i] ||
			userData.mobileNumber === value[i] ||
			userData.nickName === value[i] ||
			userData.oldPassword === value[i] ||
			userData.newPassword === value[i] ||
			userData.repeatedPassword === value[i]
		) {
			return true;
		}
	return false;
};
// check library for number
export const validateUser = userData => {
	if (checkAllInputsEqualValue(userData, [null, undefined, ''])) return false;
	if (
		userData.mobileNumber.length === 13 &&
		userData.newPassword === userData.repeatedPassword &&
		userData.oldPassword !== userData.newPassword &&
		userData.oldPassword.length >= 8
	) {
		return true;
	}
	return false;
};
