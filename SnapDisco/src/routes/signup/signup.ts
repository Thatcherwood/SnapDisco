import { genSaltSync, hashSync } from 'bcrypt-ts';

export function hashPassword(password: string) {
	//TODO make async
	try {
		const salt = genSaltSync(10);
		const hash = hashSync(password, salt);
    if (typeof hash !== "undefined") {
		return hash;
    }
    else {}
	} catch (err) {
		console.log(err + 'salt hash error');
    return "s"
	}
}

export function passwordMatchWarning(passwordString1: string, passwordString2: string) {
	const passwordElement = document.getElementById('match-password');
	const submitButton = document.getElementById('submission-button');
	if (passwordString1 === passwordString2) {
		passwordElement?.setAttribute('style', 'visibility: hidden');
		submitButton?.removeAttribute('disabled');
	} else {
		passwordElement?.setAttribute('style', 'visibility: visible');
		submitButton?.setAttribute('disabled', '');
	}
}

