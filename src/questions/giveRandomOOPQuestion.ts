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
  @@`;

  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomOOPQuestion;
