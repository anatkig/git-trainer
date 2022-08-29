import randomQuestionLogic from '../utils/randomQuesionLogic';

const giveRandomOOPQuestion = (dataBlockNumber: number) => {
  const data = `
  #### Q1. ___ was the first language to be developed as a purely object-oriented programming language? 
  @@  
  - [x] Smalltalk 
  - [ ] C++ 
  - [ ] PHP 
  - [ ] Java 
  @@  
  #### Q2. Who developed the first object-oriented programming language? 
  @@  
  - [x] Alan Kay 
  - [ ] Dennis Ritchie 
  - [ ] Andrea Ferro 
  - [ ] Adele Goldberg 
  @@  
  #### Q3. Which of the following is not a main feature of OOPs? 
  @@  
  - [ ] Encapsulation 
  - [ ] Polymorphism 
  - [x] Exception 
  - [ ] Abstraction 
  @@  
  #### Q4. Which feature of OOPs facilitates code reusability? 
  @@  
  - [ ] Abstraction 
  - [ ] Encapsulation 
  - [ ] Polymorphism 
  - [x] Inheritance 
  @@  
  #### Q5. Which language among the following supports classes, but does not support the concept of Polymorphism? 
  @@  
  - [ ] C++ programming language 
  - [ ] Java programming language 
  - [x] Ada programming language 
  - [ ] C# programming language 
  @@  
  #### Q6. What feature among the following is not right for OOPs? 
  @@  
  - [ ] Modularity 
  - [ ] Efficient Code 
  - [ ] Code reusability 
  - [x] Duplicate or Redundant Data 
  @@  
  #### Q7. ___ is the feature of the Object-oriented programming model which allows one class to derive features from another class? 
  @@  
  - [x] Inheritance 
  - [ ] Data hiding 
  - [ ] Encapsulation 
  - [ ] Polymorphism 
  @@  
  #### Q8. ____ is an object-oriented programming language but does not support all inheritance types. 
  @@  
  - [ ] Smalltalk 
  - [ ] Kotlin 
  - [x] Java 
  - [ ] C++ 
  @@  
  #### Q9. Which among the following operators can be used to show Polymorphism in CPP? 
  @@  
  - [x] Overloading << 
  - [ ] Overloading && 
  - [ ] Overloading || 
  - [ ] Overloading += 
  @@  
  #### Q10. Which among the following does not show or cannot be used, to show Polymorphism? 
  @@  
  - [x] Static member function 
  - [ ] Constructor Overloading 
  - [ ] Member function overloading 
  - [ ] Global member function 
  @@  
  #### Q11. Which among the following functions represent the concept of Polymorphism? 
  @@  
  - [ ] Class member function 
  - [x] Virtual function 
  - [ ] Inline function 
  - [ ] Undefined function 
  @@
  A virtual function is a member function that you expect to be redefined in derived classes.   
  @@
  #### Q12. Can you use C language to demonstrate Polymorphism? 
  @@  
  - [x] True 
  - [ ] False 
  @@  
  #### Q13. _ is the feature of OOPs which is responsible for binding data with their implementation as a single entity? 
  @@  
  - [ ] Polymorphism 
  - [ ] Inheritance 
  - [ ] Abstraction 
  - [x] Encapsulation 
  @@  
  #### Q14. Which superclass member won’t be accessible to the subclass? 
  @@  
  - [ ] Public member 
  - [ ] Protected member 
  - [x] Private member 
  - [ ] All of the mentioned 
  @@  
  #### Q15. State true or false: A Java application can be created without implementing the OOPs concept. 
  @@  
  - [ ] True 
  - [x] False 
  @@
   #### Q16. What is the implicit return type of constructor?
@@
- [x] A class object in which it is defined.
- [ ] No return type
- [ ] void
- [ ] None
@@

 #### Q17. When is the object created with a new keyword?
@@
- [x] At run time
- [ ] At compile time
- [ ] Depends on the code
- [ ] None
@@

 #### Q18. Identify the incorrect constructor type.
@@
- [x] Friend constructor
- [ ] Default constructor
- [ ] Parameterized constructor
- [ ] Copy constructor
@@

 #### Q19. Identify the scope resolution operator.
@@
- [x] ::
- [ ] :
- [ ] ?:
- [ ] None
@@

 #### Q20. Choose the option below which is not a member of the class.
@@
- [x] Friend function
- [ ] Static function
- [ ] Virtual function
- [ ] Const function
@@

 #### Q21. Total types of constructors in C++ are?
@@
- [x] 3
- [ ] 1
- [ ] 2
- [ ] 4
@@

 #### Q22. What is the number of parameters that a default constructor requires?
@@
- [x] 0
- [ ] 1
- [ ] 2
- [ ] 3
@@

 #### Q23. Data members and member functions of a class are private. default. True or False?
@@
- [x] True
- [ ] False
- [ ] Depends on code
- [ ] None
@@

 #### Q24. Under which pillar of OOPS do base class and derived class relationships come?
@@
- [x] Inheritance
- [ ] Polymorphism
- [ ] Encapsulation
- [ ] Abstraction
@@

 #### Q25. Which of the following functions can be inherited from the base class?
@@
- [x] None
- [ ] Constructor
- [ ] Destructor
- [ ] Static
@@

 #### Q26. Which of the following is not a type of inheritance?
@@
- [x] Distributed
- [ ] Multiple
- [ ] Multilevel
- [ ] Hierarchical
@@

 #### Q27. What is an object in c++?
@@
- [x] It is an instance of the class
- [ ] It is a function of class
- [ ] It is the data type of class
- [ ] It is part of the syntax of class.
@@

 #### Q28. Why is reusability a desirable feature?
@@
- [x] Decreases testing time
- [ ] Reduces compilation time
- [ ] Lowers maintenance cost
- [ ] None
@@
#### Q29. What is overloading?
@@
- [x] Overloading occurs when two or more methods in one class have the same method name but different parameters.
- [ ] Overloading occurs when two methods have the same method name and parameters. One of the methods is in the parent class, and the other is in the child class.
- [ ] Overloading allows a child class to provide the specific implementation of a method that is already present in its parent class.​
- [ ] Overloading occurs when two or more methods in one class have the same  parameters but different method name.
@@

 #### Q30. Another name of overloading is?
@@
- [x] Ad-hoc polymorphism
- [ ] Pseudo polymorphism
- [ ] Transient polymorphism
- [ ] Virtual polymorphism
@@

 #### Q31. By default, fields in a structure of a C program is?
@@
- [x] public
- [ ] Private
- [ ] protected
- [ ] None
@@

 #### Q32. On what basis is it determined, when a variable comes into existence in memory?
@@
- [x] Storage class
- [ ] Data type
- [ ] Scope
- [ ] All of the above
@@

 #### Q33. Identify the feature using which, one object can interact with another object.
@@
- [x] Message passing
- [ ] Message reading
- [ ] Data binding
- [ ] Data transfer
@@
 #### Q34. Total access specifiers in OOPS for C++ are?
@@
- [x] 3
- [ ] 1
- [ ] 2
- [ ] 4
@@

 #### Q35. What is overriding?
 @@
 Overloading occurs when two or more methods:
@@
- [x] Overriding occurs when two methods have the same method name and parameters. One of the methods is in the parent class, and the other is in the child class.
- [ ] Overriding occurs when two or more methods in one class have the same  parameters but different method name.
- [ ] Overriding occurs when two methods have the same method name and parameters. One of the methods is in the abstract class, and the other is in the child class.
- [ ] Overriding occurs when two or more methods in one class have the same method name but different parameters.
@@
Overriding allows a child class to provide the specific implementation of a method that is already present in its parent class.​
@@
 #### Q36. Select the following which shows the correct constructor.
@@
- [x] class_name()
- [ ] ()class_name
- [ ] -class_name
- [ ] ~class_name()
@@

 #### Q37. To access data members of a class, which of the following is used?
@@
- [x] Dot or arrow operator, as required
- [ ] Dot operator
- [ ] Arrow operator
- [ ] Dot, arrow, or direct call
@@

 #### Q38. Identify the feature, which is used to reduce the use of nested classes.
@@
- [x] Inheritance
- [ ] Binding
- [ ] Encapsulation
- [ ] Abstraction
@@
In object-oriented programming (OOP), an inner class or nested class is a class declared entirely within the body of another class or interface. It is distinguished from a subclass.
@@
#### Q39. What is a virtual function?
@@
- [x] a member function that you expect to be redefined in derived classes. 
- [ ] a member function which is planned but doesn't exist yet.
- [ ] a member function you don't expect to be redefined in derived classes.
- [ ] a member function you of an abstract class.
@@

 #### Q40. Identify the option below which is not a property of the object.
@@
- [x] Names
- [ ] Attributes
- [ ] Identity
- [ ] Properties
@@

 #### Q41. What type of inheritance does single-level inheritance support?
@@
- [x] Runtime inheritance
- [ ] Compile-time
- [ ] Multiple inheritances
- [ ] Language independent
@@
Single Level inheritance - A class inherits properties from a single class.
@@
 #### Q42. In which of the following is memory allocated for the objects?
@@
- [x] RAM
- [ ] ROM
- [ ] Cache
- [ ] HDD
@@

 #### Q43. How do encapsulation and abstraction differ?
@@
- [x] Binding and hiding
- [ ] Hiding and binding
- [ ] Hiding and hiding
- [ ] None
@@
Abstraction is the method of hiding the unwanted information.
Whereas encapsulation is a method to hide the data in a single entity or unit along with a method to protect information from outside.
@@
 #### Q44. Choose the option below which is shown by function overriding
@@
- [x] Polymorphism
- [ ] Abstraction
- [ ] Encapsulation
- [ ] Inheritance
@@

 #### Q45. Choose the option below for which instance of the class cannot be created.
@@
- [x] Abstract class
- [ ] Anonymous class
- [ ] Parent class
- [ ] Nested class
@@

 #### Q46. Identify the feature which can be implemented using encapsulation.
@@
- [x] Abstraction
- [ ] Encapsulation
- [ ] Polymorphism
- [ ] Inheritance
@@

 #### Q47. What is a virtual function mainly used to achieve?
@@
- [x] Runtime polymorphism
- [ ] Function code polymorphism
- [ ] Interpreter polymorphism
- [ ] Compile-time polymorphism
@@
A virtual function is a member function that you expect to be redefined in derived classes. 
@@

 #### Q48. Virtual functions should be defined in?
@@
- [x] Base class
- [ ] Derived class
- [ ] Both base and derived class
- [ ] None
@@

 #### Q49. Virtual function should be ________.
@@
- [x] public
- [ ] Private
- [ ] protected
- [ ] default
@@

 #### Q50. Choose whether True or False: The constructor function can be constant.
@@
- [x] False
- [ ] True
- [ ] Depends on implementation
- [ ] None
@@

 #### Q51. The mechanism by which storage/memory/cells can be allocated to variables during the run time is called Dynamic Memory Allocation. 
 Choose the advantages of using it?
@@
- [x] All of them.
- [ ] When we do not know how much amount of memory would be needed for the program beforehand.
When we want data structures without any upper limit of memory space.
- [ ] When you want to use your memory space more efficiently.
Example: If you have allocated memory space for a 1D array as array[20] and you end up using only 10 memory spaces then the remaining 10 memory spaces would be wasted and this wasted memory cannot even be utilized by other program variables.
Dynamically created lists insertions and deletions can be done very easily just by the manipulation of addresses whereas in case of statically allocated memory insertions and deletions lead to more movements and wastage of memory.
- [ ] When you want you to use the concept of structures and linked list in programming, dynamic memory allocation is a must.
@@
#### Q52. What is missing in the following statement?
@@
In object-oriented programming, a friend function, that is a "friend" of a given class, is a function that is given <?>.
@@
- [x] the same access as methods to private and protected data
- [ ] the same access as methods to private and public data
- [ ] the same access as methods to private and protected methods
- [ ] the same access as functions to private and protected data
@@
A friend function is declared by the class that is granting access, so friend functions are part of the class interface, like methods. 
Friend functions allow alternative syntax to use objects, for instance f(x) instead of x.f(), or g(x,y) instead of x.g(y). 
Friend functions have the same implications on encapsulation as methods.
@@
 #### Q53. Another name of the generic class is?
@@
- [x] Template class
- [ ] Final class
- [ ] Abstract class
- [ ] Efficient code
@@

 #### Q54. Choose the option below which overloads using the friend function.
@@
- [x] *
- [ ] ()
- [ ] ->
- [ ] =
@@

 #### Q55. Choose whether True or False: Object cannot be passed as a function.
@@
- [x] True
- [ ] False
- [ ] Depends on implementation
- [ ] None
@@

 #### Q56. Identify the pure object-oriented programming language among the following.
@@
- [x] SmallTalk
- [ ] C++
- [ ] Java
- [ ] Python
@@

 #### Q57. Identify the abstract data type among the following.
@@
- [x] class
- [ ] double
- [ ] int
- [ ] string
@@

 #### Q58. What are the total catch blocks that can be used using a single Try block?
@@
- [x] According to needs
- [ ] 1
- [ ] 2
- [ ] Maximum 256
@@

 #### Q59. Choose the incorrect option below which is not a type of constructor.
@@
- [x] Friend constructor
- [ ] Copy constructor
- [ ] Parameterized constructor
- [ ] Default constructor
@@

 #### Q60. Total instances of an abstract class that can be created?
@@
- [x] 0
- [ ] 1
- [ ] 4
- [ ] 8
@@

 #### Q61. Identify the option below which cannot be used with the term “virtual”.
@@
- [x] constructor
- [ ] destructor
- [ ] class
- [ ] Member function
@@

#### Q62. What is defined  here?
@@
<?> is used to free up the memory space allocated by the derived class object or instance while deleting instances of the derived class using a base class pointer object.
@@
- [x] virtual destructor
- [ ] garbage collector
- [ ] pointer unil
- [ ] memory reallocation

 #### Q63. Choose the option below which is used to implement late binding.
@@
- [x] Virtual function
- [ ] Friend function
- [ ] Static function
- [ ] Const function
@@
#### Q64. What is the difference between Early Binding and Late Binding? Choose the correct statements.
@@
A.In <?> functions, methods, variables and properties are detected and checked only at the run-time. 
The biggest advantages of <?> is that the Objects of this type can hold references to any object, but lack many of the advantages of early-bound objects
<?> implies that the compiler does not know what kind of object or actual type of an object or which methods or properties an object contains until run time.

B.<?> objects are basically a strong type objects or static type objects.  
The biggest advantage of using <?> is for performance and ease of development.
When perform <?>, an object is assigned to a variable declared to be of a specific object type. 

C.In <?> functions, methods, variables and properties are detected and checked only at the run-time. 
The biggest advantage of using <?> is for performance and ease of development.
<?> implies that the compiler does not know what kind of object or actual type of an object or which methods or properties an object contains until run time.
@@
- [x] A: Late Binding, B: Early Binding, C: wrong
- [ ] A: Early Binding, B: Late Binding, C: wrong
- [ ] A: wrong, B: Early Binding, C: Late Binding
- [ ] A: Late Binding, B: wrong, C: Early Binding
@@

 #### Q65. Choose the option below which describes the overloading of functions.
@@
- [x] Ad-hoc polymorphism
- [ ] Virtual polymorphism
- [ ] Pseudo polymorphism
- [ ] Transient polymorphism
@@
Ad hoc polymorphism is also known as function overloading or operator overloading because a polymorphic function can represent a number of unique and potentially heterogeneous implementations depending on the type of argument it is applied to.
@@
 #### Q66. Who developed object-oriented programming?
@@
- [x] Alan Kay
- [ ] Dennis Ritchie
- [ ] Charles Babbage
- [ ] Andrea Ferro
@@

 #### Q67. Which of the following is not an oops concept?
@@
- [x] Compilation
- [ ] Inheritance
- [ ] Polymorphism
- [ ] Encapsulation
  `;

  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomOOPQuestion;
