// 1.
console.log('Ivan ' + 'Duarte')

// 2.
let number = 4936;
let ones = number % 10;
console.log(ones)
number = (number - ones) / 10
let tens = number % 10
console.log(tens)
number = (number - tens) / 10
console.log(number);
let hundreds = number % 10;
console.log(hundreds)
let thousands = (number - hundreds) / 10;
console.log(thousands)

/***
 * 3. Identify the data type for each of the following values:

'true' -> string
false  -> boolean
1.5   -> float
2      -> number
undefined -> undefined
{ foo: 'bar' } -> object
 */

// 4.
console.log('5' + 10) // It coerses this string to an integer number it concatenes as it was as string.

/**
 * 5. Refactor the code from the previous exercise to use explicit coercion, so it logs 15 instead.
 */
let result = (Number('5') + 10) // 15


// 6.
console.log(`The value of ${Number('5')} + ${10} is ${result}.`)

// 7.
let foo = ['a', 'b', 'c'];
console.log(foo.length);  // => 3
console.log(foo[3]);      // will this result in an error? It will be undefined because that element does not exist in the array.


// 8.
let names = ['asta', 'butterscoth', 'pudding', 'neptune', 'darwin']

// 9.
let pers = {
  asta: 'dog',
  butterscoth: 'cat',
  pudding: 'cat',
  neptune: 'fish',
  darwin: 'lizard'
}

// 10. 
console.log('foo' === 'Foo') // false because is not exatcly as the extrict equal operator.

// 11.
console.log(parseInt('3.1415')) // 3 parseInt parse string to int taking away the right float numbers.

// 12.
console.log('12' < '9') //
 /* evaluates to true, because javascript iterate strings from left to right meaning
 1 is less than 9 so it is true. */

 

