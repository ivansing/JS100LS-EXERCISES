// 1.

let name = 'Victor';
console.log(`Good Morning, ${name}`);
console.log(`Good Afternoon, ${name}`);
console.log(`Good Evening, ${name}`);

// 2.

let age = 20;
console.log(`You are ${age} years old`)
age = age + 10;
console.log(`In 10 years, you will be ${age}`)
age = age + 10;
console.log(`In 20 years, you will be ${age}`)
age = age + 10;
console.log(`In 30 years, you will be ${age}`)
age = age + 10;
console.log(`In 40 years, you will be ${age}`)

// 3.

/* {
  let foo = 'qux'
}

console.log(foo) */ // As foo was defined inside the parenthesis once to console log not possible out of scope 

// 4.
/* const NAME = 'Victor';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);

NAME = 'Joe';
console.log('Good Morning, ' + NAME);
console.log('Good Afternoon, ' + NAME);
console.log('Good Evening, ' + NAME);  */
/**
 * Program crashes because assignment to a constant variable,
 * in the first line was assigned to a value 'Victor' and is not
 * possible to reassig to another value.
 */

// 5.
let foo = 'bar';
{
  let foo = 'qux';
}

console.log(foo);  
/* As foo is a global variable it is possible to console.log their 
value but as in the block scope in the parenthesis not possible to console.log */

// 6.
const FOO = 'bar';
{
  const FOO = 'qux';
}

console.log(FOO); 
 /* Is possible to declare constant variables as uppercase once the variables
  are non variables but more constants in program, here we console log the result of FOO  that is the
  correspondent value 'bar' as global constant variable. */

  

















