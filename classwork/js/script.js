// let user = prompt("Chocolate provider?", "").toLowerCase();
// if(user === "roshen"){
//     alert("Give me my money ($1000000)");
// } else if (user === "avk"){
//     alert("Go away!");
// } else {
//     let userChoice = confirm("Plastic bag?");
//     alert(userChoice ? "Take you plastic bag" : "Good luck");
// }

// let user = String(prompt("Chokolate provider", "")).toLowerCase();
//
// switch (user) {
//     case "roshen":
//         alert("Give me my money ($1000000)");
//         break;
//     case "avk":
//         alert("Go away!");
//         break;
//     default:
//         alert(confirm("Plastic bag?") ? "Take you plastic bag" : "Good luck");
// }

// let firstNumber = Number(prompt("Enter first number", ""));
// let secondNumber = Number(prompt("Enter second number", ""));
//
// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     alert("YankeeS go home!")
// } else {
//     let operationName = prompt("Enter operation name","").toLowerCase();
//
//     switch (operationName) {
//         case "+":
//         case "plus":
//             alert(`${firstNumber + secondNumber}`);
//             break;
//         case "-":
//         case "minus":
//             alert(`${firstNumber - secondNumber}`);
//             break;
//         case "*":
//         case "multiply":
//             alert(`${firstNumber * secondNumber}`);
//             break;
//         case "/":
//         case "devide":
//             alert(`${firstNumber / secondNumber}`);
//             break;
//     }
// }

let number = Number(prompt("Give me some number", ""));
for(let i = 0; i < 32; i++){
    console.log(number**i);
}