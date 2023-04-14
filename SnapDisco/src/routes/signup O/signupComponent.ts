

function getEmail(fn:() => string) {

return document.getElementsByName("email").values
}
export const newUserEmail = getEmail;


let passwordSelector = document.getElementsByName("password")
export const newUserPassword = passwordSelector;