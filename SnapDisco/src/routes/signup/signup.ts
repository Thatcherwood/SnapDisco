import { genSaltSync, hashSync } from 'bcrypt-ts';

export async function hashPass(password: string) { //TODO make async
try {
  const salt = await genSaltSync(10);
  const hash = hashSync(password, salt);
  return hash;
}
catch (err) {
  console.log(err + "salt hash error")
}
}

export function passwordMatchWarning(passwordString1: string, passwordString2: string) {
	const passwordElement = document.getElementById('match-password');
  const submitButton = document.getElementById('submission-button')
	if (passwordString1 === passwordString2) {
		passwordElement?.setAttribute('style', 'visibility: hidden');
    submitButton?.removeAttribute('disabled')
    return hashPass(passwordString1)
	} else {
		passwordElement?.setAttribute('style', 'visibility: visible');
    submitButton?.setAttribute('disabled','')
	}
}



