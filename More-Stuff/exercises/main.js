const largestNumber = (list) => {
  
  return Math.max(...list)
}

let numbers = [1,6,3,2];

//console.log(largestNumber(numbers))

// 5.
const doSomething = (string) => {
  return string.split(' ').reverse().map((value) => value.length);
}

//console.log(doSomething('ivan'));

/* const allMatches = (words, match) => {
  let matches = [];
  for (let i = 0; i < words.length; i++) {
    if (match.test(words[i])) {
      matches.push(words[i]);
    }
  }
  return matches;
} */

const allMatches = (words, regex) => {
  return words.filter((word) => regex.test(word));
}

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

//console.log(allMatches(words, /lab/))

// 6.
 const isNotANumber = (number) => {
  return /^\d+$/.test(number) ? true : false;
} 

/* function isNotANumber(value) {
  return value !== value;
} */

//console.log(isNotANumber(9));

// 9.

const nonZeroNegative = (value) => {
 // return 1 / value === -Infinity;
 return (value === 0) && (1 / value === -Infinity)
}

console.log(nonZeroNegative(-0))
