const readline = require("readline-sync");

// 1.
const years = [10, 20, 30, 40];
let age = readline.question("How old are you?");
age = parseInt(age);

console.log(`You are ${age} years old?`);
for (let i = 0; i < years.length; i++) {
  age = age + 10;
  console.log(`In ${years[i]} years, you will be ${age}`);
}

// 2.
const factorialNumber = (num) => {
  if (num > 0) {
    for (let i = num - 1; i >= 1; i--) {
      num = num * i;
    }
    return num;
  } else {
    return "Enter a positive integer";
  }
};
console.log(factorialNumber(-8));


// 5.
/**
 * The following code uses a randomNumberBetween function to generate 
 * a number between its first and second arguments. It uses a while loop 
 * to try to generate a number greater than 2. Refactor the code so that you 
 * don't need to call randomNumberBetween from two different locations, lines 
 * 6 and 10. Do not change the arguments you pass to randomNumberBetween.
 *
 */

function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let tries = 0;
let result;
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

let result2;

do {
  result2 = randomNumberBetween(1, 6);
} while (result2 <= 2);

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');

// 6.

const recursionFactorial = num => {
  if (num < 0) return -1;

  else if (num == 0) return 1;

  else {
    return (num * recursionFactorial(num - 1))
  }
  /* 
        First Part of the recursion method
        You need to remember that you won’t have just one call, you’ll have several nested calls
        
        Each call: num === "?"        	         num * factorialize(num - 1)
        1st call – factorialize(5) will return    5  * factorialize(5 - 1) // factorialize(4)
        2nd call – factorialize(4) will return    4  * factorialize(4 - 1) // factorialize(3)
        3rd call – factorialize(3) will return    3  * factorialize(3 - 1) // factorialize(2)
        4th call – factorialize(2) will return    2  * factorialize(2 - 1) // factorialize(1)
        5th call – factorialize(1) will return    1  * factorialize(1 - 1) // factorialize(0)
        
        Second part of the recursion method
        The method hits the if condition, it returns 1 which num will multiply itself with
        The function will exit with the total value
        
        5th call will return (5 * (5 - 1))     // num = 5 * 4
        4th call will return (20 * (4 - 1))    // num = 20 * 3
        3rd call will return (60 * (3 - 1))    // num = 60 * 2
        2nd call will return (120 * (2 - 1))   // num = 120 * 1
        1st call will return (120)             // num = 120
        
        If we sum up all the calls in one line, we have
        (5 * (5 - 1) * (4 - 1) * (3 - 1) * (2 - 1)) = 5 * 4 * 3 * 2 * 1 = 120
        */
}

console.log(recursionFactorial(5));
