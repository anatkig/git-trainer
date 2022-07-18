const giveRandomTypeScriptQuestion = () => {
  const data = `
  #### Q1. Who developed Typescript?
  @
  - [x] Anders Hejlsberg
  - [ ] Mark Candy
  - [ ] Stan Lacke
  - [ ] None
  @
  #### Q2.TypeScript was introduced in the year of?
  @
  - [ ] 2011
  - [x] 2012
  - [ ] 2014 
  - [ ] 2017
  @
  #### Q3.What are the built-in types in Typescript?
  @
  - [ ] Number type
  - [ ] Boolean type
  - [ ]  Null type
  - [x] All of these
  @
  #### Q4.Typescript be installed or managed through?
  @
  - [ ] Void
  - [ ] Space
  - [ ] Nmp
  - [x] Tag
  @
  #### Q5. What are different components of TypeScript?
  @
  - [ ] Language
  - [ ] Compiler
  - [ ] Language Service
  - [x] All of the above
  @
  #### Q6. Which object-oriented terms are supported by TypeScript?
  @
  - [ ] Interfaces
  - [ ] Data Types
  - [ ] Member functions
  - [x] All the above
  @
  #### Q7. What are the disadvantages of TypeScript?
  @
  - [ ] TypeScript is just another way to write JavaScript. It doesn’t fix the problems of JavaScript
  - [ ] One more tool to learn
  - [ ] TypeScript has a dependency on type definition files if you wish to use any existing JavaScript libraries
  - [x] All of the above
  @
  #### Q8. Which of the following is the typing principle of typescript?
  @
  - [ ]  Gradual
  - [ ]  Dynamic
  - [ ]  Duck
  - [x]  All of the above
  @
  #### Q9. Which are the different Data Types supported by Typescript?
  @
  - [ ] Boolean var bValue: boolean = falseB
  - [ ] Number var age: number = 16
  - [ ] String var name: string = "jon"
  - [x] All of the above mentioned
  @
  #### Q10. What are the variable scopes available in TypeScript?
  @
  - [ ] Global Scope
  - [ ]  Class Scope
  - [ ] Local Scope
  - [x] All of the above
  @
  #### Q11. What are the benefits of Typescript?
  @
  - [ ] It helps in code structuring
  - [ ] Use class based object oriented programming
  - [ ] Impose coding guidelines
  - [x] All of the above
  @
  #### Q12.What are the prerequisites to install TypeScript?
  @
  - [x] TypeScript 4.7 
  - [ ] TypeScript 4.5 
  - [ ] TypeScript 4.8 
  - [ ] TypeScript 4.6 
  @
  ####  Which object-oriented principle TypeScript does not support?
  @
  - [ ] encapsulation
  - [ ] polymorphism
  - [ ] abstraction
  - [x] enforcement
  @
  #### Q14. What cannot be done with types in TypeScript?
  @
  - [ ] primitives and unions cannont be described with them
  - [x] classes cannot extend them
  - [ ] a new intersection type cannot be created by combining two interfaces
  - [ ] tuples cannot be declared using types
  @
  #### Q15. What can be done with interfaces in TypeScript?
  @
  - [x] declaration merging
  - [ ] we can create a new union interface
  - [ ] can be used to create mapped types
  - [ ] have implicit index signature
  @
  #### Q16.Which keyword can internal modules use in TypeScript?
  @
  - [ ] module
  - [x] all of them
  - [ ] export
  - [ ] namespace
  @
  #### Q17. How should generic type look?
  @
  - [ ] <any name>
  - [ ] <-type-name->
  - [ ] <Type>
  - [x] <T>
  @
  #### Q18. Where do you put decorators in Typescript?
  @
  - [x] before the target
  - [ ] after the target
  - [ ] inside the target's curly braces
  - [ ] dosn't matter
  @
  #### Q19. What cannon be decorated with decorators in typescipt?
  @
  - [ ] class
  - [x] variables
  - [ ] methods
  - [ ] parameters
  @
  #### Q20. The following code doesn't work. How to fix it in a propper way?
@
  interface Employee { 
    name: string; 
    code: number; 
} 
let employee =  { }; 
employee.name = "John"; // Compiler Error: Property 'name' does not exist on type '{}'
employee.code = 123; // Compiler Error: Property 'code' does not exist on type '{}'
  @
  - [x] let employee = <Employee> { }; 
  - [ ] let employee = { } as Employee; 
  - [ ] let employee = {Employee }; 
  - [ ] let employee = { }<Employee> ; 
  @
  #### Q21. What keyword is used for type assertion in JSX?
  - [ ] in
  - [ ] <T>
  - [x] as
  - [ ] typeof
  @
  #### Q22. Which access modifier is default?
  @
  - [x] Public
  - [ ] Protected
  - [ ] Private
  - [ ] Restricted
  @
  #### Q23. What is true about this syntax "///"?
  @
  - [x] only possible at the  start of the file
  - [ ] wrong syntax of comment
  - [ ] one possible way to write a comment
  - [ ] is widely used
  @
  #### Q24. What is tsd?
  @
  - [ ] TypeScript Definition Module
  - [ ] TypeScript Definition Maker
  - [ ] TypeScript Declaration Manager
  - [x] TypeScript Definition Manager
  @
  #### Q25. Which JSX module has .jsx files as an outcome?
  @
  - [x] Preserve
  - [ ] React 
  - [ ] React-native 
  - [ ] all of them
  @
  #### Q26. What do we call it when the child class has the same method as the parent class?
  @
  - [ ] method overloading
  - [x] method overriding
  - [ ] no correct answer
  - [ ] this is not possible in TypeScript
  @
  #### Q27. Which is the pipe symbol in TypeScript?
  @
  - [ ] &&
  - [ ] $
  - [x] |
  - [ ] ||
  @
  #### Q28. According to TypeScript,
            if two objects have the same properties of the same types, they are considered to have the same type. 
            What is the name for this?
  @
  - [x] duck typing
  - [ ] similation
  - [ ] shallow comparison
  - [ ] similarity checking
  @
  #### Q29. Does TypeScript support function overloading?
  @
  - [x] Yes, weirdly
  - [ ] Yes
  - [ ] No
  - [ ] Yes, partially
  @
  #### Q30.You want to use a third party code (possible JS without types). 
  TypeScript doesn't like the lack of types. How do you make TypeScript accept the code?
  @
  - [ ] const module: any
  - [ ] let module: any
  - [ ] this is not possible
  - [x] declare let module: any
  @
  #### Q31. What is a TypeScipt data type that allows us to define a set of named constants?
  @
  - [ ] Map
  - [ ] Array
  - [ ] Object
  - [x] Enum
  @
  #### Q32. What is not a rule of method overriding?
  @
  - [ ] The method must have the same name as in the parent class.
  - [x] All parameters must be of the same type.
  - [ ] It must have the same parameter as in the parent class.
  - [ ] There must be an IS-A relationship or inheritance.
  @
  #### Q33. What does not exist in TypeScript?
  @
  - [ ] Static Typing
  - [ ] Type Inference
  - [x] More primitive data types
  - [ ] Strict Null Checking
  @
  #### Q34. What is not an advantage of using TypeScript?
  @
  - [ ] fast, simple, easy to learn
  - [ ] similar to JavaScript
  - [ ] includes features from ES6 and ES7
  - [x] supports abstract classes
  @
  #### Q35. When a type combines two or more other types into one with '&', it is an example of?
  @
  - [x] intersection
  - [ ] union
  - [ ] generics
  - [ ] interface
  @
  #### Q36.What are type aliases?
  @
  - [x] new, meaningful names for types
  - [ ] new, meaningful names for intersections
  - [ ] a type of interface
  - [ ] new, meaningful names for a classes
  @
  #### Q37. What is a correct example of a tuple?
  @
  - [ ] number[][]
  - [ ] string[string, string]
  - [x] [number, number]
  - [ ] string, number[string, number]
  @
  #### Q38. What  flag to the TypeScript (tsc) compiler throws a type error if you try to use undefined where a concrete value is expected?
  @
  - [ ] --strictNullCheck
  - [ ] --strictUndefinedCheck
  - [ ] --strictUndefinedChecks
  - [x] --strictNullChecks
  @
  #### Q39.How to make object properties immutable in TypeScript?
  @
  - [x] use readonly before properties
  - [ ] use restricted before properties
  - [ ] use protected before properties
  - [ ] use immute before properties
  @
  #### Q40. Which forces class to provide code for methods and properties from the parent?
  @
  - [ ] extends
  - [ ] interface
  - [ ] type definition
  - [x] implements
  @
  #### Q41. Which utility type constructs a type with all properties of Type set to optional?
  @
  - [x] Partial<Type>
  - [ ] Required<Type>
  - [ ] Readonly<Type> 
  - [ ] Record<Keys, Type>
  @
  #### Q42. Which utility type 	constructs a type consisting of all properties of Type set to required?
  @
  - [ ] Partial<Type>
  - [x] Required<Type>
  - [ ] Readonly<Type> 
  - [ ] Record<Keys, Type>
  @
  #### Q43. Which utility type constructs a type with all properties of Type set to readonly?
  - [ ] Partial<Type>
  - [ ] Required<Type>
  - [x] Readonly<Type> 
  - [ ] Record<Keys, Type>
  @
  #### Q44. Which utility type constructs an object type with property keys are of type Keys, and values are Type?
  - [ ] Partial<Type>
  - [ ] Required<Type>
  - [ ] Readonly<Type> 
  - [x] Record<Keys, Type>
`;

  const dataArray = data.split("####").slice(1);

  return dataArray[Math.floor(Math.random() * dataArray.length)];
};

export default giveRandomTypeScriptQuestion;
