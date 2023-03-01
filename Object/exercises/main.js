
// 1.
let person = {
  name:       'Bob',
  occupation: 'web developer',
  hobbies:    'painting',
};

//console.log(person.name)

// 2. Answered in the platform

// 3.
let myArray = {
  name: 'David',
  age: 22,
  hair: 'black'
}

for (let i = 0; i < myArray.length; i += 1) {
  //console.log(myArray[i]);
}
//console.log(myArray)

// 4. Create an array keys
let obj = {
  b: 2,
  a: 1,
  c: 3,
}

let objKeys = Object.keys(obj);
let upperKeys = objKeys.map((key) => key.toUpperCase());
//console.log(upperKeys);
//console.log(obj)

// 5. Create a new object named myObj that uses myProtoObj as its prototype.
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
myObj.qux = 3;

// 6. Done 

/* 7. Add a qux property with value 3 to the myObj 
object we created in the previous exercise. Now, examine
 the following code snippets:*/

 let objKeys2 = Object.keys(myObj);
objKeys2.forEach(function(key) {
  //console.log(key);
});

for (let key in myObj) {
 // console.log(key);
}

// 8.
let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newArr = ['foo', 'qux'];
let toObject = Object.assign({}, newArr)
//console.log(toObject)

const copyObj = (sourceObject, keys) => {
  
  let destinationObj = {};
  if (keys) {
    keys.forEach((key) => {
      destinationObj[key] = sourceObject[key];
    });

    return destinationObj;
  } else {
    return Object.assign(destinationObj, sourceObject);
  }
  
 }

/* console.log(copyObj(objToCopy));
console.log(objToCopy); */

// 9.
/* let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}

bar(foo, qux);

/* console.log(foo.a);
console.log(qux); 

// 11.
let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12]
};


console.log(obj2.bar[3].xyz = 606) 
console.log(obj2) */

// 12.
function foo(bar) {
  console.log(bar, bar, bar);
  
}

let bar = foo;

// foo("hello"); // should print "hello hello hello"
//bar("hi");    // should print "hi hi hi"

function foo(bar) {
  console.log(bar());
}

foo(function() { return 'Welcome'});    // Should print 'Welcome'
foo(function() { return 3.1416}); 
foo(function() { return [1,2,3]}); 

/* Identify all of the variables, object property names, primitive values, 
and objects in the following code. This problem is even more challenging than the previous one. */


function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/* Note that some items in this program may appear in multiple categories.

Solution
Variables: bar, arg1, arg2, foo, qux, and result.

Property Names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, and 3. 
Don't forget that array indexes are property names.

Primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, 
'Victor', and 'Antonina' are the most apparent primitive values. 
Since property names are strings in most cases, and strings are primitive values,
 we should also include 'abc', 'def', 'ghi', 'jkl'. 'mno', 'pqr', '0', '1', '2', and '3'.

Objects: The bar function, the array [1, 2, 3, [4, 5, 6]], the array [4, 5, 6], 
and the object assigned to qux on line 3 all objects.
 */