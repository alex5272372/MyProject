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
		Object.defineProperty(userObject, name, {
		    value: askString(name),
            configurable: true
		});

		userObject['set' + name[0].toUpperCase() + name.substr(1)] = function (newValue) {
			Object.defineProperty(this, name, {writable: true});
			this[name] = newValue;
			Object.defineProperty(this, name, {writable: false});
		};
		
		/*Object.defineProperty(userObject, 'set' + name[0].toUpperCase() + name.substr(1), {
			set: function(newValue) {
			    Object.defineProperty(this, name, {writable: true});
			    this[name] = newValue;
                Object.defineProperty(this, name, {writable: false});
			}
		});*/
	}
	defineMyProperty('firstName');
	defineMyProperty('lastName');
    return userObject;
}

let userObject = createNewUser();

//userObject.setFirstName(askString('new first name'));
//userObject.setLastName(askString('new last name'));

console.log('User:', userObject);
console.log('Login:', userObject.getLogin());

// Test for read-only
userObject.firstName = 'gogi';
userObject.lastName = 'gogi';