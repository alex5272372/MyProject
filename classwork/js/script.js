function User(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

function Client(firstName, lastName, budget) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.budget = (value) => {
        if(arguments.length) budget = value;
            else return budget;
    }
}

const client1 = new Client('Gogi', 'Doe', 100500);
console.log(client1.budget());

function sum() {
    return [].reduce.call(arguments, function(acc, item) {
        return acc + item;
    });
}