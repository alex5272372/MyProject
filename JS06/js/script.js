function askString(message, str = '') {
    while (!str.length)
        str = prompt(`Input ${message}`, '');
    return str;
}

function createNewUser() {
    let userObject = {
        getLogin: function() {return (this.setFirstName[0] + this.setLastName).toLowerCase()}
    };
    Object.defineProperty(userObject, 'firstName', {
        set: function setFirstName(firstName) {this.firstName = firstName}
    });
    Object.defineProperty(userObject, 'lastName', {
        set: function setLastName(lastName) {this.lastName = lastName}
    });

    userObject.setFirstName = askString('first name');
    userObject.setLastName = askString('last name');
    return userObject;
}

userObject = createNewUser();
console.log('User:', userObject);
console.log('Login:', userObject.getLogin());