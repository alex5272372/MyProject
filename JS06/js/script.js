function askString(message, str = '') {
    while (!str.length)
        str = prompt(`Input ${message}`, '');
    return str;
}

function createNewUser() {
    let userObject = {
        firstName: '',
        lastName: '',
        getLogin: function() {return (this.firstName[0] + this.lastName).toLowerCase()}
    };

    /*Object.defineProperty(userObject, 'firstName', {
        set: function(newValue) {this.firstName = newValue;}
    });
    Object.defineProperty(userObject, 'lastName', {
        set: function(newValue) {this.lastName = newValue;}
    });*/

    userObject.firstName = askString('first name');
    userObject.lastName = askString('last name');
    return userObject;
}

let userObject = createNewUser();
console.log('User:', userObject);
console.log('Login:', userObject.getLogin());