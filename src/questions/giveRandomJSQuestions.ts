import randomQuestionLogic from '../utils/randomQuesionLogic';

const giveRandomJSQuestion = (dataBlockNumber: number) => {
  const data = `

#### Q1. Which operator returns true if the two compared values are not equal?
@@
- [ ] '<>'
- [ ] '~'
- [ ] '==!'
- [x] '!=='
@@
[Reference Javascript Comparison Operators](https://www.w3schools.com/js/js_operators.asp)
@@
#### Q2. How is a forEach statement different from a for statement?
@@
- [ ] Only a for statement uses a callback function.
- [x] A for statement is generic, but a forEach statement can be used only with an array.
- [ ] Only a forEach statement lets you specify your own iterator.
- [ ] A forEach statement is generic, but a for statement can be used only with an array.
@@
[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)
@@
#### Q3. Review the code below. Which statement calls the addTax function and passes 50 as an argument? How would you use this function to find out how much tax should be paid on \$50?
@@
'''js
function addTax(total) {
  return total * 1.05;
}
'''
@@
- [ ] 'addTax = 50;'
- [ ] 'return addTax 50;'
- [x] 'addTax(50);'
- [ ] 'addTax 50;'
@@
#### Q4.What is the output of this code?
@@
let n = '11', s = 21;
let c = (n+++s++);
console.log(c);
@@
- [x] 32
- [ ] 1222
- [ ] 1121
- [ ] SyntaxError: Unexpected identifier
@@
#### Q5. Which statement creates a new object using the Person constructor? Which statement creates a new Person object called "student"?
@@
- [x] 'var student = new Person();'
- [ ] 'var student = construct Person;'
- [ ] 'var student = Person();'
- [ ] 'var student = construct Person();'
@@
#### Q6. When would the final statement in the code shown be logged to the console? When would 'results shown' be logged to the console?
@@
'''js
let modal = document.querySelector('#result');
setTimeout(function () {
  modal.classList.remove('hidden');
}, 10000);
console.log('Results shown');
'''
@@
- [ ] after 10 second
- [ ] after results are received from the HTTP request
- [ ] after 10000 seconds
- [x] immediately
@@
#### Q7. Which snippet could you add to this code to print "food" to the console?
@@
'''javascript
class Animal {
  static belly = [];
  eat() {
    Animal.belly.push('food');
  }
}
let a = new Animal();
a.eat();
console.log(/* Snippet Here */); //Prints food
'''
@@
- [ ] 'a.prototype.belly[0]'
- [ ] 'Object.getPrototype0f (a).belly[0]'
- [x] 'Animal.belly[0]'
- [ ] 'a.belly[0]'
@@
[Reference Javascript Class static Keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
@@
#### Q8. You've written the code shown to log a set of consecutive values, but it instead results in the value 5, 5, 5, and 5 being logged to the console. Which revised version of the code would result in the value 1, 2, 3 and 4 being logged?
@@
'''javascript
for (var i = 1; i <= 4; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 10000);
}
'''
@@
- [ ]
'''javascript
for (var i = 1; i <= 4; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(j);
}
'''
- [ ]
'''javascript
for (var i=1; i<=4; i++) {
  setTimeout(function() {
    console.log(i);
    }, i*1000);
}
'''
- [x] 
'''javascript
for (var i = 1; i <= 4; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}
'''
- [ ]
'''javascript
for (var j = 1; j <= 4; j++) {
  setTimeout(function () {
    console.log(j);
  }, j * 1000);
}
'''
@@
1. [Reference setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)
2. [Reference immediately invoked anonymous functions](https://www.javascripttutorial.net/javascript-anonymous-functions/)
@@
#### Q9. How does a function create a closure?
@@
- [ ] It reloads the document whenever the value changes.
- [x] It returns a reference to a variable in its parent scope.
- [ ] It completes execution without returning.
- [ ] It copies a local variable to the global scope.
@@
[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
@@
#### Q10. Which statement creates a new function called discountPrice?
@@
- [x] 
'''js
let discountPrice = function (price) {
  return price * 0.85;
};
'''
- [ ]
'''js
let discountPrice(price) {
  return price * 0.85;
};
'''
- [ ]
'''js
let function = discountPrice(price) {
  return price * 0.85;
};
'''
- [ ]
'''js
discountPrice = function (price) {
  return price * 0.85;
};
'''
@@
[Reference defining javascript functions](https://www.w3schools.com/js/js_functions.asp)
@@
#### Q11. What is the result in the console of running the code shown?
@@
'''js
var Storm = function () {};
Storm.prototype.precip = 'rain';
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
var bob = new WinterStorm();
console.log(bob.precip);
'''
@@
- [ ] Storm()
- [ ] undefined
- [ ] 'rain'
- [x] 'snow'
@@
[Reference prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
@@
#### Q12. You need to match a time value such as 12:00:32. Which of the following regular expressions would work for your code?
@@
- [ ] '/[0-9]{2,}:[0-9]{2,}:[0-9]{2,}/'
- [x] '/\d\d:\d\d:\d\d/'
- [ ] '/[0-9]+:[0-9]+:[0-9]+/'
- [ ] '/ : : /'
@@
NOTE: The first three are all partially correct and will match digits, but the **second option is the most correct** because it will **only** match **2 digit** time values (12:00:32). The first option would have worked if the repetitions range looked like '[0-9]{2}', however because of the **comma** '[0-9]{2,}' it will select 2 **or more** digits (120:000:321). The third option will any range of time digits, single _and_ multiple (meaning '1:2:3' will also match).
@@
#### Q13. What is the result in the console of running this code?
@@
'''js
'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();
'''
@@
- [ ] 'undefined'
- [ ] 'window'
- [x] '{desc: "logger"}'
- [ ] 'function'
@@
[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
@@
#### Q14. What is the output of this code?
@@
function foo() {
  return class Car {
   constructor() { this.name = 'VW' }
  }
 }
 let VW = foo();
 console.log(new VW().name);
@@
- [ ] undefined
- [ ] SyntaxError: Unexpected identifier
- [ ] TypeError: VW is not a constructor
- [x] VW
@@
#### Q15. What is the result of running this statement?
@@
'''javascript
console.log(typeof 42);
'''
@@
- [ ] ''float''
- [ ] ''value''
- [x] ''number''
- [ ] ''integer''
@@
[Reference javascript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
@@
#### Q16. Which property references the DOM object that dispatched an event?
@@
- [ ] 'self'
- [ ] 'object'
- [x] 'target'
- [ ] 'source'
@@
[Reference DOM events](https://www.w3schools.com/jsref/dom_obj_event.asp)
@@
#### Q17. You're adding error handling to the code shown. Which code would you include within the if statement to specify an error message?
@@
'''js
function addNumbers(x, y) {
  if (isNaN(x) || isNaN(y)) {
  }
}
'''
@@
- [ ] 'exception('One or both parameters are not numbers')'
- [ ] 'catch('One or both parameters are not numbers')'
- [ ] 'error('One or both parameters are not numbers')'
- [x] 'throw('One or both parameters are not numbers')'
@@
[Reference javascript throw](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)
@@
#### Q18. Which method converts JSON data to a JavaScript object?
@@
- [ ] 'JSON.fromString();'
- [x] 'JSON.parse()'
- [ ] 'JSON.toObject()'
- [ ] 'JSON.stringify()'
@@
[Reference convert json to javascript object](https://www.w3schools.com/js/js_json_parse.asp)
@@
#### Q19. When would you use a conditional statement?
@@
- [ ] When you want to reuse a set of statements multiple times.
- [x] When you want your code to choose between multiple options.
- [ ] When you want to group data together.
- [ ] When you want to loop through a group of statement.
@@
[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)
@@
#### Q20. What would be the result in the console of running this code?
@@
'''js
for (var i = 0; i < 5; i++) {
  console.log(i);
}
'''
@@
- [ ] 1 2 3 4 5
- [ ] 1 2 3 4
- [x] 0 1 2 3 4
- [ ] 0 1 2 3 4 5
@@
[Reference javascript for loops](https://www.w3schools.com/js/js_loop_for.asp)
@@
#### Q21. Which Object method returns an iterable that can be used to iterate over the properties of an object?
@@
- [ ] 'Object.get()'
- [ ] 'Object.loop()'
- [ ] 'Object.each()'
- [x] 'Object.keys()'
@@
[Reference javascript object static methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#static_methods)
@@
#### Q22. What will be logged to the console?
@@
'''js
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);
'''
@@
- [x] 101
- [ ] 3
- [ ] 4
- [ ] 100
@@
#### Q23. What is one difference between collections created with Map and collections created with Object?
@@
- [ ] You can iterate over values in a Map in their insertion order.
- [x] You can count the records in a Map with a single method call.
- [ ] Keys in Maps can be strings.
- [ ] You can access values in a Map without iterating over the whole collection.
@@
**Explanation:** 'Map.prototype.size returns the number of elements in a Map, whereas Object does not have a built-in method to return its size.'
@@
#### Q24. What is the value of dessert.type after executing this code?
@@
'''js
const dessert = { type: 'pie' };
dessert.type = 'pudding';
'''
@@
- [ ] pie
- [ ] The code will throw an error.
- [x] pudding
- [ ] undefined
@@
[Reference working with js objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
@@
#### Q25. 0 && hi
@@
- [ ] ReferenceError
- [ ] True
- [x] 0
- [ ] false
@@
[Reference boolean logic](https://ntgard.medium.com/https-medium-com-ntgard-boolean-logic-in-javascript-part-1-3371af974f19)
@@
#### Q26. Which of the following operators can be used to do a short-circuit evaluation?
@@
- [ ] '\++'
- [ ] '\--'
- [ ] '\=='
- [x] '\|\|'
@@
[Reference short circuit javascript](https://codeburst.io/javascript-what-is-short-circuit-evaluation-ff22b2f5608c)
@@
#### Q27. Which statement sets the Person constructor as the parent of the Student constructor in the prototype chain?
@@
- [ ] 'Student.parent = Person;'
- [x] 'Student.prototype = new Person();'
- [ ] 'Student.prototype = Person;'
- [ ] 'Student.prototype = Person();'
@@
[Reference prototype object js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
@@
#### Q28. Why would you include a "use strict" statement in a JavaScript file?
@@
- [ ] to tell parsers to interpret your JavaScript syntax loosely
- [x] to tell parsers to enforce all JavaScript syntax rules when processing your code
- [ ] to instruct the browser to automatically fix any errors it finds in the code
- [ ] to enable ES6 features in your code
@@
[Reference what is use strict in js](https://www.w3schools.com/js/js_strict.asp)
@@
#### Q29. Which Variable-defining keyword allows its variable to be accessed (as undefined) before the line that defines it?
@@
- [ ] all of them
- [ ] 'const'
- [x] 'var'
- [ ] 'let'
@@
[Reference var vs let vs const in js](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
@@
#### Q30. Which of the following values is not a Boolean false?
@@
- [ ] 'Boolean(0)'
- [ ] 'Boolean("")'
- [ ] 'Boolean(NaN)'
- [x] 'Boolean("false")'
@@
[Reference boolean of a string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
@@
#### Q31. Which of the following is not a keyword in JavaScript?
@@
- [ ] 'this'
- [ ] 'catch'
- [ ] 'function'
- [x] 'array'
@@
[Reference js reserved words](https://www.w3schools.com/js/js_reserved.asp)
@@
#### Q32. Which variable is an implicit parameter for every function in JavaScript?
@@
- [x] Arguments
- [ ] args
- [ ] argsArray
- [ ] argumentsList
@@
[Reference implicit js parameters for functions](https://www.codeproject.com/Tips/1221966/JavaScript-Functions-Implicit-Parameters)
@@
#### Q33. For the following class, how do you get the value of 42 from an instance of X?
@@
'''js
class X {
  get Y() {
    return 42;
  }
}
var x = new X();
'''
@@
- [ ] 'x.get('Y')'
- [x] 'x.Y'
- [ ] 'x.Y()'
- [ ] 'x.get().Y'
@@
[Reference getters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get)
@@
#### Q34. What is the result of running this code?
@@
'''js
sum(10, 20);
diff(10, 20);
function sum(x, y) {
  return x + y;
}
@@
let diff = function (x, y) {
  return x - y;
};
'''
@@
- [ ] 30, ReferenceError, 30, -10
- [x] 30, ReferenceError
- [ ] 30, -10
- [ ] ReferenceError, -10
@@
[Reference accessing before initialization](https://stackoverflow.com/questions/56318460/cannot-access-variable-name-before-initialization)
@@
#### Q35. Why is it usually better to work with Objects instead of Arrays to store a collection of records?
@@
- [ ] Objects are more efficient in terms of storage.
- [ ] Adding a record to an object is significantly faster than pushing a record into an array.
- [x] Most operations involve looking up a record, and objects can do that better than arrays.
- [ ] Working with objects makes the code more readable.
@@
**Explanation:** Records in an object can be retrieved using their key which can be any given value (e.g. an employee ID, a city name, etc), whereas to retrieve a record from an array we need to know its index.
[Reference efficiency of lookups](https://stackoverflow.com/questions/17295056/array-vs-object-efficiency-in-javascript)
@@
#### Q36. Which statement is true about the "async" attribute for the HTML script tag?
@@
- [ ] It can be used for both internal and external JavaScript code.
- [ ] It can be used only for internal JavaScript code.
- [ ] It can be used only for internal or external JavaScript code that exports a promise.
- [x] It can be used only for external JavaScript code.
@@
[Reference async attribute for html](https://www.w3schools.com/tags/att_script_async.asp)
@@
#### Q37. How do you import the lodash library making it top-level Api available as the "\_" variable?
@@
- [x] 'import _ from 'lodash';'
- [ ] 'import 'lodash' as _;'
- [ ] 'import '_' from 'lodash;'
- [ ] 'import lodash as _ from 'lodash';'
@@
[Reference how to import library in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
@@
#### Q38. What does the following expression evaluate to?
@@
'''js
[] == [];
'''
@@
- [ ] True
- [ ] undefined
- [ ] []
- [x] False
@@
[Reference arrays in js are objects](https://stackoverflow.com/questions/30820611/why-doesnt-equality-check-work-with-arrays)
@@
#### Q39. What type of function can have its execution suspended and then resumed at a later point?
@@
- [x] Generator function
- [ ] Arrow function
- [ ] Async/ Await function
- [ ] Promise function
@@
[Reference what are generators in nodejs](https://www.guru99.com/node-js-generators-compare-callbacks.html#:~:text=Generators%20are%20function%20executions%20that,resumed%20at%20a%20later%20point.)
@@
#### Q40. What will this code print?
@@
'''js
var v = 1;
var f1 = function () {
  console.log(v);
};
@@
var f2 = function () {
  var v = 2;
  f1();
};
@@
f2();
'''
@@
- [ ] 2
- [x] 1
- [ ] Nothing - this code will throw an error.
- [ ] undefined
@@
#### Q41. Which statement is true about Functional Programming?
@@
- [ ] Every object in the program has to be a function.
- [ ] Code is grouped with the state it modifies.
- [ ] Date fields and methods are kept in units.
- [x] Side effects are not allowed.
@@
[Reference functional programming](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
@@
#### Q42. Your code is producing the error: TypeError: Cannot read property 'reduce' of undefined. What does that mean?
@@
- [x] You are calling a method named reduce on an object that's declared but has no value.
- [ ] You are calling a method named reduce on an object that does not exist.
- [ ] You are calling a method named reduce on an empty array.
- [ ] You are calling a method named reduce on an object that's has a null value.
@@
**Explanation**: 'You cannot invoke reduce on undefined object... It will throw (yourObject is not Defined...)'
@@
#### Q43. How many prototype objects are in the chain for the following array?
@@
'let arr = [];'
@@
- [ ] 3
- [x] 2
- [ ] 0
- [ ] 1
@@
[Reference array prototype](https://www.w3schools.com/jsref/jsref_prototype_array.asp)
@@
#### Q44. Which choice is _not_ a unary operator?
@@
- [ ] 'typeof'
- [ ] 'delete'
- [x] 'instanceof'
- [ ] 'void'
@@
[Reference js unary operators](https://www.digitalocean.com/community/tutorials/javascript-unary-operators-simple-and-useful#:~:text=A%20unary%20operation%20is%20an,therefore%20their%20functionality%20is%20guaranteed.)
@@
#### Q45. What type of scope does the end variable have in the code shown?
@@
'''javascript
var start = 1;
if (start === 1) {
  let end = 2;
}
'''
@@
- [ ] conditional
- [x] block
- [ ] global
- [ ] function
@@
[Reference block vs function scope](https://josephcardillo.medium.com/the-difference-between-function-and-block-scope-in-javascript-4296b2322abe)
@@
#### Q46. What will the value of y be in this code:
@@
'''js
const x = 6 % 2;
const y = x ? 'One' : 'Two';
'''
@@
- [ ] One
- [ ] undefined
- [ ] TRUE
- [x] Two
@@
[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
@@
#### Q47. Which keyword is used to create an error?
@@
- [x] 'throw'
- [ ] 'exception'
- [ ] 'catch'
- [ ] 'error'
@@
[Reference throwing errors in js](<https://www.w3schools.com/jsref/jsref_throw.asp#:~:text=The%20throw%20statement%20throws%20(generates,to%20create%20a%20custom%20error.)>)
@@
#### Q48. What's one difference between the async and defer attributes of the HTML script tag?
@@
- [ ] The defer attribute can work synchronously.
- [ ] The defer attribute works only with generators.
- [ ] The defer attribute works only with promises.
- [x] The defer attribute will asynchronously load the scripts in order.
@@
[Reference async vs defer](https://www.digitalocean.com/community/tutorials/html-defer-async#:~:text=%3E-,Async%20vs%20Defer,order%20as%20they%20are%20called.)
@@
#### Q49. The following program has a problem. What is it?
@@
'''js
var a;
var b = (a = 3) ? true : false;
'''
@@
- [x] The condition in the ternary is using the assignment operator.
- [ ] You can't define a variable without initializing it.
- [ ] You can't use a ternary in the right-hand side of an assignment operator.
- [ ] The code is using the deprecated var keyword.
@@
[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
@@
#### Q50. Which statement references the DOM node created by the code shown?
@@
'''html
<p class="pull">lorem ipsum</p>
'''
@@
- [ ] 'Document.querySelector('class.pull')'
- [x] 'document.querySelector('.pull');'
- [ ] 'Document.querySelector('pull')'
- [ ] 'Document.querySelector('#pull')'
@@
[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
@@
#### Q51. What value does this code return?
@@
'''js
let answer = true;
if (answer === false) {
  return 0;
} else {
  return 10;
}
'''
@@
- [x] 10
- [ ] true
- [ ] false
- [ ] 0
@@
[Reference javascript conditionals](https://www.javascript.com/learn/conditionals)
@@
#### Q52. What is the result in the console of running the code shown?
@@
'''js
var start = 1;
function setEnd() {
  var end = 10;
}
setEnd();
console.log(end);
'''
@@
- [ ] 10
- [ ] 0
- [x] ReferenceError
- [ ] undefined
@@
#### Q53. What will this code log in the console?
@@
'''js
function sayHello() {
  console.log('hello');
}
@@
console.log(sayHello.prototype);
'''
@@
- [ ] undefined
- [ ] "hello"
- [x] an object with a constructor property
- [ ] an error message
@@
[Reference prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
@@
#### Q54. Which collection object allows unique value to be inserted only once?
@@
- [ ] Object
- [x] Set
- [ ] Array
- [ ] Map
@@
[Reference javascript sets](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
@@
#### Q55. What two values will this code print?
@@
'''js
function printA() {
  console.log(answer);
  var answer = 1;
}
printA();
printA();
'''
@@
- [ ] '1' then '1'
- [ ] '1' then 'undefined'
- [x] 'undefined' then 'undefined'
- [ ] 'undefined' then '1'
@@
#### Q56. How does the 'forEach()' method differ from a 'for' statement?
@@
- [ ] forEach allows you to specify your own iterator, whereas for does not.
- [ ] forEach can be used only with strings, whereas for can be used with additional data types.
- [x] forEach can be used only with an array, whereas for can be used with additional data types.
- [ ] for loops can be nested; whereas forEach loops cannot.
@@
[Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)
@@
#### Q57. Which choice is an incorrect way to define an arrow function that returns an empty object?
@@
- [ ] => '({})'
- [x] => '{}'
- [ ] => '{ return {};}'
- [ ] => '(({}))'
@@
[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
@@
#### Q58. Why might you choose to make your code asynchronous?
@@
- [x] to start tasks that might take some time without blocking subsequent tasks from executing immediately
- [ ] to ensure that tasks further down in your code are not initiated until earlier tasks have completed
- [ ] to make your code faster
- [ ] to ensure that the call stack maintains a LIFO (Last in, First Out) structure
@@
**EXPLANATION:** "to ensure that tasks further down in your code are not initiated until earlier tasks have completed" you use the normal (synchronous) flow where each command is executed sequentially. Asynchronous code allows you to break this sequence: start a long running function (AJAX call to an external service) and continue running the rest of the code in parallel.
@@
#### Q59. Which expression evaluates to true?
@@
- [ ] '[3] == [3]'
- [x] '3 == '3''
- [ ] '3 != '3''
- [ ] '3 === '3''
@@
[Reference booleans](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
@@
#### Q60. Which of these is a valid variable name?
@@
- [ ] 5thItem
- [x] firstName
- [ ] grand total
- [ ] function
@@
[Reference coding conventions](https://www.w3schools.com/js/js_conventions.asp)
@@
#### Q61. Which method cancels event default behavior?
@@
- [ ] 'cancel()'
- [ ] 'stop()'
- [x] 'preventDefault()'
- [ ] 'prevent()'
@@
[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
@@
#### Q62. Which method do you use to attach one DOM node to another?
@@
- [ ] 'attachNode()'
- [ ] 'getNode()'
- [ ] 'querySelector()'
- [x] 'appendChild()'
@@
[Reference Node interface](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
@@
#### Q63. Which statement is used to skip iteration of the loop?
@@
- [ ] 'break'
- [ ] 'pass'
- [ ] 'skip'
- [x] 'continue'
@@
[Reference break vs continue](https://www.w3schools.com/js/js_break.asp)
@@
#### Q64. Which choice is valid example for an arrow function?
@@
- [x] '(a,b) => c'
- [ ] 'a, b => {return c;}'
- [ ] 'a, b => c'
- [ ] '{ a, b } => c'
@@
[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
@@
#### Q65. Which concept is defined as a template that can be used to generate different objects that share some shape and/or behavior?
@@
- [x] class
- [ ] generator function
- [ ] map
- [ ] proxy
@@
[Reference javascript classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
@@
#### Q66. How do you add a comment to JavaScript code?
@@
- [ ] '! This is a comment'
- [ ] '# This is a comment'
- [ ] '\\ This is a comment'
- [x] '// This is a comment'
@@
[Reference comments in javascript](https://www.w3schools.com/js/js_comments.asp)
@@
#### Q67. If you attempt to call a value as a function but the value is not a function, what kind of error would you get?
@@
- [x] TypeError
- [ ] SystemError
- [ ] SyntaxError
- [ ] LogicError
@@
[Reference javascript errors](https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/error)
@@
#### Q68. Which method is called automatically when an object is initialized?
@@
- [ ] create()
- [ ] new()
- [x] constructor()
- [ ] init()
@@
[Reference javascript constructors](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)
@@
#### Q69. What is the result of running the statement shown?
@@
'''javascript
let a = 5;
console.log(++a);
'''
@@
- [ ] 4
- [ ] 10
- [x] 6
- [ ] 5
@@
[Reference ++x vs x++](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment)
@@
#### Q70. You've written the event listener shown below for a form button, but each time you click the button, the page reloads. Which statement would stop this from happening?
@@
'''javascript
button.addEventListener(
  'click',
  function (e) {
    button.className = 'clicked';
  },
  false,
);
'''
@@
- [ ] 'e.blockReload();'
- [ ] 'button.preventDefault();'
- [ ] 'button.blockReload();'
- [x] 'e.preventDefault();'
@@
[Reference events in javascript](https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault)
@@
#### Q71. Which statement represents the starting code converted to an IIFE?
@@
- [ ] 'function() { console.log('lorem ipsum'); }()();'
- [ ] 'function() { console.log('lorem ipsum'); }();'
- [x] '(function() { console.log('lorem ipsum'); })();'
@@
[Reference what is an Immediately Invoked Function Expression](https://javascript.plainenglish.io/https-medium-com-javascript-in-plain-english-stop-feeling-iffy-about-using-an-iife-7b0292aba174)
@@
#### Q72. Which statement selects all img elements in the DOM tree?
@@
- [ ] 'Document.querySelector('img')'
- [ ] 'Document.querySelectorAll('<img>')'
- [x] 'Document.querySelectorAll('img')'
- [ ] 'Document.querySelector('<img>')'
@@
[Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
@@
#### Q73. Why would you choose an asynchronous structure for your code?
@@
- [ ] To use ES6 syntax
- [x] To start tasks that might take some time without blocking subsequent tasks from executing immediately
- [ ] To ensure that parsers enforce all JavaScript syntax rules when processing your code
- [ ] To ensure that tasks further down in your code aren't initiated until earlier tasks have completed
@@
[Reference async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
@@
#### Q74. What is the HTTP verb to request the contents of an existing resource?
@@
- [ ] DELETE
- [x] GET
- [ ] PATCH
- [ ] POST
@@
[Reference http methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
@@
#### Q75. Which event is fired on a text field within a form when a user tabs to it, or clicks or touches it?
@@
- [x] focus
- [ ] blur
- [ ] hover
- [ ] enter
@@
[Reference javascript events](https://developer.mozilla.org/en-US/docs/Web/Events)
@@
#### Q76. What is the result in the console of running this code?
@@
'''javascript
function logThis() {
  console.log(this);
}
logThis();
'''
@@
- [ ] function
- [ ] undefined
- [ ] Function.prototype
- [x] window
@@
[Reference what is the javascript window](https://www.w3schools.com/js/js_window.asp)
@@
#### Q77. Which class-based component is equivalent to this function component?
@@
'''javascript
const Greeting = ({ name }) => <h1>Hello {name}!</h1>;
'''
@@
- [x] 'class Greeting extends React.Component { render() { return <h1>Hello {this.props.name}!</h1>; } }'
- [ ] 'class Greeting extends React.Component { constructor() { return <h1>Hello {this.props.name}!</h1>; } }'
- [ ] 'class Greeting extends React.Component { <h>Hello {this.props.name}!</h>; } }'
- [ ] 'class Greeting extends React.Component { render({ name }) { return <h1>Hello {name}!</h1>; } }'
@@
#### Q79. What is the output of this code?
@@
'''javascript
var obj;
console.log(obj);
'''
@@
- [ ] 'ReferenceError: obj is not defined'
- [ ] '{}'
- [x] 'undefined'
- [ ] 'null'
@@
[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
@@
#### Q80. How would you use the TaxCalculator to determine the amount of tax on \$50?
@@
'''javascript
class TaxCalculator {
  static calculate(total) {
    return total * 0.05;
  }
}
'''
@@
- [ ] calculate(50);
- [ ] new TaxCalculator().calculate(\$50);
- [x] TaxCalculator.calculate(50);
- [ ] new TaxCalculator().calculate(50);
@@
[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)
@@
#### Q81. What is wrong with this code?
@@
'''js
const foo = {
  bar() {
    console.log('Hello, world!');
  },
  name: 'Albert',
  age: 26,
};
'''
@@
- [ ] The function bar needs to be defined as a key/value pair.
- [ ] Trailing commas are not allowed in JavaScript.
- [ ] Functions cannot be declared as properties of objects.
- [x] Nothing, there are no errors.
@@
1. [Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)
2. [Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
@@
#### Q82. What will be logged to the console?
@@
'''js
console.log('I');
setTimeout(() => {
  console.log('love');
}, 0);
console.log('Javascript!');
'''
@@
- [x] .
'''plaintext
I
Javascript!
love
'''
- [ ] .
'''plaintext
love
I
Javascript!
'''
- [ ] The output may change with each execution of code and cannot be determined.
- [ ] .
'''
I
love
Javascript!
'''
@@
**Reference**
https://developer.mozilla.org/en-US/docs/Web/API/setTimeout#reasons_for_delays_longer_than_specified especially see the 'late timeouts' section.
@@
#### Q83. What will this code log to the console?
@@
'''js
const foo = [1, 2, 3];
const [n] = foo;
console.log(n);
'''
@@
- [x] 1
- [ ] undefined
- [ ] NaN
- [ ] Nothing--this is not proper JavaScript syntax and will throw an error.
@@
[Reference array deconstruction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
@@
#### Q84. How do you remove the property name from this object?
@@
'''js
const foo = {
  name: 'Albert',
};
'''
@@
- [ ] delete name from foo;
- [x] delete foo.name;
- [ ] del foo.name;
- [ ] remove foo.name;
@@
[Reference working with objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
@@
#### Q85. What is the difference between the 'map()' and the 'forEach()' methods on the Array prototype?
@@
- [ ] There is no difference.
- [ ] The 'forEach()' method returns a single output value, whereas the 'map()' method performs operation on each value in the array.
- [x] The map() methods returns a new array with a transformation applied on each item in the original array, whereas the 'forEach()' method iterates through an array with no return value.
- [ ] The 'forEach()' methods returns a new array with a transformation applied on each item in the original array, whereas the 'map()' method iterates through an array with no return value.
@@
1. [Reference map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
2. [Reference Differences between forEach and for loop](https://www.geeksforgeeks.org/difference-between-foreach-and-for-loop-in-javascript/)
@@
#### Q86. Which concept does this code illustrate?
@@
'''js
function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
@@
var addFive = makeAdder(5);
console.log(addFive(3));
'''
@@
- [ ] overloading
- [ ] closure
- [x] currying
- [ ] overriding
@@
[Reference currying](https://javascript.info/currying-partials)
@@
#### Q87. Which tag pair is used in HTML to embed JavaScript?
@@
- [x] '<script></script>'
- [ ] '<js></js>'
- [ ] '<javascript></javascript>'
- [ ] '<code></code>'
@@
[Reference add js to html file](https://www.w3schools.com/tags/tag_script.asp)
@@
#### Q88. If your app receives data from a third-party API, which HTTP response header must the server specify to allow exceptions to the same-origin policy?
@@
- [ ] Security-Mode
- [x] Access-Control-Allow-Origin
- [ ] Different-Origin
- [ ] Same-Origin
@@
[Reference Cross-Origin Resource Sharing](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
@@
#### Q89. What will be logged to the console??
@@
'''js
'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this);
}
new logThis();
'''
@@
- [ ] window
- [ ] undefined
- [ ] function
- [x] {desc: "logger"}
@@
[Reference strict in javascript classes](https://www.w3schools.com/js/js_strict.asp)
@@
#### Q90. What will this code print?
@@
'''js
let rainForests = ['Amazon', 'Borneo', 'Cerrado', 'Congo'];
rainForests.splice(0, 2);
console.log(rainForests);
'''
@@
- [ ] '["Amazon","Borneo","Cerrado","Congo"]'
- [x] '["Cerrado", "Congo"]'
- [ ] '["Congo"]'
- [ ] '["Amazon","Borneo"]'
@@
[Reference array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
@@
#### Q91. Which missing line would allow you to create five variables(one,two,three,four,five) that correspond to their numerical values (1,2,3,4,5)?
@@
'''js
const numbers = [1, 2, 3, 4, 5];
//MISSING LINE
'''
@@
- [x] 'const [one,two,three,four,five]=numbers'
- [ ] 'const {one,two,three,four,five}=numbers'
- [ ] 'const [one,two,three,four,five]=[numbers]'
- [ ] 'const {one,two,three,four,five}={numbers}'
@@
[Reference array destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
@@
#### Q92. What will this code print?
@@
'''js
const obj = {
  a: 1,
  b: 2,
  c: 3,
};
@@
const obj2 = {
  ...obj,
  a: 0,
};
@@
console.log(obj2.a, obj2.b);
'''
@@
- [ ] Nothing, it will throw an error
- [x] 0 2
- [ ] undefined 2
- [ ] undefined 2
@@
[Reference spread syntax es6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
@@
#### Q93. Which line could you add to this code to print "jaguar" to the console?
@@
'''js
let animals = ['jaguar', 'eagle'];
//Missing Line
console.log(animals.pop()); //Prints jaguar
'''
@@
- [ ] 'animals.filter(e => e === "jaguar");'
- [ ] 'animals.reverse();'
- [ ] 'animals.shift();'
- [x] 'animals.pop();'
@@
[Reference Javascript Array Reverse](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
@@
#### Q94. What line is missing from this code?
@@
'''js
//Missing Line
for (var i = 0; i < vowels.length; i++) {
  console.log(vowels[i]);
  //Each letter printed on a separate line as follows;
  //a
  //e
  //i
  //o
  //u
}
'''
@@
- [ ] 'let vowels = "aeiou".toArray();'
- [ ] 'let vowels = Array.of("aeiou");'
- [ ] 'let vowels = {"a", "e", "i", "o", "u"};'
- [x] 'let vowels = "aeiou";'
@@
[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)
@@
#### Q95. What will be logged to the console?
@@
'''js
const x = 6 % 2;
const y = x ? 'One' : 'Two';
console.log(y);
'''
@@
- [ ] undefined
- [ ] One
- [ ] true
- [x] Two
@@
[Reference ternary operator js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
@@
#### Q96. How would you access the word It from this multidimensional array?
@@
'let matrix = [["You","Can"],["Do","It"],["!","!","!"]];'
@@
- [ ] 'matrix[1[2]]'
- [x] 'matrix[1][1]'
- [ ] 'matrix[1,2]'
- [ ] 'matrix[1][2]'
@@
#### Q97. What does this code do?
@@
'''js
const animals = ['Rabbit', 'Dog', 'Cat'];
animals.unshift('Lizard');
'''
@@
- [x] It adds "Lizard" to the start of the animals array.
- [ ] It adds "Lizard" to the end of the animals array.
- [ ] It replaces "Rabbit" with "Lizard" in the animals array.
- [ ] It replaces "Cat" with "Lizard" in the animals array.
@@
[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)
@@
#### Q98. What is the output of this code?
@@
'''js
let x = 6 + 3 + '3';
console.log(x);
'''
@@
- [x] 93
- [ ] 12
- [ ] 66
- [ ] 633
@@
[Reference type coercion](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
@@
#### Q99. Which statement can take a single expression as input and then look through a number of choices until one that matches that value is found?
@@
- [ ] else
- [ ] when
- [ ] if
- [x] switch
@@
[Reference switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
@@
#### Q100. Which statement prints "roar" to the console?
@@
'''js
var sound = 'grunt';
var bear = { sound: 'roar' };
function roar() {
  console.log(this.sound);
}
'''
@@
- [ ] 'bear.bind(roar);'
- [ ] 'roar.bind(bear);'
- [x] 'roar.apply(bear);'
- [ ] 'bear[roar]();'
@@
1. [Reference Apply](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
2. [Reference this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
3. [Reference bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
@@
#### Q101. Which choice is a valid example of an arrow function, assuming c is defined in the outer scope?
@@
- [ ] 'a, b => { return c; }'
- [ ] 'a, b => c'
- [ ] '{ a, b } => c'
- [x] '(a,b) => c'
@@
[Reference arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
@@
#### Q102. Which statement correctly imports this code from some-file.js?
@@
'''js
//some-file.js
export const printMe = (str) => console.log(str);
'''
@@
- [ ] 'import printMe from './some-file';'
- [x] 'import { printMe } from './some-file';'
- [ ] 'import default as printMe from './some-file';'
- [ ] 'const printMe = import './some-file';'
@@
[Reference importing libraries in javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
@@
#### Q103. What will be the output of this code?
@@
'''js
const arr1 = [2, 4, 6];
const arr2 = [3, 5, 7];
@@
console.log([...arr1, ...arr2]);
'''
@@
- [ ] '[2, 3, 4, 5, 6, 7]'
- [ ] '[3,5,7,2,4,6]'
- [ ] '[3, 5, 7, 2, 4, 6]'
- [ ] '[[2, 4, 6], [3, 5, 7]]'
- [x] '[2, 4, 6, 3, 5, 7]'
@@
[Reference spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
@@
#### Q104. Which method call is chained to handle a successful response returned by 'fetch()'?
@@
- [ ] 'done()'
- [x] 'then()'
- [ ] 'finally()'
- [ ] 'catch()'
@@
[Reference fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
@@
#### Q105. Which choice is not an array method?
@@
- [ ] 'array.slice()'
- [ ] 'array.shift()'
- [ ] 'array.push()'
- [x] 'array.replace()'
@@
[Reference working with arrays](https://www.w3schools.com/js/js_arrays.asp)
@@
#### Q106. Which JavaScript loop ensures that at least a singular iteration will happen?
@@
- [x] do…while
- [ ] forEach
- [ ] while
- [ ] for
@@
[Reference loops in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
@@
#### Q107. What will be logged to the console?
@@
'''javascript
console.log(typeof 'blueberry');
'''
@@
- [x] 'string'
- [ ] 'array'
- [ ] 'Boolean'
- [ ] 'object'
@@
[Reference what is typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)
@@
#### Q108. What is the output that is printed when the div containing the text "Click Here" is clicked?
@@
'''html
//HTML Markup
<div id="A">
  <div id="B">
    <div id="C">Click Here</div>
  </div>
</div>
'''
@@
'''javascript
//JavaScript
document.querySelectorAll('div').forEach((e) => {
  e.onclick = (e) => console.log(e.currentTarget.id);
});
'''
@@
- [x] C B A
- [ ] A
- [ ] C
- [ ] A B C
@@
1. [Reference query selector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
2. [Reference events](https://developer.mozilla.org/en-US/docs/Web/Events)
@@
#### Q109. What will this code log to the console?
@@
'''js
const myNumbers = [1, 2, 3, 4, 5, 6, 7];
const myFunction = (arr) => {
  return arr.map((x) => x + 3).filter((x) => x < 7);
};
console.log(myFunction(myNumbers));
'''
@@
- [ ] [4,5,6,7,8,9,10]
- [ ] [4,5,6,7]
- [ ] [1,2,3,4,5,6]
- [x] [4,5,6]
@@
[Reference functions in javascript](https://www.w3schools.com/js/js_functions.asp)
@@
#### Q110. What does this code print to the console?
@@
'''js
let rainForestAcres = 10;
let animals = 0;
@@
while (rainForestAcres < 13 || animals <= 2) {
  rainForestAcres++;
  animals += 2;
}
@@
console.log(animals);
'''
@@
- [ ] 2
- [ ] 4
- [x] 6
- [ ] 8
@@
[Reference MDN JavaScript Looping code](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code)
@@
#### Q111. Which snippet could you add to this code to print "YOU GOT THIS" to the console?
@@
'''js
let cipherText = [...'YZOGUT QGMORTZ MTRHTILS'];
let plainText = '';
@@
/* Missing Snippet */
@@
console.log(plainText); //Prints YOU GOT THIS
'''
@@
- [ ]
'''js
for (let key of cipherText.keys()) {
  plainText += key % 2 === 0 ? key : ' ';
}
'''
- [ ]
'''js
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 !== 0 ? value : '';
}
'''
- [x]
'''js
for (let [index, value] of cipherText.entries()) {
  plainText += index % 2 === 0 ? value : '';
}
'''
- [ ]
'''js
for (let value of cipherText) {
  plainText += value;
}
'''
@@
#### Q112. Which Pokemon will be logged to the console?
@@
'''js
var pokedex = ['Snorlax', 'Jigglypuff', 'Charmander', 'Squirtle'];
pokedex.pop();
console.log(pokedex.pop());
'''
@@
- [x] Charmander
- [ ] Jigglypuff
- [ ] Snorlax
- [ ] Squirtle
@@
**Explanation**: The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
@@
[Reference Array.pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
@@
#### Q113. Which statement can be used to select the element from the DOM containing the text "The LinkedIn Learning library has great JavaScript courses" from this markup?
@@
'''html
<h1 class="content">LinkedIn Learning</h1>
<div class="content">
  <span class="content">The LinkedIn Learning library has great JavaScript courses!</span>
</div>
'''
@@
- [ ] document.querySelector("div.content")
- [x] document.querySelector("span.content")
- [ ] document.querySelector(".content")
- [ ] document.querySelector("div.span")
@@
#### Q114. Which value is not falsey?
@@
- [x] '[]'
- [ ] 'undefined'
- [ ] '0'
- [ ] 'null'
@@
[Reference Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
@@
#### Q115. What line of code causes this code segment to throw an error?
@@
'''js
const lion = 1;
let tiger = 2;
var bear;
@@
++lion;
bear += lion + tiger;
tiger++;
'''
@@
- [x] 'line 5, because lion cannot be reassigned a value'
- [ ] 'line 6, because the += operator cannot be used with the undefined variable bear'
- [ ] 'line 5, because the prefix (++) operator does not exist in JavaScript'
- [ ] 'line 3, because the variable bear is left undefined'
@@
1. [Reference const in js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
2. [Reference TypeError: invalid assignment to const "x"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Invalid_const_assignment)
@@
#### Q116. What will be the value of 'result' after running this code?
@@
'''js
const person = { name: 'Dave', age: 40, hairColor: 'blue' };
const result = Object.keys(person).map((x) => x.toUpperCase());
'''
@@
- [ ] It will throw a TypeError.
- [ ] '["Name", "Age", "HairColor"]'
- [ ] '["DAVE", 40, "BLUE"]'
- [x] '["NAME", "AGE", "HAIRCOLOR"]'
@@
1. [Reference Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
2. [Reference Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [Reference String.prototype.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
@@
#### Q117. Which snippet could you insert to this code to print "swim" to the console?
@@
'''js
let animals = ["eagle", "osprey", "salmon"];
let key = animal => animal === "salmon";
@@
if(/* Insert Snippet Here */){
  console.log("swim");
}
'''
@@
- [ ] 'animals.every(key)'
- [ ] 'animals.some(key).length === 1'
- [ ] 'animals.filter(key) === true'
- [x] 'animals.some(key)'
@@
[Reference Array.prototype.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
@@
#### Q118. What is the output of this code?
@@
'''js
class RainForest {
  static minimumRainFall = 60;
}
@@
let congo = new RainForest();
RainForest.minimumRainFall = 80;
console.log(congo.minimumRainFall);
'''
@@
- [x] 'undefined'
- [ ] 'None of these answers, as static is not a feature in Javascript.'
- [ ] '60'
- [ ] '80'
@@
[Reference Classes static](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static)
@@
#### Q119. How can you attempt to access the property 'a.b' on 'obj' without throwing an error if a is undefined?
@@
'''js
let obj = {};
'''
@@
- [ ] 'obj?.a.b'
- [x] 'obj.a?.b'
- [ ] 'obj[a][b]'
- [ ] 'obj.?a.?b'
@@
[Reference Optional chaining (?.)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
@@
#### Q120. What happens when you run this code?
@@
'''js
if (true) {
  var x = 5;
  const y = 6;
  let z = 7;
}
console.log(x + y + z);
'''
@@
- [ ] It will throw a 'ReferenceError' about 'x'.
- [ ] It will print '18'.
- [ ] It will print 'undefined'.
- [x] It will throw a 'ReferenceError' about 'y'.
@@
[Reference let statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)
@@
#### Q121. What does this code print to the console?
@@
'''js
const x = [1, 2];
const y = [5, 7];
const z = [...x, ...y];
console.log(z);
'''
@@
- [x] '[1,2,5,7]'
- [ ] '[[1, 2], [5, 7]]'
- [ ] '[2,7]'
- [ ] '[2,1,7,5]'
@@
[Reference spread syntax (...)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
@@
#### Q122. Given this code, which statement will evaluate to false?
@@
'''js
const a = { x: 1 };
const b = { x: 1 };
'''
@@
- [ ] 'a['x'] === b['x']'
- [ ] 'a != b'
- [x] 'a === b'
- [ ] 'a.x === b.x'
@@
[Reference](http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html)
@@
#### Q123. What will this code log to the console?
@@
'''js
console.log(typeof 41.1);
'''
@@
- [ ] 'Nothing. It resuults in a ReferenceError.'
- [ ] 'decimal'
- [ ] 'float'
- [x] 'number'
@@
[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof#basic_usage)
@@
#### Q124. What is the output of this code?
@@
'''js
let scores = [];
scores.push(1, 2);
scores.pop();
scores.push(3, 4);
scores.pop();
score = scores.reduce((a, b) => a + b);
console.log(score);
'''
@@
- [ ] '3'
- [x] '4'
- [ ] '6'
- [ ] '7'
@@
1. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
2. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
3. [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
@@
#### Q125. What does this code print to the console?
@@
'''js
let bear = {
  sound: 'roar',
  roar() {
    console.log(this.sound);
  },
};
@@
bear.sound = 'grunt';
let bearSound = bear.roar;
bearSound();
'''
@@
- [ ] 'Nothing is printed to the console.'
- [ ] 'grunt'
- [x] 'undefined'
- [ ] 'roar'
@@
[Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)
@@
#### Q126. What is the output of this code?
@@
'''js
var cat = { name: 'Athena' };
@@
function swap(feline) {
  feline.name = 'Wild';
  feline = { name: 'Tabby' };
}
@@
swap(cat);
console.log(cat.name);
'''
@@
- [ ] undefined
- [x] Wild
- [ ] Tabby
- [ ] Athena
@@
#### Q127. What will this code output to the log?
@@
'''js
var thing;
let func = (str = 'no arg') => {
  console.log(str);
};
func(thing);
func(null);
'''
@@
- [ ] null no arg
- [ ] no arg no arg
- [ ] null null
- [x] no arg null
@@
#### Q128. What will this code print to the console?
@@
'''js
const myFunc = () => {
  const a = 2;
  return () => console.log('a is ' + a);
};
const a = 1;
const test = myFunc();
test();
'''
@@
- [ ] a is 1
- [ ] a is undefined
- [ ] It won't print anything.
- [x] a is 2
@@
#### Q129. What will this code print to the console?
@@
'''js
const myFunc = (num1, num2 = 2, num3 = 2) => {
  return num1 + num2 + num3;
};
let values = [1, 5];
const test = myFunc(2, ...values);
console.log(test);
'''
@@
- [x] 8
- [ ] 6
- [ ] 2
- [ ] 12
@@
#### Q130. Which code would you use to access the Irish flag?
@@
'''js
var flagsJSON =
  '{ "countries" : [' +
  '{ "country":"Ireland" , "flag":"🇮🇪" },' +
  '{ "country":"Serbia" , "flag":"🇷🇸" },' +
  '{ "country":"Peru" , "flag":"🇵🇪" } ]}';
@@
var flagDatabase = JSON.parse(flagsJSON);
'''
@@
- [ ] flagDatabase.countries[1].flag
- [x] flagDatabase.countries[0].flag
- [ ] flagDatabase[1].flag
- [ ] flagsJSON.countries[0].flag
@@
#### Q131. What  will  the following code print to the console?
@@
'''js
function myFunction() {
  this.value = 5
}
console.log(myFunction.prototype)
'''
@@
- [x] {constructor: ƒ}
- [ ] {}
- [ ] undefined
- [ ] {constructor.prototype}
@@
#### Q132. What  will  the following code print to the console?
@@
'''js
const myArrowFunction = () => {}
console.log(myArrowFunction.prototype)
'''
@@
- [x] undefined
- [ ] {constructor: ƒ}
- [ ] {constructor.prototype}
- [ ] {}
@@
#### Q133. Arrow Functions Have No <?>?
@@
- [x] constructor
- [ ] collee
- [ ] lexical scope
- [ ] non of these
#### Q134. Arrow Functions can <?> without <?> keyword.
@@
- [x] return
- [ ] new
- [ ] function
- [ ] this
@@
#### Q135. Arrow functions do not have their own <?> binding. Instead, they go up to the next level of execution.
It can be useful to use the arrow function in cases where you really want <?> to refer to the outer context. 
For example, if you had an event listener inside of a class, you would probably want <?> to refer to some value in the class.
@@
- [x] this
- [ ] bind
- [ ] new
- [ ] implicit
@@
#### Q136. In the browser, there is a special this context for event handlers.
 In an event handler called by addEventListener, this will refer to <?>.
 @@
 - [x] event.currentTarget
 - [ ] event
 - [ ] event.target
 - [ ] event.target.value
 @@
 #### Q137. The first difference between Map and WeakMap is ?
 @@
 - [x] that keys must be objects, not primitive values
 - [ ] that keys may be objects, not primitive values
 - [ ] that keys may be objects and primitive values
 - [ ] that keys must be primitive values, not objects
 @@
 #### Q138. WeakSet is analogous to Set, but we may only add?
 @@
 - [x] objects to WeakSet (not primitives)
 - [ ] objects to Set (not primitives)
 - [ ] primitives to WeakSet
 - [ ] weak objects
 @@
 #### Q139. You must refactor your object methods to use shorthand declaration. Given the following object definition, what code option shows how you can define the class using literal method shorthand declaration?
@@
const foo = {   bar: function() { return "Test Test" }};
@@
- [x] const foo = { bar() {return "Test Test"} }
- [ ] const foo = { funct bar(){return "Test Test"}; }
- [ ] const foo = { bar{return "Test Test"}; }
- [ ] const foo { bar.funct(){return "Test Test"}; }
@@
#### Q140. You created a new function that will asynchronously generate an image file and return a promise. You use the .then() method to add two callbacks, one for success and one for failure. When the .then() function executes, what will it return?
@@
- [x] A new promise object
- [ ] A boolean value
- [ ] An error message
- [ ] A callback status
@@
#### Q141. Which statement correctly assigns the years variable to match the expected behavior on the last line of the following code snippet?
@@
const years = ???console.log(years['02'] != years[2]) // true
@@
- [x] const years = [1950, 1960, 1970];
- [ ] const years = (1950, 1960, 1970);
- [ ] const years = {1950, 1960, 1970};
- [ ] const years = [1950, 1960];
@@
#### Q142. After the following code is executed, what is printed to the console?
@@
function list() {   return [].slice.call(arguments);}var leadingThirtysevenList = list.bind(null, 37);var list2 = leadingThirtysevenList();console.log(list2);
@@
- [x] [37]
- [ ] null
- [ ] []
- [ ] undefined
@@
#### Q143. To allow your web application to handle any pending events, you wrote a function that executes repeatedly every 1,000 milliseconds after the function's initial execution finishes. Why might you use setTimeout instead of setInterval in this situation?
@@
- [x] setTimeout guarantees a minimum amount of time until the function execution is executed.
- [ ] setTimeout must be called to properly call setInterval repeatedly with each cycle.
- [ ] setInterval only executes once, while setTimeout sleeps the main thread of execution every designated unit of time.
- [ ] setTimeout can be canceled to allow for pending events to execute, while setInterval runs indefinitely and cannot be canceled.
@@
#### Q144. What is the scope of a use strict directive?
@@
- [x] Either the source file or function that contains the directive
- [ ] The function that contains the directive
- [ ] All loaded JavaScript
- [ ] The source file that contains the directive
@@
#### Q145. How are class expressions and class declarations similar?
@@
- [x] Both must use the class keyword to create classes.
- [ ] Both must use the constructor method.
- [ ] Both can redefine the same class without raising an error.
- [ ] Both must provide a name for their classes.
@@
#### Q146. What term describes JavaScript's ability to treat non-Boolean values as Booleans?
@@
- [x] Coercion
- [ ] Casting
- [ ] Assertion
- [ ] Weak typing
@@
#### Q147. What is the value of x after executing the following code snippet?
@@
let x = 0; function foo(){ x ^= 1;} foo();foo(); foo();
@@
- [x] 1
- [ ] undefined
- [ ] 0
- [ ] 3
@@
#### Q148. You are having an issue fetching a key shared with a specific symbol from the symbol registry. What is something that you could use so that you are able to retrieve that information?
@@
- [x] Use the Symbol.keyfor() method
- [ ] Use the Symbol.match() method
- [ ] Use the Symbol.findkey() method
- [ ] Use the Symbol.search() method
@@
#### Q149. How would you completely fix the following faulty attempt to import all members from a module? 
@@
import {*} as myModule, myDefault from 'my-module.js';
@@
- [x] Remove the attempted default module import and remove curly braces
- [ ] Remove the attempted default module import and remove the naming of myModule
- [ ] Remove the from 'my-module.js
- [ ] Remove curly braces
@@
#### Q150. Typed arrays split their implementation into what two components?
@@
- [x] Buffers and views
- [ ] Buffers and arrays
- [ ] Hash maps and views
- [ ] Stacks and views
@@
#### Q151. What is the syntax for creating a generator function using the GeneratorFunction constructor?
@@
- [x] Object.getPrototypeOf(function*(){}).constructor
- [ ] GeneratorFunction().constructor
- [ ] Object.getGenerator(function*(){}).constructor
- [ ] Object.GeneratorFunction().constructor
@@
#### Q152. Which steps would you take to create multiple views on the same binary data?
@@
- [x] Create a buffer to hold the data and pass the buffer to two different types of TypedArray constructors. 
- [ ] Create two buffers to hold the data in different formats and pass the buffer to its respective type of TypedArray constructor. 
- [ ] Create a view to hold the data and pass the view to two different types of Buffer constructors. 
- [ ] Create two views to hold the data in different formats and pass the view to its respective type of Buffer constructor. 
@@
#### Q153. Why might you use typed arrays instead of standard arrays?
@@
- [x] You must quickly and easily manipulate raw binary data. 
- [ ] You need an array of data elements that are immutable. 
- [ ] You are dealing with larger data elements, such as 128-bit unsigned integers. 
- [ ] You only have boolean data types in the array.
@@
#### Q154. Why would you use a tagged template?
@@
- [x] To parse template literals with a function
- [ ] To execute a function based on a previous tag
- [ ] To find previously used multi-line strings used in the template literal
- [ ] To return an object's properties that were used previously in the template literal
@@
a tagged template literal looks just like a template literal, except for the name at the start, right before the first back tick.
e.g.: html\`<div class='item'>\${item}</div>\`
@@
#### Q155. You have two objects with multiple objects nested inside. What is the best approach for determining if these objects are equal (have the same shape and values)?
@@
- [x] Iterate through the object, key by key, and assert strict equality === on every corresponding value. Iterate through all the nested objects to do the same until you find a missing key:value pair or confirm equality.
- [ ] Use the deep-equals operator (===) in strict mode. This will automatically compare each corresponding nested object.
- [ ] Use Object.is(), the built-in comparison function for JavaScript objects.
- [ ] Use Object.deepEquals(), a function brought over from JavaScript libraries in ECMAScript 2017.
@@
#### Q156. Consider the following object:
@@
const obj = { jan: 150, aug: 200, dec: 300 };
@@
- [x] for (const val in obj) {  console.log('\${obj[val]}');}
- [ ] for (const val of obj) {  console.log('\${obj[val]}');}
- [ ] for (const val in obj) {  console.log('\${val}');}
- [ ] for (const val of obj) {  console.log(val);}
@@
#### Q157. When inheriting from a parent class, what does the super keyword do in the child's constructor?
@@
- [x] super invokes the parent's constructor, and by extension, defines the lexical context and this object for the child class.
- [ ] super instantiates the parent class and copies the properties over as virtual properties on the child class.
- [ ] super instantiates the parent class and deep copies the properties over to the child class.
- [ ] super invokes the parent constructor, and then performs a deep copy of the parent properties over to the child class to make a wholly new object.
@@
#### Q158. In the following code snippet, getConfig is a function with the purpose of providing different parts of your application with the data on the config object at the time of invocation. When invoked this way, getConfig instead returns undefined. What change is required to get the intended functionality?
@@
let config = {  data: { "number": 99 },  getConfig: function() { return this.data; }};let getConfig = config.getConfig;getConfig();
@@
- [x] Bind the function's this value to config.
- [ ] Pass the reference of config.getConfig where the data is needed.
- [ ] Add an invocation of super() to the function to get the member variables of the parent object.
- [ ] Use an arrow function instead as the definition for getConfig to ensure that the function inherits config's scope.
@@
#### Q159. Which regular expression symbol matches a single white space character?
@@
- [x] \s
- [ ] \w
- [ ] \t
- [ ] \S
@@
#### 160. Which regular expression symbol matches the preceding item "x" 0 or more times?
@@
- [x] x*
- [ ] x+
- [ ] x.
- [ ] x?
@@
#### 161. Which regular expression symbol matches the end of input?
@@
- [x] $
- [ ] ^
- [ ] .
- [ ] +
@@
#### 162. Which regular expression correctly matches the "fox" in the following string?
@@
'A quick fox'
@@
- [x] /\w+$/
- [ ] /\b\w+\b/g
- [ ]  /\w+(?= fox)/
- [ ] /^\w+$/
@@
#### Q163. What is the output of this code?
@@
let n = 11, s = '21';
let c = (n+++s++);
console.log(n, s)
@@
- [x] 12 22
- [ ] 11 22
- [ ] 11 21
- [ ] SyntaxError: Unexpected identifier
@@
console log prints n and s! not c
@@
#### Q164. What is the output of this code?
@@
let n = 11, s = '21';
let c = (n++s++);
console.log(n, s);
@@
- [x] SyntaxError: Unexpected identifier
- [ ] 12 22
- [ ] 11 21
- [ ] 1121
@@
JS increments n and s but doesn't know what to do with them afterwards.
@@
#### Q165. What is the state of p when it is printed to console?
@@
let p = new Promise(() => {

  return 333;
  });
  console.log(p);
@@
- [x] pending
- [ ] fulfilled
- [ ] rejected
- [ ] blocked
@@
#### Q166. What is the output of this code?
@@
const a1 = parseInt('f*ck');
const a2 = parseInt('f*ck', 16);
console.log(a1, a2);
@@
- [x] NaN 15
- [ ] NaN NaN
- [ ] NaN 16
- [ ] NaN 0
@@
#### Q167. What is the output of this code?
@@
let a = [].fill.call(
  { length: 3}, 4
 );
 console.log(a);
@@
- [x] {0:4,1:4,2:4,length:3}
- [ ] {length: 1, length: 2, length: 3}
- [ ] {0:4,1:4,2:4,3:4}
- [ ] {length: 3,length: 3,length: 3,length: 3}
@@
fill takes three values: 1.value (here 4), 2.start (starting index), 3.end (ending index). this inside fill doesn't have to be Array.
@@
#### Q168. What is the output of this code?
@@
function foo(num=111) {
  arguments[0] = 222;
  return num;
 }
 console.log(foo(333));
@@
- [x] 333
- [ ] 222
- [ ] 111
- [ ] SyntaxError: Unexpected token '='
@@
in non-strict functions arguments works like this only if the function doesn't contain rest parameters, destructured parameters or default parameters.
@@
#### Q169. Javascript is an _______ language?
@@
- [x] Object-Oriented
- [ ] Object-Based
- [ ] Procedural
- [ ] None of the above
@@

 #### Q170. Which of the following keywords is used to define a variable in Javascript?
@@
- [x] Both A and B
- [ ] var
- [ ] let
- [ ] None of the above
@@

 #### Q171. Which of the following methods is used to access HTML elements using Javascript?
@@
- [x] Both A and B
- [ ] getElementbyId()
- [ ] getElementsByClassName()
- [ ] None of the above
@@

 #### Q172. Upon encountering empty statements, what does the Javascript Interpreter do?
@@
- [x] Ignores the statements
- [ ] Throws an error
- [ ] Gives a warning
- [ ] None of the above
@@

 #### Q173. Which of the following methods can be used to display data in some form using Javascript?
@@
- [x] All of the above
- [ ] document.write()
- [ ] console.log()
- [ ] window.alert()
@@

 #### Q174. How can a datatype be declared to be a constant type?
@@
- [x] const
- [ ] var
- [ ] let
- [ ] constant
@@

 #### Q175. What will be the output of the following code snippet?
@@
<script type="text/javascript">
a = 5 + "9";
document.write(a);
</script>
@@
- [x] 59
- [ ] Compilation Error
- [ ] 14
- [ ] Runtime Error
@@

 #### Q176. What will be the output of the following code snippet?
@@
<script type="text/javascript" language="javascript">
  
var a = "Scaler";
var result = a.substring(2, 4);
document.write(result);
  
</script>
@@
- [x] al
- [ ] ale
- [ ] cal
- [ ] caler
@@

 #### Q177. What will be the output of the following code snippet?
@@
<script type="text/javascript" language="javascript">
 
var x=12;
var y=8;
var res=eval("x+y");
document.write(res);
 
</script>
@@
- [x] 20
- [ ] x+y
- [ ] 128
- [ ] None of the above
@@

 #### Q178. When the switch statement matches the expression with the given labels, how is the comparison done?
@@
- [x] Both the datatype and the result of the expression are compared.
- [ ] Only the datatype of the expression is compared.
- [ ] Only the value of the expression is compared.
- [ ] None of the above.
@@

 #### Q179. What keyword is used to check whether a given property is valid or not?
@@
- [x] in
- [ ] is in
- [ ] exists
- [ ] lies
@@

 #### Q180. What is the use of the &lt;noscript&gt; tag in Javascript?
@@
- [x] The contents are displayed by non-JS-based browsers.
- [ ] Clears all the cookies and cache.
- [ ] Both A and B.
- [ ] None of the above.
@@

 #### Q181. What will be the output of the following code snippet?
@@
(function(){
 setTimeout(()=> console.log(1),2000);
 console.log(2);
 setTimeout(()=> console.log(3),0);
 console.log(4);
})();
@@
- [x] 2 4 3 1
- [ ] 1 2 3 4
- [ ] 2 3 4 1
- [ ] 4 3 2 1
@@

 #### Q182. What will be the output of the following code snippet?
@@
(function(a){
 return (function(){
   console.log(a);
   a = 6;
 })()
})(21);
@@
- [x] 21
- [ ] 6
- [ ] NaN
- [ ] None of the above
@@

 #### Q183. What will be the output of the following code snippet?
@@
function solve(arr, rotations){
 if(rotations == 0) return arr;
 for(let i = 0; i < rotations; i++){
   let element = arr.pop();
   arr.unshift(element);
 }
 return arr;
}
// solve([44, 1, 22, 111], 5);
@@
- [x] [111, 44, 1, 22]
- [ ] [44, 1, 22, 111]
- [ ] [111, 44, 1, 22]
- [ ] [1, 22, 111, 44]
@@

 #### Q184. What will be the output for the following code snippet?
@@
<p id="example"></p>  
<script>  
function Func()  
{  
document.getElementById("example").innerHTML=Math.sqrt(81);  
}  
</script>
@@
- [x] 9
- [ ] 81
- [ ] Error
- [ ] 0
@@

 #### Q185. When an operator’s value is NULL, the typeof returned by the unary operator is:
@@
- [x] Object
- [ ] Boolean
- [ ] Undefined
- [ ] Integer
@@

 #### Q186. What will be the output of the following code snippet?
@@
var a = 1;  
var b = 0;  
while (a <= 3)  
{  
   a++;  
   b += a * 2;  
   print(b);
}
@@
- [x] 4 10 18
- [ ] 1 2 3
- [ ] 1 4 7
- [ ] None of the above
@@

 #### Q187. What does the Javascript “debugger” statement do?
@@
- [x] It acts as a breakpoint in a program.
- [ ] It will debug all the errors in the program at runtime.
- [ ] It will debug error in the current statement if any.
- [ ] All of the above.
@@

 #### Q188. What will be the output of the following code snippet?
@@
var a = Math.max();
var b = Math.min();
print(a);
print(b);
@@
- [x] -Infinity Infinity
- [ ] Infinity -Infinity
- [ ] Infinity Infinity
- [ ] -Infinity -Infinity
@@

 #### Q189. What will be the output of the following code snippet?
@@
var a = Math.max() < Math.min();
var b = Math.max() > Math.min();
print(a);
print(b);
@@
- [x] &nbsp;true false
- [ ] false true
- [ ] true true
- [ ] false false
@@

 #### Q190. What will be the output of the following code snippet?
@@
var a = true + true + true * 3;
print(a)
@@
- [x] 5
- [ ] 3
- [ ] 0
- [ ] Error
@@

 #### Q191. What is the output of the following code snippet?
@@
print(NaN === NaN);
@@
- [x] false
- [ ] true
- [ ] undefined
- [ ] Error
@@

 #### Q192. What will be the output of the following code snippet?
@@
print(typeof(NaN));
@@
- [x] Number
- [ ] Object
- [ ] String
- [ ] None of the above
@@

 #### Q193. What does the ‘toLocateString()’ method do in JS?
@@
- [x] Returns a localized string representation of an object.
- [ ] Returns a localised object representation.
- [ ] Returns a parsed string.
- [ ] None of the above.
@@

 #### Q194. The process in which an object or data structure is translated into a format suitable for transferral over a network, or storage is called?
@@
- [x] Object Serialization
- [ ] Object Encapsulation
- [ ] Object Inheritance
- [ ] None of the above
@@

 #### Q195. Which function is used to serialize an object into a JSON string in Javascript?
@@
- [x] stringify()
- [ ] parse()
- [ ] convert()
- [ ] None of the above
@@

 #### Q196. The 3 basic object attributes in Javascript are:
@@
- [x] Class, prototype, object's extensible flag.
- [ ] Class, prototype, objects' parameters.
- [ ] Class, parameters, object's extensible flag.
- [ ] undefined
@@

 #### Q197. What will be the output of the following code snippet?
@@
let sum = 0; 
const a = [1, 2, 3];
a.forEach(getSum);
print(sum);
function getSum(ele) {
   sum += ele;
}
@@
- [x] 6
- [ ] 1
- [ ] 2
- [ ] None of the above
@@

 #### Q198. What will be the output of the following code snippet?
@@
a = [1, 2, 3, 4, 5];
print(a.slice(2, 4));
@@
- [x] 3, 4
- [ ] 2, 3
- [ ] 3, 4, 5
- [ ] 2, 3, 4
@@

 #### Q199. What will be the output of the following code snippet?
@@
print(parseInt("123Hello"));
print(parseInt("Hello123"));
@@
- [x] 123 NaN
- [ ] 123Hello Hello123
- [ ] NaN NaN
- [ ] 123 123
@@

 #### Q200. Which of the following are closures in Javascript?
@@
- [x] All of the above
- [ ] Variables
- [ ] Functions
- [ ] Objects
@@

 #### Q201. Which of the following is not a Javascript framework?
@@
- [x] Cassandra
- [ ] Node
- [ ] Vue
- [ ] React
@@

 #### Q202. What will be the output of the following code snippet?
@@
var a = "hello";
var sum = 0;
for(var i = 0; i < a.length; i++) {
   sum += (a[i] - 'a');
}
print(sum);
@@
- [x] NaN
- [ ] 47
- [ ] 0
- [ ] None of the above
@@

 #### Q203. What keyword is used to declare an asynchronous function in Javascript?
@@
- [x] async
- [ ] await
- [ ] setTimeout
- [ ] None of the above
@@

 #### Q204. How to stop an interval timer in Javascript?
@@
- [x] clearInterval
- [ ] clearTimer
- [ ] intervalOver
- [ ] None of the above
@@

 #### Q205. What will be the output of the following code snippet?
@@
const set = new Set();
set.add(5);
set.add('Hello');
set.add({ name: 'Scaler' });
for (let item of set) {
 console.log(item + 6);
}
@@
- [x] 11 Hello6 [object Object]6
- [ ] 11 NaN NaN
- [ ] 11 NaN [object Object]
- [ ] None of the above
@@

 #### Q206. How are objects compared when they are checked with the strict equality operator?
@@
- [x] Their references are compared
- [ ] The contents of the objects are compared
- [ ] Both A and B
- [ ] None of the above
@@

 #### Q207. What does … operator do in JS?
@@
- [x] It is used to spread iterables to individual elements
- [ ] It is used to describe a datatype of undefined size
- [ ] No such operator exists
- [ ] None of the above
@@

 #### Q208. What will be the output of the following code snippet?
@@
const example = ({ a, b, c }) => {
 console.log(a, b, c);
};
example(0, 1, 2);
@@
- [x] Undefined Undefined Undefined
- [ ] 0 1 2
- [ ] 0 Undefined Undefined
- [ ] None of the above
@@

 #### Q209. What will be the output of the following code snippet?
@@
let a = [1, 2, 3, 4, 5, 6];
var left = 0, right = 5;
var found = false;
var target = 5;
while(left <= right) {
   var mid = Math.floor((left + right) / 2);
   if(a[mid] == target) {
       found = true;
       break;
   }
   else if(a[mid] < target) {
       left = mid + 1;
   }
   else {
       right = mid - 1;
   }
}
if(found) {
   print("YES");
}
else {
   print("NO");
}
@@
- [x] YES
- [ ] NO
- [ ] Syntax Error
- [ ] None of the above
@@

 #### Q210. What will be the output of the following code snippet?
@@
let s = "00000001111111";
let l = 0, r = s.length - 1, ans = -1;
while(l <= r) {
   var mid = Math.floor((l + r) / 2);
   if(s[mid] == '1') {
       ans = mid;
       r = mid - 1;
   }
   else {
       l = mid + 1;
   }
}
print(ans);
@@
- [x] 7
- [ ] 8
- [ ] 0
- [ ] 1
@@

 #### Q211. What will be the output of the following code snippet?
@@
let n = 24;
let l = 0, r = 100, ans = n;
while(l <= r) {
   let mid = Math.floor((l + r) / 2);
   if(mid * mid <= n) {
       ans = mid;
       l = mid + 1;
   }
   else {
       r = mid - 1;
   }
}
print(ans);
@@
- [x] 4
- [ ] 5
- [ ] 6
- [ ] 3
@@

 #### Q212. What will be the output of the following code snippet?
@@
const obj1 = {Name: "Hello", Age: 16};
const obj2 = {Name: "Hello", Age: 16};
print(obj1 === obj2);
@@
- [x] false
- [ ] true
- [ ] Undefined
- [ ] None of the above
@@

 #### Q213. What happens when we run this code?
@@
function dog() {
   print("I am a dog.");
}
dog.sound = "Bark";
@@
- [x] Nothing happens
- [ ] Syntax Error
- [ ] “I am a dog” gets printed
- [ ] ReferenceError
@@

 #### Q214. How do we write a comment in javascript?
@@
- [x] //
- [ ] /* */
- [ ] #
- [ ] $ $
@@

 #### Q215. Which object in Javascript doesn’t have a prototype?
@@
- [x] Base Object
- [ ] All objects have a prototype
- [ ] None of the objects have a prototype
- [ ] None of the above
@@

 #### Q216. What will be the output of the following code snippet?
@@
function test(...args) {
 console.log(typeof args);
}
test(12);
@@
- [x] Object
- [ ] NaN
- [ ] Number
- [ ] Array
@@

 #### Q217. What will be the output of the following code snippet?
@@
const obj1 = {first: 20, second: 30, first: 50};
console.log(obj1);
@@
- [x] {first: 50, second: 30}
- [ ] {first: 20, second: 30}
- [ ] {first: 20, second: 30, first: 50}
- [ ] Syntax Error
@@

 #### Q218. Which of the following are not server-side Javascript objects?
@@
- [x] All of the above
- [ ] Date
- [ ] FileUpload
- [ ] Function
@@
#### Q219. A let or const variable is said to be in a <?> from the start of the block until code execution reaches the line where the variable is declared and initialized.
@@
- [x] temporal dead zone (TDZ)
- [ ] temporally blocked state (TBS)
- [ ] invisible
- [ ] invisibility position (IV)
@@
#### Q220. What is the difference between Map and object?
@@
Type of difference: Accidental Keys

A: A <?> does not contain any keys by default. It only
        contains what is explicitly put into it.

B: A <?> does not contain any keys by default. It only
        contains what is explicitly put into it.
@@
- [x] A: Map B: Map
- [ ] A: Object B: Object
- [ ] A: Map B: Object
- [ ] A: Object B: Map
@@


#### Q221. What is the difference between Map and object?
@@
Type of difference: Key Types

A: A <?>'s keys can be any value (including functions,
        objects, or any primitive).

B: A <?>'s keys can be any value (including functions,
        objects, or any primitive).
@@
- [x] A: Map B: Map
- [ ] A: Object B: Object
- [ ] A: Map B: Object
- [ ] A: Object B: Map
@@


#### Q222. What is the difference between Map and object?
@@
Type of difference: Key Order

A: Although the keys of an ordinary <?> are ordered now,
          this was not always the case, and the order is complex. As a result,
          it's best not to rely on property order.
        
        
          The order was first defined for own properties only in ECMAScript
          2015; ECMAScript 2020 defines order for inherited properties as well.
          See the
          OrdinaryOwnPropertyKeys
          and
          Enumerate<?>Properties
          abstract specification operations. But note that no single mechanism
          iterates
          all of an <?>'s properties; the various mechanisms
          each include different subsets of properties.
          (for-in
          includes only enumerable string-keyed properties;
          <?>.keys includes only own, enumerable,
          string-keyed properties;
          <?>.getOwnPropertyNames includes own,
          string-keyed properties even if non-enumerable;
          <?>.getOwnPropertySymbols does the same
          for just Symbol-keyed properties, etc.)

B: Although the keys of an ordinary <?> are ordered now,
          this was not always the case, and the order is complex. As a result,
          it's best not to rely on property order.
        
        
          The order was first defined for own properties only in ECMAScript
          2015; ECMAScript 2020 defines order for inherited properties as well.
          See the
          OrdinaryOwnPropertyKeys
          and
          Enumerate<?>Properties
          abstract specification operations. But note that no single mechanism
          iterates
          all of an <?>'s properties; the various mechanisms
          each include different subsets of properties.
          (for-in
          includes only enumerable string-keyed properties;
          <?>.keys includes only own, enumerable,
          string-keyed properties;
          <?>.getOwnPropertyNames includes own,
          string-keyed properties even if non-enumerable;
          <?>.getOwnPropertySymbols does the same
          for just Symbol-keyed properties, etc.)
@@
- [x] A: Object B: Object
- [ ] A: Map B: Map
- [ ] A: Object B: Map
- [ ] A: Map B: Object
@@


#### Q223. What is the difference between Map and object?
@@
Type of difference: 
        Size
      

A: The number of items in an <?> must be determined
        manually.

B: The number of items in an <?> must be determined
        manually.
@@
- [x] A: Object B: Object
- [ ] A: Map B: Map
- [ ] A: Object B: Map
- [ ] A: Map B: Object
@@


#### Q224. What is the difference between Map and object?
@@
Type of difference: Iteration

A: <?> does not implement an iteration protocol, and so <?>s are not directly iterable using the JavaScript
          for...of
          statement (by default).
        
        
          Note:
          
            
              An <?> can implement the iteration protocol, or you can get an
              iterable for an <?> using <?>.keys or <?>.entries.
            
            
              The
              for...in
              statement allows you to iterate over the
              enumerable properties of an <?>.

B: A <?> is an
        iterable, so it can be directly iterated.
@@
- [x] A: Object B: Map
- [ ] A: Map B: Object
- [ ] A: Object B: Object
- [ ] A: Map B: Map
@@


#### Q225. What is the difference between Map and object?
@@
Type of difference: Performance

A: Not optimized for frequent additions and removals of key-value pairs.

B: Performs better in scenarios involving frequent additions and removals
          of key-value pairs.
@@
- [x] A: Object B: Map
- [ ] A: Map B: Object
- [ ] A: Object B: Object
- [ ] A: Map B: Map
@@


#### Q226. What is the difference between Map and object?
@@
Type of difference: Serialization and parsing

A: No native support for serialization or parsing.
        
          (But you can build your own serialization and parsing support for
          <?> by using JSON.stringify()
          with its replacer argument, and by using
          JSON.parse() with its
          reviver argument. See the Stack Overflow question
          How do you JSON.stringify an ES6 <?>?).

B: No native support for serialization or parsing.
        
          (But you can build your own serialization and parsing support for
          <?> by using JSON.stringify()
          with its replacer argument, and by using
          JSON.parse() with its
          reviver argument. See the Stack Overflow question
          How do you JSON.stringify an ES6 <?>?).
@@
- [x] A: Map B: Map
- [ ] A: Object B: Object
- [ ] A: Map B: Object
- [ ] A: Object B: Map
@@
`;
  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomJSQuestion;
