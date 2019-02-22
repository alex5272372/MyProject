function askString(message, str = '') {
    while (!str.length)
        str = prompt(`Input ${message}`, '');
    return str;
}

function createNewUser() {
    let userObject = {
        __proto__: null,
        getLogin: function() {return (this.firstName[0] + this.lastName).toLowerCase()}
    };

    Object.defineProperty(userObject, 'firstName', {configurable: true});
    Object.defineProperty(userObject, 'lastName', {configurable: true});

    Object.defineProperty(userObject, 'setFirstName', {
        set: function(newValue) {
            Object.defineProperty(this, 'firstName', {writable: true});
            this.firstName = newValue;
            Object.defineProperty(this, 'firstName', {writable: false});
        }
    });
    Object.defineProperty(userObject, 'setLastName', {
        set: function(newValue) {
            Object.defineProperty(this, 'lastName', {writable: true});
            this.lastName = newValue;
            Object.defineProperty(this, 'lastName', {writable: false});
        }
    });

    userObject.setFirstName = askString('first name');
    userObject.setLastName = askString('last name');
    return userObject;
}

let userObject = createNewUser();
console.log('User:', userObject);
console.log('Login:', userObject.getLogin());