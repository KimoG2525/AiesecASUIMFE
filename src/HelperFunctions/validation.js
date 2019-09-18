export const validateEmail = email => {
	if (
		email.length === 0 ||
		(email !== undefined &&
			email.includes('@') &&
			email.split('@')[1].toLowerCase() !== 'aiesec.net')
	) {
		return false;
	}
	return true;
};
export const validatePassword = password => {
	console.log('hello pass');
	if (password === undefined || password.length < 8) {
		return false;
	}
	return true;
};
export const validateUser = userData => {
	if (
		userData.firstName !== '' &&
		userData.lastName !== '' &&
		userData.mobileNumber.length === 11 &&
		userData.nickName !== '' &&
		userData.password.lenght >= 8
	) {
		return true;
	}
	return false;
};
