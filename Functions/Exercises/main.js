// 1

false || (true && false);
true || 1 + 2;
1 + 2 || true;
true && 1 + 2;
false && 1 + 2;
1 + 2 && true;
32 * 4 >= 129;
false !== !true;
true === 4;
false === (847 === "847");
false === (847 == "847");
!true || !(100 / 5) === 20 || 328 / 4 === 82 || false;

const evenOrOdd = (n) => {
  let checkInteger = Number.isInteger(n);
  if (checkInteger) {
    // Check is even or odd
    if (n % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  } else {
    return "Enter just integers!";
  }
};

//console.log(evenOrOdd(1));

// 4

function barCodeScanner(serial) {
  switch (serial) {
    case "123":
      console.log("Product1");
    case "113":
      console.log("Product2");
    case "142":
      console.log("Product3");
    default:
      console.log("Product not found!");
  }
}

//barCodeScanner('113');

// 5

/* return foo() ? 'bar' : qux();

if (foo()) {
  return 'bar'
} else {
  return qux();
} */

// 6
function isArrayEmpty(arr) {
  if (arr) {
    console.log("Not Empty");
  } else {
    console.log("Empty");
  }
}

//isArrayEmpty([]); // Not empty

/*
7.
*Write a function that takes a string as an argument 
 * and returns an all-caps version of the string when 
 * the string is longer than 10 characters. Otherwise, 
 * it should return the original string. Example: change 
 * 'hello world' to 'HELLO WORLD', but don't change 'goodbye'. */

const toupperLonger = (str) => {
  if (str.length < 10) {
    return str.toUpperCase();
  } else {
    return str;
  }
};

//console.log(toupperLonger('hello wor'));

/** 8.
 * Write a function that logs whether an integer is
 * between 0 and 50 (inclusive), between 51 and 100
 * (inclusive), greater than 100, or less than 0.
 * 
 * 25 is between 0 and 50
   75 is between 51 and 100
   125 is greater than 100
   -25 is less than 0
 */

const numberRange = (num) => {
  if (num >= 0 && num <= 50) {
    console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
    console.log(`${num} is between 51 and 100`);
  } else  {
    if (num < 0) {
      console.log(`${num} is less than 0`);
    } else if (num > 100) {
      console.log(`${num} is greater than 100`);
    }
  }
};

/* function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 51 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
} */

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

// 9.
console.log(false ?? null); // false
console.log(true ?? (1 + 2)); // true
console.log((1 + 2) ?? true); // 3
console.log(null ?? false); // false
console.log(undefined ?? (1 + 2)); // 3
console.log((1 + 2) ?? null); // 3
console.log(null ?? undefined); // undefined
console.log(undefined ?? null); // null


// 10. 
function show(foo = undefined, bar = null) {
  console.log(`foo is ${foo ?? 3}, bar is ${bar ?? 42}`);
}

show(5, 7); // 5, 7
show(0, 0); // 0, 0
show(4); // 4, 42
show(); // 3, 42

