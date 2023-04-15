
export function passwordMatchWarning(passwordString1: string, passwordString2: string) {
	const passwordElement = document.getElementById('match-password');
  const submitButton = document.getElementById('submission-button')
	if (passwordString1 === passwordString2) {
		passwordElement?.setAttribute('style', 'visibility: hidden');
    submitButton?.removeAttribute('disabled')
	} else {
		passwordElement?.setAttribute('style', 'visibility: visible');
    submitButton?.setAttribute('disabled','')
	}
}

const bcrypt = require('bcrypt')
export function hashPass(password: string) {

  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
}
