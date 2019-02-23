'use strict';

function askString(message, str = '') {
    while (!str.length)
        str = prompt(`Input ${message}`, '');
    return str;
}

function createNewUser() {
    let userObject = {
        getLogin: function() {return (this.firstName[0] + this.lastName).toLowerCase()}
    };
	
	function defineMyProperty(name) {
		Object.defineProperty(userObject, name, {configurable: true});
		Object.defineProperty(userObject, 'set' + name[0].toUpperCase() + name.substr(1), {
			
			set: function(newValue) {
				Object.defineProperty(this, name, {writable: true});
				this[name] = newValue;
				Object.defineProperty(this, name, {writable: false});
			}
		});
	}
	
	defineMyProperty('firstName');
	defineMyProperty('lastName');
	
    userObject.setFirstName = askString('first name');
    userObject.setLastName = askString('last name');
    return userObject;
}

let userObject = createNewUser();
console.log('User:', userObject);
console.log('Login:', userObject.getLogin());

// Test for read-only
try
{
  userObject.firstName = 'gogi';
  console.log('Error: property is not read-only! :(');
}
catch(e)
{
  console.log('Ok: property is read-only :)');
}