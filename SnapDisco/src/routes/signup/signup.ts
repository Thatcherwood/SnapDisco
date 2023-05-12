import { genSaltSync, hashSync } from 'bcrypt-ts';

import passwordValidator from 'password-validator';

export function hashPassword(password: string) {
	//TODO make async
	try {
		const salt = genSaltSync(10);
		const hash = hashSync(password, salt);
		if (typeof hash !== 'undefined') {
			return hash;
		} else {
		}
	} catch (err) {
		console.log(err + 'salt hash error');
		return 's';
	}
}

export function passwordVerification(passwordString1: string, passwordString2: string) {
	const passwordRestrictions = new passwordValidator();
	passwordRestrictions
		.is()
		.min(8)
		.is()
		.max(60)
		.has()
		.uppercase()
		.has()
		.lowercase()
		.has()
		.digits(2)
		.has()
		.not()
		.spaces()
		.has()
		.symbols(2);
	const passwordElement = document.getElementById('password-notification');
	const submitButton = document.getElementById('btn');
	if (
		passwordString1 === passwordString2 &&
		passwordRestrictions.validate(passwordString1) === true
	) {
		passwordElement?.setAttribute('style', 'visibility: hidden');
		submitButton?.removeAttribute('disabled');
	} else {
		passwordElement?.setAttribute('style', 'visibility: visible');
		submitButton?.setAttribute('disabled', '');
	}
}
