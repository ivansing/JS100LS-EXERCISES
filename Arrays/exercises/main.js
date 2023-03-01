// 1.
/*  let array1 = [1, 2, undefined, 4];
console.log(array1.length, "length array1");
console.log(array1);

let array2 = [1];
console.log((array2.length = 5)); // [5]
console.log(array2.length, "length array2");
console.log(array2); // [1, <4 empty items> ]

let array3 = [];
console.log((array3[-1] = [1])); // [1]
console.log(array3.length, "length array3");
console.log(array3); // ['-1': [1] ]

let array4 = [1, 2, 3, 4, 5];
console.log((array4.length = 3)); // 3
console.log(array4.length, "length array4");
console.log(array4); // [1,2,4]

let array5 = [];
console.log((array5[100] = 3));
console.log(array5.length, "length array5");
console.log(array5);  */

// 2.
//let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
/* let even = myArray.filter(num => num % 2 === 0);
even.forEach(num => console.log(num))  

// 3.
let innerArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

 let flat = innerArray.flat()
let even2 = flat.filter(num => num % 2 === 0);
even2.forEach(num => console.log(num)); 


  for (let i = 0; i < innerArray.length; i++) {
  for (let j = 0; j < innerArray.length; j++) {
      let sort = innerArray[i][j];
      sort % 2 === 0 ? console.log(sort) : ''  
  }
}  

// 4.
 let myArray = [
  1, 3, 6, 11,
  4, 2, 4, 9,
  17, 16, 0,
];
 */

/* myArray.map(num => {
  
  if (num % 2 === 0) {
    num = 'Even';
    console.log(num)
  } else if (num % 2 === 1) {
    num = 'Odd';
    console.log(num)
  } 
  
}); // new line result values*/
/* 
let newArray = myArray.map((value) => {
  if (value % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
})  */

//console.log(newArray); // array of values
// 5.

/* let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

const findIntegers = (arr) => {
  things.filter(int => {
    if (Number.isInteger(int)) {
      console.log(int)
      
    }
  })
}

let integers = findIntegers(things);
//console.log(integers) */

// 6.
let arr = ["a", "abcd", "abcde", "abc", "ab"];

const oddLengths = (arr) => {
  let strLength = arr.map((ele) => ele.length);
  let oddStr = strLength.filter((num) => num % 2 === 1);
  return oddStr;
};

//console.log(oddLengths(arr));

// 7.
let array = [3, 5, 7];

const sumOfSquares = (arr) => {
  return arr.reduce((acc, num) => {
    return acc + num * num;
  }, 0);
};

//console.log(sumOfSquares(array));

// 8.
let arr2 = ['a', 'abcd', 'abcde', 'abc', 'ab'];
const oddLengths2 = (arr) => {
  return arr.reduce((filter, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filter.push(length)
    }
    return filter;
  }, []);
}

//console.log(oddLengths2(arr2));

// 9:
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

/* console.log(numbers1.includes(3));
console.log(numbers2.includes(3));
console.log(numbers3.includes(3)); */

let arr3 = [
  ["hello", "world"],
  ["example", "mem", null, 6, 88],
  [4, 8, 12]
];

console.log(arr3[1][3] = 606);
console.log(arr3);