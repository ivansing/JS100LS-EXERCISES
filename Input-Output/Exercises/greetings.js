const rlSync = require('readline-sync');


 let name = rlSync.question("What's your name?\n");
console.log(`Good morning ${name}`)

// alert name to browser
 let alertName = prompt("What's your name");
console.log(`Good day ${alertName}`)  // shows error as prompt not defined whithing node

let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));
let sum = number1 + number2;

console.log(`The numbers ${number1} plus the number ${number2} add to ${sum}`);

let name2 = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name2}`);
console.log(`Good Afternoon, ${name2}`);
console.log(`Good Evening, ${name2}`);

let age = rlSync.question("How old are you?");
age = parseInt(age);
console.log(`You are ${age} years old`)
age = age + 10;
console.log(`In 10 years, you will be ${age}`)
age = age + 10;
console.log(`In 20 years, you will be ${age}`)
age = age + 10;
console.log(`In 30 years, you will be ${age}`)
age = age + 10;
console.log(`In 40 years, you will be ${age}`)

let add = (a, b) => a + b;
let getNumber = (text) => {
  let input = rlSync.question(text);
  return Number(input)
}

let number3 = getNumber("Enter a number: ");
let number4 = getNumber("Enter another number: ");
console.log(add(getNumber(number3, number4))); 



