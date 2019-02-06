let name = prompt("Enter your name", "");
while(name === ""){
    name = prompt("Enter correct name", "");
}
if(name != null){
    let age = prompt("Enter your age", "");
    while(isNaN(age) || age.length === 0){
        age = prompt("Enter correct age", age);
    }
    if(age != null){
        let welcome;
        if(age < 18){
            welcome = false;
        } else if(age > 22){
            welcome = true;
        } else {
            welcome = confirm("Are you sure you want to continue?");
        }
        if(welcome){
            alert("Welcome, " + name);
        } else {
            alert("You are not allowed to visit this website.");
        }
    }
}