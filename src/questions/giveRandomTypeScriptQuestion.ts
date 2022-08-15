import randomQuestionLogic from '../utils/randomQuesionLogic';

const giveRandomTypeScriptQuestion = (dataBlockNumber: number) => {
  const data = `
  #### Q1. Who developed Typescript?
  @@
  - [x] Anders Hejlsberg
  - [ ] Mark Candy
  - [ ] Stan Lacke
  - [ ] None
  @@
  #### Q2.TypeScript was introduced in the year of?
  @@
  - [ ] 2011
  - [x] 2012
  - [ ] 2014 
  - [ ] 2017
  @@
  #### Q3.What are the built-in types in Typescript?
  @@
  - [ ] Number type
  - [ ] Boolean type
  - [ ]  Null type
  - [x] All of these
  @@
  #### Q4.Typescript be installed or managed through?
  @@
  - [ ] Void
  - [ ] Space
  - [ ] Nmp
  - [x] Tag
  @@
  #### Q5. What are different components of TypeScript?
  @@
  - [ ] Language
  - [ ] Compiler
  - [ ] Language Service
  - [x] All of the above
  @@
  #### Q6. Which object-oriented terms are supported by TypeScript?
  @@
  - [ ] Interfaces
  - [ ] Data Types
  - [ ] Member functions
  - [x] All the above
  @@
  #### Q7. What are the disadvantages of TypeScript?
  @@
  - [ ] TypeScript is just another way to write JavaScript. It doesn’t fix the problems of JavaScript
  - [ ] One more tool to learn
  - [ ] TypeScript has a dependency on type definition files if you wish to use any existing JavaScript libraries
  - [x] All of the above
  @@
  #### Q8. Which of the following is the typing principle of typescript?
  @@
  - [ ]  Gradual
  - [ ]  Dynamic
  - [ ]  Duck
  - [x]  All of the above
  @@
  #### Q9. Which are the different Data Types supported by Typescript?
  @@
  - [ ] Boolean var bValue: boolean = falseB
  - [ ] Number var age: number = 16
  - [ ] String var name: string = "jon"
  - [x] All of the above mentioned
  @@
  #### Q10. What are the variable scopes available in TypeScript?
  @@
  - [ ] Global Scope
  - [ ]  Class Scope
  - [ ] Local Scope
  - [x] All of the above
  @@
  #### Q11. What are the benefits of Typescript?
  @@
  - [ ] It helps in code structuring
  - [ ] Use class based object oriented programming
  - [ ] Impose coding guidelines
  - [x] All of the above
  @@
  #### Q12. What is the latest version of typescript?
  @@
  - [x] TypeScript 4.7 
  - [ ] TypeScript 4.5 
  - [ ] TypeScript 4.8 
  - [ ] TypeScript 4.6 
  @@
  #### Q13.Which object-oriented principle TypeScript does not support?
  @@
  - [ ] encapsulation
  - [ ] polymorphism
  - [ ] abstraction
  - [x] enforcement
  @@
  #### Q14. What cannot be done with types in TypeScript?
  @@
  - [ ] primitives and unions cannont be described with them
  - [x] classes cannot extend them
  - [ ] a new intersection type cannot be created by combining two interfaces
  - [ ] tuples cannot be declared using types
  @@
  #### Q15. What can be done with interfaces in TypeScript?
  @@
  - [x] declaration merging
  - [ ] we can create a new union interface
  - [ ] can be used to create mapped types
  - [ ] have implicit index signature
  @@
  “declaration merging” means that the compiler merges two separate declarations declared with the same name into a single definition. 
  This merged definition has the features of both of the original declarations.
   Any number of declarations can be merged; it’s not limited to just two declarations.
   At the most basic level, the merge mechanically joins the members of both declarations into a single interface with the same name.
   @@
  #### Q16.Which keyword can internal modules use in TypeScript?
  @@
  - [ ] module
  - [x] all of them
  - [ ] export
  - [ ] namespace
  @@
  #### Q17. How should generic type look?
  @@
  - [ ] <any name>
  - [ ] <-type-name->
  - [ ] <Type>
  - [x] <T>
  @@
  #### Q18. Where do you put decorators in Typescript?
  @@
  - [x] before the target
  - [ ] after the target
  - [ ] inside the target's curly braces
  - [ ] dosn't matter
  @@
  #### Q19. What cannon be decorated with decorators in typescipt?
  @@
  - [ ] class
  - [x] variables
  - [ ] methods
  - [ ] parameters
  @@
  #### Q20. The following code doesn't work. How to fix it in a propper way?
@@
  interface Employee { 
    name: string; 
    code: number; 
} 
let employee =  { }; 
employee.name = "John"; // Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; // Compiler Error: Property 'code' does not exist on type '{}'
  @@
  - [x] let employee = <Employee> { }; 
  - [ ] let employee = { } as Employee; 
  - [ ] let employee = {Employee }; 
  - [ ] let employee = { }<Employee> ; 
  @@
  #### Q21. What keyword is used for type assertion in JSX?
  @@
  - [ ] in
  - [ ] <T>
  - [x] as
  - [ ] typeof
  @@
  #### Q22. Which access modifier is default?
  @@
  - [x] Public
  - [ ] Protected
  - [ ] Private
  - [ ] Restricted
  @@
  #### Q23. What is true about this syntax "///"?
  @@
  - [x] only possible at the  start of the file
  - [ ] wrong syntax of comment
  - [ ] one possible way to write a comment
  - [ ] is widely used
  @@
  The contents of the comment are used as compiler directives.
  e.g.: /// <reference path="..." /> - serves as a declaration of dependency between files. 
  Triple-slash is outdated. Better to use tsconfig.json instead.
  @@
  #### Q24. What is tsd?
  @@
  - [ ] TypeScript Definition Module
  - [ ] TypeScript Definition Maker
  - [ ] TypeScript Declaration Manager
  - [x] TypeScript Definition Manager
  @@
  TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository.
  @@
  #### Q25. Which JSX module has .jsx files as an outcome?
  @@
  - [x] Preserve
  - [ ] React 
  - [ ] React-native 
  - [ ] all of them
  @@
  #### Q26. What do we call it when the child class has the same method as the parent class?
  @@
  - [ ] method overloading
  - [x] method overriding
  - [ ] no correct answer
  - [ ] this is not possible in TypeScript
  @@
  #### Q27. Which is the pipe symbol in TypeScript?
  @@
  - [ ] &&
  - [ ] $
  - [x] |
  - [ ] ||
  @@
  #### Q28. According to TypeScript,
            if two objects have the same properties of the same types, they are considered to have the same type. 
            What is the name for this?
  @@
  - [x] duck typing
  - [ ] similation
  - [ ] shallow comparison
  - [ ] similarity checking
  @@
  #### Q29. Does TypeScript support function overloading?
  @@
  - [x] Yes, weirdly
  - [ ] Yes
  - [ ] No
  - [ ] Yes, partially
  @@
  You can have multiple functions with the same name but different parameter types and return type. 
  However, the number of parameters should be the same.
  @@
  #### Q30.You want to use a third party code (possible JS without types). 
  TypeScript doesn't like the lack of types. How do you make TypeScript accept the code?
  @@
  - [ ] const module: any
  - [ ] let module: any
  - [ ] this is not possible
  - [x] declare let module: any
  @@
  declare specifies a type to an already existing variable, not declaring a new one.
  @@
  #### Q31. What is a TypeScipt data type that allows us to define a set of named constants?
  @@
  - [ ] Map
  - [ ] Array
  - [ ] Object
  - [x] Enum
  @@
  #### Q32. What is not a rule of method overriding?
  @@
  - [ ] The method must have the same name as in the parent class.
  - [x] All parameters must be of the same type.
  - [ ] It must have the same parameter as in the parent class.
  - [ ] There must be an IS-A relationship or inheritance.
  @@
  #### Q33. What does not exist in TypeScript?
  @@
  - [ ] Static Typing
  - [ ] Type Inference
  - [x] More primitive data types
  - [ ] Strict Null Checking
  @@
  #### Q34. What is not an advantage of using TypeScript?
  @@
  - [ ] fast, simple, easy to learn
  - [ ] similar to JavaScript
  - [ ] includes features from ES6 and ES7
  - [x] supports abstract classes
  @@
  #### Q35. When a type combines two or more other types into one with '&', it is an example of?
  @@
  - [x] intersection
  - [ ] union
  - [ ] generics
  - [ ] interface
  @@
  #### Q36.What are type aliases?
  @@
  - [x] new, meaningful names for types
  - [ ] new, meaningful names for intersections
  - [ ] a type of interface
  - [ ] new, meaningful names for a classes
  @@
  #### Q37. What is a correct example of a tuple?
  @@
  - [ ] number[][]
  - [ ] string[string, string]
  - [x] [number, number]
  - [ ] string, number[string, number]
  @@
  #### Q38. What  flag to the TypeScript (tsc) compiler throws a type error if you try to use undefined where a concrete value is expected?
  @@
  - [ ] --strictNullCheck
  - [ ] --strictUndefinedCheck
  - [ ] --strictUndefinedChecks
  - [x] --strictNullChecks
  @@
  #### Q39.How to make object properties immutable in TypeScript?
  @@
  - [x] use readonly before properties
  - [ ] use restricted before properties
  - [ ] use protected before properties
  - [ ] use immute before properties
  @@
  #### Q40. Which forces class to provide code for methods and properties from the parent?
  @@
  - [ ] extends
  - [ ] interface
  - [ ] type definition
  - [x] implements
  @@
  #### Q41. Which utility type constructs a type with all properties of Type set to optional?
  @@
  - [x] Partial<Type>
  - [ ] Required<Type>
  - [ ] Readonly<Type> 
  - [ ] Record<Keys, Type>
  @@
  #### Q42. Which utility type 	constructs a type consisting of all properties of Type set to required?
  @@
  - [ ] Partial<Type>
  - [x] Required<Type>
  - [ ] Readonly<Type> 
  - [ ] Record<Keys, Type>
  @@
  #### Q43. Which utility type constructs a type with all properties of Type set to readonly?
  @@
  - [ ] Partial<Type>
  - [ ] Required<Type>
  - [x] Readonly<Type> 
  - [ ] Record<Keys, Type>
  @@
  #### Q44. Which utility type constructs an object type with property keys are of type Keys, and values are Type?
  @@
  - [ ] Partial<Type>
  - [ ] Required<Type>
  - [ ] Readonly<Type> 
  - [x] Record<Keys, Type>
  @@
  #### Q45. A <?> is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. 
  <?> use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
  @@
  - [x] Decorator
  - [ ] Insulator
  - [ ] Property type
  - [ ] Access Modifier
  @@
  ####Q46.You can disable implicit variable type assignment by enabling the compiler option: ?
  @@
  - [x] noImplicitAny  
  - [ ] noAutoType  
  - [ ] autoTypeAssignment = FALSE
  - [ ] Implicit = FALSE
  @@
  ####Q47. True or False: Generics can not be assigned default values.
  @@
  - [x] False  
  - [ ] True
  @@
  ####Q48. TypeScript is a ?
  @@
  - [x] All of the above
  - [ ] compiled language
  - [ ] object oriented
  - [ ] strongly typed
  @@
  ####Q49. How many components typescript has?
  @@
  - [x] 3
  - [ ] 2
  - [ ] 4
  - [ ] 5
  @@
  At its heart, TypeScript has the following three components : Language, The TypeScript Compiler and The TypeScript Language Service.
  @@
  ####Q50. TypeScript is <?> framework.
  @@
  - [x] Open-sourced
  - [ ] Commercial
  - [ ] Licensed
  - [ ] Both Commercial and Licensed
  @@
  ####Q51. <?> command is used to generate a JavaScript file from a TypeScript file.
  @@
  - [x] tsc fileName.ts
  - [ ] npm filename.ts
  - [ ] tsc -js fileName.ts
  - [ ] All of the above
  @@
  ####Q52. Which of the following is a valid union type variable?
  @@
  - [x] var emp: (number|string) = 123;
  - [ ] var emp: [number, string] = [1, "Steve"];
  - [ ] var emp: string[] = ["Bill"]
  - [ ] None of the above
  @@
  ####Q53. Which of the following is a valid tuple?
  @@
  - [x] var employee: [number, string] = [1, "Bill"]
  - [ ] var employee: (number, string) = 123;
  - [ ] var employee = [1, "Bill"];
  - [ ] None of the above
  @@
  ####Q54. Which of the following statement is TRUE?
  @@
  - [x] All of the above
  - [ ] An interface can extend another interface in TypeScript.
  - [ ] An interface can extend a class in TypeScript.
  - [ ] TypeScript interface does not generate any JavaScript code.
  @@
  ####Q55. Which of the following command is used to compile a module?
  @@
  - [x] Both, A and B
  - [ ] None of the above
  - [ ] tsc --module amd mymodule.ts
  - [ ] tsc -m amd mymodule.ts
  @@
  #### Q56. Why might you use type definitions for external libraries?
@@
- [x] They allow you to work with the same signatures and types defined by external code	
- [ ] They reduce the size of the generated JavaScript of your application 
- [ ] They cannot be upgraded without having typings	
- [ ] They allow you to catch type conversion errors at runtime	
@@
#### Q57. When using Typescript, where should you import modules from?
@@
- [x] The filepath of the module without the extension	
- [ ] The parent module of the child module
- [ ] The module library	
- [ ] The module directory	
@@
#### Q58. Why would you use a decorator in TypeScript?
@@
- [x] To add both annotations and metadata in the code
- [ ] To make shorthand, non-compiling annotations
- [ ] To serve as a substitute for generic types
- [ ] To easily change the output of a function
@@
#### Q59. You are developing a TypeScript file that will help the engineers debug some JavaScript. The TypeScript file is not functioning properly because some variable names are being overwritten. How can you fix this issue?
@@
- [x] Variables in the global scope can be overwritten, so you must rewrite the code to include module definitions to create more local scope for the variables.	
- [ ] Variables in the local scope can be overwritten, so you must rewrite the code to declare each variable as an anonymous type.
- [ ] Variables in the TypeScript language can be re-assigned, so you must include exclude statements before each variable definition.	
- [ ] Variables in the TypeScript language can be multi-declared, so you must rewrite the code to include singular type statements before each variable definition.	
@@
#### Q60. You must convert a program to use modules. Given the following file, animals.ts, how can you rewrite the code so that the Cheetah and Tiger modules can be referenced without the top layer namespace as a wrapper?
@@
export namespace Animals {
    export class Cheetah { /* ... */ }
    export class Tiger { /* ... */ }
}
@@
- [x] export class Cheetah { /* ... */ }
export class Tiger { /* ... */ }
- [ ] export module Animals{ 
  class Cheetah { /* ... */ }
  class Tiger { /* ... */ }
}
- [ ] export => Animals;
class Cheetah { /* ... */ }
class Tiger { /* ... */ }
- [ ] export any Animals;
class Cheetah { /* ... */ }
class Tiger { /* ... */ }
@@
#### Q61. What is true of the structural type system?
@@
- [x] It states that two objects are equal if they have the same structural properties, regardless of whether they have the same root class.	
- [ ] It is a model of inheritance that allows classes to inherit from multiple parents	
- [ ] It allows you to declare discriminated unions with the type declaration keyword
- [ ] It allows you to dynamically add or delete properties on JavaScript objects at runtime	
@@
#### Q62. You create an ambient module and store its declaration in a file named aModule.d.ts. 
What code would correctly create a reference path for this ambient module in your TypeScript file?
@@
- [x] /// <reference path = "aModule.d.ts" /> 
- [ ] ///reference path = "aModule.d.ts" 
- [ ] reference path = "aModule.d.ts"
- [ ] <reference path = "aModule.d.ts" /> 
@@
#### Q63. Consider the following tuple elements:
let tpls: [number, number, boolean, boolean] = [39, 78, false, true];
While destructuring the above code, which code declaration will capture all four values without throwing any error or using the value undefined? 
@@
- [x] let [t1, ...t2] = tpls;
- [ ] let [t1, t2, ...t3, ...t4] = tpls;
- [ ] let [t1, t2, t3, t4, t5] = tpls;
- [ ] let [t1, t2, t3] = tpls;
@@
#### Q64. What flag can be enabled to provide insight into what happens during the module resolution process?
@@
- [x] Trace Resolution flag	
- [ ] No Resolve flag	
- [ ] Traceroute flag
- [ ] Tracer Flag	
@@
#### Q65. What do you input from the command line to update TypeScript, assuming it is installed globally?
@@
- [x] npm install -g typescript
- [ ] tsc install
- [ ] npm upgrade -g TypeScript
- [ ] tsc update
@@
#### Q66. What will the following code log to the console?
@@
const favoriteNumberPromise = new Promise(resolve => {
  resolve(7);
  resolve(12);
});

favoriteNumberPromise.then(num => console.log('My favorite number is \${num}'));
@@
- [x] My favorite number is 7
- [ ] My favorite number is 12
- [ ] *
- [ ] Nothing
@@
#### Q67. What is the purpose of a TypeScript declaration file?
@@
- [x] They allow you to share the types associated with publicly visible signatures of your TypeScript library.	
- [ ] They help optimize TypeScript build speeds by telling the compiler what methods and types to expect.
- [ ] They allow other libraries to include your code at the lowest possible overhead.	
- [ ] They allow the TypeScript compiler to compile files that include references to code it hasn't processed yet.	
@@
#### Q68. You are calling a 'computeAsync' method that returns a Promise using the code below:
@@
try {
  this.computeAsync(x).then(r => console.log('Result = ' + r));
} catch (Error) {
  console.error('An error occurred but was caught', Error);
}
For some inputs you get errors that are not handled in your catch block. What is the most likely explanation?
@@
- [x] Your code is not correctly handling rejected promises and should be using '.catch()' instead of a try / catch.	
- [ ] The 'computeAsync' method is not calling the 'resolve' or 'reject' methods for some input values.
- [ ] Your code is not correctly handling rejected promises and should be using '.finally()' instead of a try / catch.	
- [ ] The promise is not being evaluated correctly because its result value is not being stored in a variable.	
@@
#### Q69. When coding in TypeScript, what must the name of a decorator match?
@@
- [x] The name of a function that will be called at runtime
- [ ] The name of an accessor called at runtime
- [ ] The name of a parameter to be passed to a function
- [ ] The name of method inside a class
@@
#### Q70. Your teammate is referencing a .d.ts file for each of his modules. Instead of defining each module in its own .d.ts file with top-level export declarations, how else can he simplify the module design for easier importing?
@@
- [x] Create one larger .d.ts file and use the module keyword and the quoted name of the module.	
- [ ] Create one larger .ts intersection file and use the union keyword and the single quoted name of the union.
- [ ] Create one larger .tsx file and use the namespace keyword and the single quoted name of the namespace.	
- [ ] Create one larger .ts file and use the namespace keyword and the double quoted name of the namespace.
@@
#### Q71. You are referencing a class named 'ExternalClass' declared in another library. You get a compiler error when trying to run the following code: 'const instance = new ExternalClass();' What is one possible reason why your code might not compile?
@@
- [x] 'ExternalClass' is declared as abstract.
- [ ] 'ExternalClass' is built for legacy browser support but your project targets ECMAScript 6.
- [ ] 'ExternalClass' does not have a constructor defined.
- [ ] 'ExternalClass' was defined by a project referencing a different version of TypeScript.
@@
#### Q72. How do TypeScript classes and interfaces compare in their compiled form?
@@
- [x] Interfaces are not preserved in the generated JavaScript code. Classes generate JavaScript class definitions.	
- [ ] While not exactly the same, classes and interfaces generate roughly similar amounts of JavaScript after compilation	
- [ ] Classes are not not preserved in the generated JavaScript code. Interfaces generate JavaScript interface definitions.	
- [ ] Classes and interfaces generate the exact same JavaScript code as a result of compilation.
@@
#### Q73. You must keep the outdated output instead of clearing the screen. What compiler option do you use?&nbsp;
@@
- [x] tsc --preserveWatchOutput
- [ ] tsc src/*.ts --pretty
- [ ] tsc --watch
- [ ] tsc src/*.ts --format
@@
#### Q74. You are a developer working in TypeScript on APIs for a company's web application. How would you alter the following code to utilize the 'apiUri' function as a Typescript decorator?
@@
class Departments {
  ...
 }
 
 function apiUri(constructor) {
   ...
 }
 
 apiUri(Departments)
@@
- [x] @apiUri<br>class Departments {<br>  ...<br>}
- [ ] '&amp;apiUri(Departments)'
- [ ] function : &lt;decorator&gt; apiUri(constructor) {<br>  ...<br>}
- [ ] function apiUri &lt;T&gt;(constructor: T)  &lt;T&gt;{<br>  ...<br>}
@@
#### Q75. What is a TypeScript project reference?
@@
- [x] Subdivisions within a larger TypeScript codebase that allow for portions of the project to be built independently and referenced by other portions	
- [ ] A way to include Git submodules in order to incorporate third-party code while minimizing and automating pains commonly associated with managing submodules
- [ ] A more efficient alternative to npm for managing package dependencies and package versions, but are limited to TypeScript projects
- [ ] Dynamic links to external Git repositories containing TypeScript code. The code is cloned locally and built as needed without technically being part of your repository
@@
#### Q76. What feature of TypeScript  satisfies these demands?
@@
improve code flexibility, make components reusable, remove duplication
@@
- [x] Generics
- [ ] Typing
- [ ] OOP
- [ ] Interface
@@
#### Q77. What are generic type parameters?
@@
- [x] generic types specified inside angle brackets
- [ ] generic type aliases specified inside angle brackets
- [ ] generic types arguments
- [ ] none of these
@@
### Q78. These <T, K, A> syntax represents?
@@
- [x] multiple generic types in in a single definition
- [ ] wrong use of generic types
- [ ] different generic types
- [ ] none of these
@@
Note: By convention, programmers usually use a single letter to name a generic type.
 This is not a syntax rule, and you can name generics like any other type in TypeScript, but this convention helps to immediately convey to those reading your code that a generic type does not require a specific type.
@@
#### Q79. What is wrong here?
@@
Generics can appear in functions, types, classes, interfaces, variables. 
@@
- [x] variables
- [ ] types
- [ ] classes
- [ ] interfaces
@@
#### Q80. Why do we need generics here?
@@
function identity<T>(value: T): T {
  return value;
}

const result = identity(123);
@@
- [x] because in TypeScript without  generics the value would be one single type. So, we wouldn't be able to use any type we want here.
- [ ] because in TypeScript without generics the value wouldn't work.
- [ ] because JavaSript, which is  underneath TypeScript, doesn' t allow this.
- [ ] all of the options are correct
`;

  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomTypeScriptQuestion;
