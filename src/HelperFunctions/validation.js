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
	console.log(userData);
	if (
		userData.firstName !== '' &&
		userData.lastName !== '' &&
		userData.mobileNumber.length === 13 &&
		userData.nickName !== '' &&
		userData.password.length >= 8
	) {
		return true;
	}
	return false;
};
