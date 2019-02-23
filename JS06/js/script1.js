function askString(message, str = '') {
    while (!str.length)
        str = prompt(`Input ${message}`, '');
    return str;
}

function User(_firstName, _lastName) {
	let firstName = _firstName;
	let lastName = _lastName;
	
	this.setFirstName = function(newFirstName) {
		firstName = newFirstName;
	}
	this.setLastName = function(newLastName) {
		lastName = newLastName;
	}
	this.getLogin = function() {return (firstName[0] + lastName).toLowerCase()}
}

function createNewUser() {
    return new User(askString('first name'), askString('last name'));
}

let userObject = createNewUser();
console.log('User:', userObject);
console.log('Login:', userObject.getLogin());