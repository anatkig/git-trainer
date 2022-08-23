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

 #### Q29. Identify the operators which cannot be overloaded.
@@
- [x] Both A and B
- [ ] ?:
- [ ] .(dot operator)
- [ ] >>
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

 #### Q35. Choose the option below which can show polymorphism.
@@
- [x] Overloading &lt;&lt;
- [ ] Overloading ||
- [ ] Overloading &&
- [ ] Overloading +=
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

 #### Q39. Choose the option below which is used to free the memory allocated for an object in C++.
@@
- [x] delete
- [ ] Free()
- [ ] unallocate()
- [ ] collect
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

 #### Q47. Why is a virtual function mainly used to achieve?
@@
- [x] Runtime polymorphism
- [ ] Function code polymorphism
- [ ] Interpreter polymorphism
- [ ] Compile-time polymorphism
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

 #### Q51. Dynamic memory allocation can be done using?
@@
- [x] Both (a) and (b)
- [ ] calloc()
- [ ] malloc()
- [ ] create()
@@

 #### Q52. Total types of polymorphism in C++ are?
@@
- [x] 2
- [ ] 1
- [ ] 3
- [ ] 4
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

 #### Q62. Which type of inheritance is implemented in the following code below?
@@
- [x] Multiple inheritances
- [ ] Single inheritance
- [ ] Multilevel inheritance
- [ ] Hybrid inheritance
@@

 #### Q63. Choose the option below which is used to implement late binding.
@@
- [x] Virtual function
- [ ] Friend function
- [ ] Static function
- [ ] Const function
@@

 #### Q64. What is cout?
@@
- [x] Object
- [ ] Operator
- [ ] Function
- [ ] Macro
@@

 #### Q65. Choose the option below which describes the overloading of functions.
@@
- [x] Ad-hoc polymorphism
- [ ] Virtual polymorphism
- [ ] Pseudo polymorphism
- [ ] Transient polymorphism
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
@@
  `;

  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomOOPQuestion;
