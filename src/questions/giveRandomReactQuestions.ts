import randomQuestionLogic from '../utils/randomQuesionLogic';

const giveRandomReactQuestion = (dataBlockNumber: number) => {
  const data = `

  #### Q1. If you want to import just the Component from the React library, what syntax do you use?
@@
  - [ ] 'import React.Component from 'react''
  - [ ] 'import [ Component ] from 'react''
  - [ ] 'import Component from 'react''
  - [x] 'import { Component } from 'react''
@@
  #### Q2. If a function component should always render the same way given the same props, what is a simple performance optimization available for it?
@@
  - [x] Wrap it in the 'React.memo' higher-order component.
  - [ ] Implement the 'useReducer' Hook.
  - [ ] Implement the 'useMemo' Hook.
  - [ ] Implement the 'shouldComponentUpdate' lifecycle method.
@@
  #### Q3. How do you fix the syntax error that results from running this code?
@@
  '''javascript
  const person =(firstName, lastName) =>
  {
    first: firstName,
    last: lastName
  }
  console.log(person("Jill", "Wilson"))
  '''
@@
  - [x] Wrap the object in parentheses.
  - [ ] Call the function from another file.
  - [ ] Add a return statement before the first curly brace.
  - [ ] Replace the object with an array.
@@
  #### Q4. If you see the following import in a file, what is being used for state management in the component?
@@
  'import React, {useState} from 'react';'
@@
  - [x] React Hooks
  - [ ] stateful components
  - [ ] math
  - [ ] class components
@@
  #### Q5. Using object literal enhancement, you can put values back into an object. When you log person to the console, what is the output?
@@
  '''javascript
  const name = 'Rachel';
  const age = 31;
  const person = { name, age };
  console.log(person);
  '''
@@
  - [ ] '{{name: "Rachel", age: 31}}'
  - [x] '{name: "Rachel", age: 31}'
  - [ ] '{person: "Rachel", person: 31}}'
  - [ ] '{person: {name: "Rachel", age: 31}}'
@@
  #### Q6. What is the testing library most often associated with React?
@@
  - [ ] Mocha
  - [ ] Chai
  - [ ] Sinon
  - [x] Jest
@@
  #### Q7. To get the first item from the array ("cooking") using array destructuring, how do you adjust this line?
@@
  '''javascript
  const topics = ['cooking', 'art', 'history'];
  '''
@@
  - [ ] 'const first = ["cooking", "art", "history"]'
  - [ ] 'const [] = ["cooking", "art", "history"]'
  - [ ] 'const [, first]["cooking", "art", "history"]'
  - [x] 'const [first] = ["cooking", "art", "history"]'
@@
  #### Q8. How do you handle passing through the component tree without having to pass props down manually at every level?
@@
  - [ ] React Send
  - [ ] React Pinpoint
  - [ ] React Router
  - [x] React Context
@@
  #### Q9. What should the console read when the following code is run?
@@
  '''javascript
  const [, , animal] = ['Horse', 'Mouse', 'Cat'];
  console.log(animal);
  '''
@@
  - [ ] Horse
  - [x] Cat
  - [ ] Mouse
  - [ ] undefined
@@
  #### Q10. What is the name of the tool used to take JSX and turn it into createElement calls?
@@
  - [ ] JSX Editor
  - [ ] ReactDOM
  - [ ] Browser Buddy
  - [x] Babel
@@
  #### Q11. Why might you use useReducer over useState in a React component?
@@
  - [ ] when you want to replace Redux
  - [x] when you need to manage more complex state in an app
  - [ ] when you want to improve performance
  - [ ] when you want to break your production app
@@
  #### Q12. Which props from the props object is available to the component with the following syntax?
@@
  '''javascript
  <Message {...props} />
  '''
@@
  - [ ] any that have not changed
  - [x] all of them
  - [ ] child props
  - [ ] any that have changed
@@
  #### Q13. Consider the following code from React Router. What do you call :id in the path prop?
@@
  '''javascript
  <Route path="/:id" />
  '''
@@
  - [ ] This is a route modal
  - [x] This is a route parameter
  - [ ] This is a route splitter
  - [ ] This is a route link
@@
  #### Q14. If you created a component called Dish and rendered it to the DOM, what type of element would be rendered?
@@
  '''javascript
  function Dish() {
    return <h1>Mac and Cheese</h1>;
  }
@@
  ReactDOM.render(<Dish />, document.getElementById('root'));
  '''
@@
  - [ ] 'div'
  - [ ] section
  - [ ] component
  - [x] 'h1'
@@
  #### Q15. What does this React element look like given the following function? (Alternative: Given the following code, what does this React element look like?)
@@
  '''javascript
  React.createElement('h1', null, "What's happening?");
  '''
@@
  - [ ] '<h1 props={null}>What's happening?</h1>'
  - [x] '<h1>What's happening?</h1>'
  - [ ] '<h1 id="component">What's happening?</h1>'
  - [ ] '<h1 id="element">What's happening?</h1>'
@@
  #### Q16. What property do you need to add to the Suspense component in order to display a spinner or loading state?
@@
  '''javascript
  function MyComponent() {
    return (
      <Suspense>
        <div>
          <Message />
        </div>
      </Suspense>
    );
  }
  '''
@@
  - [ ] lazy
  - [ ] loading
  - [x] fallback
  - [ ] spinner
@@
  #### Q17. What do you call the message wrapped in curly braces below?
@@
  '''javascript
  const message = 'Hi there';
  const element = <p>{message}</p>;
  '''
@@
  - [ ] a JS function
  - [ ] a JS element
  - [x] a JS expression
  - [ ] a JSX wrapper
@@
  #### Q18. What can you use to handle code splitting?
@@
  - [ ] 'React.memo'
  - [ ] 'React.split'
  - [x] 'React.lazy'
  - [ ] 'React.fallback'
@@
  #### Q19. When do you use 'useLayoutEffect'?
@@
  - [ ] to optimize for all devices
  - [ ] to complete the update
  - [ ] to change the layout of the screen
  - [x] when you need the browser to paint before the effect runs
@@
  #### Q20. What is the difference between the click behaviors of these two buttons (assuming that this.handleClick is bound correctly)?
@@
  '''javascript
  A. <button onClick={this.handleClick}>Click Me</button>
  B. <button onClick={event => this.handleClick(event)}>Click Me</button>
  '''
@@
  - [ ] Button A will not have access to the event object on click of the button.
  - [ ] Button B will not fire the handler this.handleClick successfully.
  - [ ] Button A will not fire the handler this.handleClick successfully.
  - [x] There is no difference.
@@
  #### Q21. How do you destructure the properties that are sent to the Dish component?
@@
  '''javascript
  function Dish(props) {
    return (
      <h1>
        {props.name} {props.cookingTime}
      </h1>
    );
  }
  '''
@@
  - [ ] 'function Dish([name, cookingTime]) { return <h1>{name} {cookingTime}</h1>; }'
  - [x] 'function Dish({name, cookingTime}) { return <h1>{name} {cookingTime}</h1>; }'
  - [ ] 'function Dish(props) { return <h1>{name} {cookingTime}</h1>; }'
  - [ ] 'function Dish(...props) { return <h1>{name} {cookingTime}</h1>; }'
@@
  #### Q22. When might you use 'React.PureComponent'?
@@
  - [ ] when you do not want your component to have props
  - [ ] when you have sibling components that need to be compared
  - [x] when you want a default implementation of 'shouldComponentUpdate()'
  - [ ] when you do not want your component to have state
@@
  #### Q23. Why is it important to avoid copying the values of props into a component's state where possible?
@@
  - [ ] because you should never mutate state
  - [ ] because 'getDerivedStateFromProps()' is an unsafe method to use
  - [x] because you want to allow a component to update in response to changes in the props
  - [ ] because you want to allow data to flow back up to the parent
@@
  #### Q24. What is the children prop?
@@
  - [ ] a property that adds child components to state
  - [x] a property that lets you pass components as data to other components
  - [ ] a property that lets you set an array as a property
  - [ ] a property that lets you pass data to child elements
@@
  #### Q25. Which attribute do you use to replace innerHTML in the browser DOM?
@@
  - [ ] injectHTML
  - [x] dangerouslySetInnerHTML
  - [ ] weirdSetInnerHTML
  - [ ] strangeHTML
@@
  #### Q26. Which of these terms commonly describe React applications?
@@
  - [x] declarative
  - [ ] integrated
  - [ ] closed
  - [ ] imperative
@@
  #### Q27. When using webpack, why would you need to use a loader?
@@
  - [ ] to put together physical file folders
  - [x] to preprocess files
  - [ ] to load external data
  - [ ] to load the website into everyone's phone
@@
  #### Q28. A representation of a user interface that is kept in memory and is synced with the "real" DOM is called what?
@@
  - [x] virtual DOM
  - [ ] DOM
  - [ ] virtual elements
  - [ ] shadow DOM
@@
  #### Q29. You have written the following code but nothing is rendering. How do you fix this problem?
@@
  '''javascript
  const Heading = () => {
    <h1>Hello!</h1>;
  };
  '''
@@
  - [ ] Add a render function.
  - [x] Change the curly braces to parentheses or add a return statement before the 'h1' tag.
  - [ ] Move the 'h1' to another component.
  - [ ] Surround the 'h1' in a 'div'.
@@
  #### Q30. To create a constant in JavaScript, which keyword do you use?
@@
  - [x] const
  - [ ] let
  - [ ] constant
  - [ ] var
@@
  #### Q31. What do you call a React component that catches JavaScript errors anywhere in the child component tree?
@@
  - [ ] error bosses
  - [ ] error catchers
  - [ ] error helpers
  - [x] error boundaries
@@
  #### Q32. In which lifecycle method do you make requests for data in a class component?
@@
  - [ ] constructor
  - [x] componentDidMount
  - [ ] componentWillReceiveProps
  - [ ] componentWillMount
@@
  #### Q33. React components are composed to create a user interface. How are components composed?
@@
  - [ ] by putting them in the same file
  - [x] by nesting components
  - [ ] with webpack
  - [ ] with code splitting
@@
  #### Q34. All React components must act like **\_** with respect to their props.
@@
  - [ ] monads
  - [x] pure functions
  - [ ] recursive functions
  - [ ] higher-order functions
@@
  #### Q35. What is '[e.target.id]' called in the following code snippet?
@@
  '''javascript
  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }
  '''
@@
  - [ ] a computed property name
  - [ ] a set value
  - [x] a dynamic key
  - [ ] a JSX code string
@@
  #### Q36. What is the name of this component?
@@
  '''javascript
  class Clock extends React.Component {
    render() {
      return <h1>Look at the time: {time}</h1>;
    }
  }
  '''
@@
  - [x] Clock
  - [ ] It does not have a name prop.
  - [ ] React.Component
  - [ ] Component
@@
  #### Q37. What is sent to an 'Array.map()' function?
@@
  - [x] a callback function that is called once for each element in the array
  - [ ] the name of another array to iterate over
  - [ ] the number of times you want to call the function
  - [ ] a string describing what the function should do
@@
  #### Q38. Why is it a good idea to pass a function to 'setState' instead of an object?
@@
  - [ ] It provides better encapsulation.
  - [ ] It makes sure that the object is not mutated.
  - [ ] It automatically updates a component.
  - [x] 'setState' is asynchronous and might result in out of sync values.
@@
  **Explanation:** Because 'this.props' and 'this.state' may be updated asynchronously, you should not rely on their values for calculating the next state.
  Read [this article](https://medium.com/@@wisecobbler/using-a-function-in-setstate-instead-of-an-object-1f5cfd6e55d1)
@@
  #### Q39. What package contains the render() function that renders a React element tree to the DOM?
@@
  - [ ] 'React'
  - [x] 'ReactDOM'
  - [ ] 'Render'
  - [ ] 'DOM'
@@
  #### Q40. How do you set a default value for an uncontrolled form field?
@@
  - [ ] Use the 'value' property.
  - [x] Use the 'defaultValue' property.
  - [ ] Use the 'default' property.
  - [ ] It assigns one automatically.
@@
  #### Q41. What do you need to change about this code to get it to run?
@@
  '''js
  class clock extends React.Component {
    render() {
      return <h1>Look at the time: {this.props.time}</h1>;
    }
  }
  '''
@@
  - [ ] Add quotes around the return value
  - [ ] Remove 'this'
  - [ ] Remove the render method
  - [x] Capitalize 'clock'
@@
  **Explanation:** In JSX, lower-case tag names are considered to be HTML tags.
  Read [this article](https://reactjs.org/docs/jsx-in-depth.html#html-tags-vs.-react-components)
@@
  #### Q42. Which Hook could be used to update the document's title?
@@
  - [x] 'useEffect(function updateTitle() { document.title = name + ' ' + lastname; });'
  - [ ] 'useEffect(() => { title = name + ' ' + lastname; });'
  - [ ] 'useEffect(function updateTitle() { name + ' ' + lastname; });'
  - [ ] 'useEffect(function updateTitle() { title = name + ' ' + lastname; });'
@@
  #### Q43. What can you use to wrap Component imports in order to load them lazily?
@@
  - [ ] 'React.fallback'
  - [ ] 'React.split'
  - [x] 'React.lazy'
  - [ ] 'React.memo'
@@
  #### Q44. How do you invoke setDone only when component mounts, using hooks?
@@
  '''javascript
  function MyComponent(props) {
    const [done, setDone] = useState(false);
@@
    return <h1>Done: {done}</h1>;
  }
  '''
@@
  - [ ] 'useEffect(() => { setDone(true); });'
  - [x] 'useEffect(() => { setDone(true); }, []);'
  - [ ] 'useEffect(() => { setDone(true); }, [setDone]);'
  - [ ] 'useEffect(() => { setDone(true); }, [done, setDone]);'
@@
  #### Q45. Currently, 'handleClick' is being called instead of passed as a reference. How do you fix this?
@@
  '''javascript
  <button onClick={this.handleClick()}>Click this</button>
  '''
@@
  - [ ] '<button onClick={this.handleClick.bind(handleClick)}>Click this</button>'
  - [ ] '<button onClick={handleClick()}>Click this</button>'
  - [x] '<button onClick={this.handleClick}>Click this</button>'
  - [ ] '<button onclick={this.handleClick}>Click this</button>'
@@
  #### Q46. Which answer best describes a function component?
@@
  - [ ] A function component is the same as a class component.
  - [x] A function component accepts a single props object and returns a React element.
  - [ ] A function component is the only way to create a component.
  - [ ] A function component is required to create a React component.
@@
  #### Q47. Which library does the 'fetch()' function come from?
@@
  - [ ] FetchJS
  - [ ] ReactDOM
  - [x] No library. 'fetch()' is supported by most browsers.
  - [ ] React
@@
  #### Q48. What will happen when this useEffect Hook is executed, assuming name is not already equal to John?
@@
  '''javascript
  useEffect(() => {
    setName('John');
  }, [name]);
  '''
@@
  - [ ] It will cause an error immediately.
  - [ ] It will execute the code inside the function, but only after waiting to ensure that no other component is accessing the name variable.
  - [x] It will update the value of name once and not run again until name is changed from the outside.
  - [ ] It will cause an infinite loop.
@@
  #### Q49. Which choice will not cause a React component to rerender?
@@
  - [ ] if the component calls 'this.setState(...)'
  - [ ] the value of one of the component's props changes
  - [ ] if the component calls 'this.forceUpdate()'
  - [x] one of the component's siblings rerenders
@@
  #### Q50. What is missting in the following definition?
  @@
  <?> are useful when you test how the components interact with external data, for example when you load JSON from an API.
   <?> will help you debug (when in React's Development mode) why your component is failing by printing helpful messages. 
  @@
  - [x] PropTypes
  - [ ] Typescript
  - [ ] ReactTypes
  - [ ] ReduxTypes
  @@
  #### Q51. React does not render two sibling elements unless they are wrapped in a fragment. Below is one way to render a fragment. What is the shorthand for this?
@@
  '''javascript
  <React.Fragment>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
  </React.Fragment>
  '''
@@
  - [ ] A
  '''javascript
  <...>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
  </...>
  '''
  - [ ] B
  '''javascript
  <//>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
  <///>
  '''
  - [x] C
  '''javascript
  <>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
  </>
  '''
  - [ ] D
  '''javascript
  <Frag>
    <h1>Our Staff</h1>
    <p>Our staff is available 9-5 to answer your questions</p>
  </Frag>
  '''
@@
  #### Q52. If you wanted to display the count state value in the component, what do you need to add to the curly braces in the 'h1'?
@@
  '''javascript
  class Ticker extends React.component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
    render() {
      return <h1>{}</h1>;
    }
  }
  '''
@@
  - [x] this.state.count
  - [ ] count
  - [ ] state
  - [ ] state.count
@@
  #### Q53. Per the following code, when is the Hello component displayed?
@@
  '''javascript
  const greeting = isLoggedIn ? <Hello /> : null;
  '''
@@
  - [ ] never
  - [x] when 'isLoggedIn' is true
  - [ ] when a user logs in
  - [ ] when the Hello function is called
@@
  #### Q54. In the following code block, what type is orderNumber?
@@
  '''javascript
  ReactDOM.render(<Message orderNumber="16" />, document.getElementById('root'));
  '''
@@
  - [x] string
  - [ ] boolean
  - [ ] object
  - [ ] number
@@
  #### Q55. You have added a style property to the 'h1' but there is an unexpected token error when it runs. How do you fix this?
@@
  '''javascript
  const element = <h1 style={ backgroundColor: "blue" }>Hi</h1>;
  '''
@@
  - [ ] 'const element = <h1 style="backgroundColor: "blue""}>Hi</h1>;'
  - [x] 'const element = <h1 style={{backgroundColor: "blue"}}>Hi</h1>;'
  - [ ] 'const element = <h1 style={blue}>Hi</h1>;'
  - [ ] 'const element = <h1 style="blue">Hi</h1>;'
@@
  #### Q56. Which function is used to update state variables in a React class component?
@@
  - [ ] 'replaceState'
  - [ ] 'refreshState'
  - [ ] 'updateState'
  - [x] 'setState'
@@
  #### Q57. Consider the following component. What is the default color for the star?
@@
  '''javascript
  const Star = ({ selected = false }) => <Icon color={selected ? 'red' : 'grey'} />;
  '''
@@
  - [ ] black
  - [ ] red
  - [x] grey
  - [ ] white
@@
  #### Q58. What is the difference between the click behaviors of these two buttons(assuming that this.handleClick is bound correctly)
@@
  '''javascript
    A. <button onClick=this.handleClick>Click Me</button>
    B. <button onClick={event => this.handleClick(event)}>Click Me</button>
  '''
@@
  - [ ] 'Button A will not have access to the event object on click of the button'
  - [x] 'Button A will not fire the handler this.handleClick successfully'
  - [ ] 'There is no difference'
  - [ ] 'Button B will not fire the handler this.handleClick successfully'
@@
  #### Q59. How would you add to this code, from React Router, to display a component called About?
@@
  '''javascript
  <Route path="/:id" />
  '''
@@
  - [x] A
  '''javascript
  <Route path="/:id">
    {' '}
    <About />
  </Route>
  '''
  - [ ] B
  '''javascript
  <Route path="/tid" about={Component} />
  '''
  - [ ] C
  '''javascript
  <Route path="/:id" route={About} />
  '''
  - [ ] D
  '''javascript
  <Route>
    <About path="/:id" />
  </Route>
  '''
@@
  #### Q60. Which class-based component is equivalent to this function component?
@@
  '''javascript
  const Greeting = ({ name }) => <h1>Hello {name}!</h1>;
  '''
@@
  - [ ] A
  '''javascript
  class Greeting extends React.Component {
    constructor() {
      return <h1>Hello {this.props.name}!</h1>;
    }
  }
  '''
  - [ ] B
  '''javascript
  class Greeting extends React.Component {
    <h1>Hello {this.props.name}!</h1>;
  }
  '''
  - [x] C
  '''javascript
  class Greeting extends React.Component {
    render() {
      return <h1>Hello {this.props.name}!</h1>;
    }
  }
  '''
  - [ ] D
  '''javascript
  class Greeting extends React.Component {
    render({ name }) {
      return <h1>Hello {name}!</h1>;
    }
  }
  '''
@@
  #### Q61. Give the code below, what does the second argument that is sent to the render function describe?
@@
  '''javascript
  ReactDOM.render(
    <h1>Hi<h1>,
      document.getElementById('root')
  )
  '''
@@
  - [x] where the React element should be added to the DOM
  - [ ] where to call the function
  - [ ] where the root component is
  - [ ] where to create a new JavaScript file
@@
  #### Q62. Why should you use React Router's Link component instead of a basic '<a>' tag in React?
@@
  - [ ] The link component allows the user to use the browser's 'Back' button.
  - [ ] There is no difference--the 'Link' component is just another name for the '<a>' tag.
  - [ ] The '<a>' tag will cause an error when used in React.
  - [x] The '<a>' tag triggers a full page reload, while the 'Link' component does not.
@@
  #### Q63. What is the first argument, 'x', that is sent to the 'createElement' function?
@@
  '''javascript
  React.createElement(x, y, z);
  '''
@@
  - [x] the element that should be created
  - [ ] the order in which this element should be placed on the page
  - [ ] the properties of the element
  - [ ] data that should be displayed in the element
@@
  #### Q64. Which class-based lifecycle method would be called at the same time as this effect Hook?
@@
  '''javascript
  useEffect(() => {
    // do things
  }, []);
  '''
@@
  - [ ] componentWillUnmount
  - [x] componentDidMount
  - [ ] render
  - [ ] componentDidUpdate
@@
  #### Q65. What is the name of this component?
@@
  '''javascript
  class Comp extends React.Component {
    render() {
      return <h1>Look at the time: {time}</h1>;
    }
  }
  '''
@@
  - [x] Comp
  - [ ] h1
  - [ ] React.Component
  - [ ] Component
@@
  This question might be an updated version of Q37.
@@
  #### Q66. When using a portal, what is the first argument?
@@
  '''javascript
  ReactDOM.createPortal(x, y);
  '''
@@
  - [ ] the current state
  - [x] the element to render
  - [ ] the App component
  - [ ] the page
@@
  **Explanation:**
  From official docs: [Portals](https://reactjs.org/docs/portals.html)
@@
  #### Q67. What is 'setCount'?
@@
  '''javascript
  const [count, setCount] = useState(0);
  '''
@@
  - [ ] the initial state value
  - [ ] a variable
  - [ ] a state object
  - [x] a function to update the state
@@
  **Reference:**
  From official docs: [Hooks-State](https://reactjs.org/docs/hooks-state.html#:~:text=If%20we%20want%20to%20update%20the%20current)
@@
  #### Q68. What is the use of map function below?
@@
  '''javascript
  const database = [user1:{},user2:{},user3:{}];
  database.map((user)=><h1>user.data</h1>);
  '''
@@
  - [ ] gives a map of all the entries in database
  - [x] returns a heading tag for every entry in the database containing it's data
  - [ ] returns one heading tag for all the entries in database
  - [ ] checks which entry in the database is suitable for heading tag
@@
  #### Q69. Describe what is happening in this code?
@@
  '''javascript
  const { name: firstName } = person;
  '''
@@
  - [ ] It is creating a new object that contains the same name property as the person object.
  - [ ] It is assigning the value of the person object's firstName property to a constant called name.
  - [ ] It is retrieving the value of person.name.firstName.
  - [x] It is assigning the value of the person object's name property to a constant called firstName.
@@
  #### Q70. What is wrong with this code?
@@
  '''javascript
  const MyComponent = ({ names }) => (
    <h1>Hello</h1>
    <p>Hello again</p>
  );
  '''
@@
  - [ ] React components cannot be defined using functions.
  - [x] React does not allow components to return more than one element.
  - [ ] The component needs to use the return keyword.
  - [ ] String literals must be surrounded by quotes.
@@
  #### Q71. When using a portal, what is the second argument?
@@
  '''javascript
  ReactDOM.createPortal(x, y);
  '''
@@
  - [ ] the App component
  - [ ] the page
  - [ ] the current state
  - [x] the DOM element that exists outside of the parent component
@@
  #### Q72. Given this code, what will be printed in the '<h1>' tag?
@@
  '''javascript
  const MyComponent = ({ children }) => (
    <h1>{children.length}</h1>
  );
  ...
  <MyComponent>
  <p>Hello</p>
  <p>Goodbye</p>
  </MyComponent>
  '''
@@
  - [ ] It will produce an error saying "cannot read property "length" of undefined."
  - [ ] 1
  - [ ] undefined
  - [x] 2
@@
  #### Q73. What is this pattern called?
@@
  '''javascript
  const [count, setCount] = useState(0);
  '''
@@
  - [ ] object destructuring
  - [x] array destructuring
  - [ ] spread operating
  - [ ] code pushing
@@
  #### Q74. What is the first file loaded by the browser in a basic React project?
@@
  - [ ] src/App.js
  - [ ] src/index.js
  - [ ] public/manifest.json
  - [x] public/index.html
@@
  #### Q75. The code below is rendering nothing, and there is an error that says "ReactDOM is not defined." How do you fix this issue?
@@
  '''javascript
  import React from 'react';
  import { render } from 'react-dom';
@@
  const element = <h1>Hi</h1>;
@@
  ReactDOM.render(element, document.getElementById('root'));
  '''
@@
  - [x] 'render(element, document.getElementById("root"));'
  - [ ] 'ReactDOM(element, document.getElementById("root"));'
  - [ ] 'renderDOM(element, document.getElementById("root"));'
  - [ ] 'DOM(element, document.getElementById("root"));'
@@
  #### Q76. In this component, how do you display whether the user was logged in or not?
@@
  '''javascript
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    return (
      <div>
        The user is:
      </div>
    );
  }
  '''
@@
  - [ ] 'The user is loggedIn ? logged in : not logged in.'
  - [ ] Write a function to check the login status.
  - [ ] 'The user is {isLoggedIn = "no"}.'
  - [x] 'The user is {isLoggedIn ? "logged in." : "not logged in"}.'
@@
  #### Q77. You are rendering a list with React when this warning appears in the console: "Warning: Each child in a list should have a unique 'key' prop." How do you fix this issue?
@@
  - [ ] Pass the name of each item as its key.
  - [ ] Add a key prop with the same value to each item the list.
  - [ ] Clear the console warnings.
  - [x] When iterating over the list items, add a unique property to each list item.
@@
  #### Q78. How would you generate the boilerplate code for a new app that you are building to collect underpants?
@@
  - [ ] npm create-react-app collect-underpants
  - [ ] npx start-app collect-underpants
  - [ ] react new collect-underpants
  - [x] npx create-react-app collect-underpants
@@
  [Source: React Docs](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app)
@@
  #### Q79. Add the code that will fire the photon torpedoes when the button is clicked.
@@
  '''javascript
  class StarTrekkin extends React.Component {
    firePhotonTorpedoes(e) {
      console.log('pew pew');
    }
    render() {
      return; // Missing code
    }
  }
  '''
@@
  - [ ] '<button onClick={firePhotonTorpedoes()}>Pew Pew</button>'
  - [ ] '<button onClick={firePhotonTorpedoes}>Pew Pew</button>'
  - [ ] '<button onClick={this.firePhotonTorpedoes()}>Pew Pew</button>'
  - [x] '<button onClick={this.firePhotonTorpedoes}>Pew Pew</button>'
@@
  [Source: React Docs](https://reactjs.org/docs/handling-events.html)
@@
  #### Q80. What is the process of deciding whether an update is necessary?
@@
  - [ ] shadow DOM
  - [ ] fiber
  - [x] reconciliation
  - [ ] setting state
@@
  #### Q81. React is an open-source project but is maintained by which company?
@@
  - [ ] Intuit
  - [ ] Twitter
  - [x] Facebook
  - [ ] Snapchat
@@
  #### Q82. What command can you use to generate a React project?
@@
  - [ ] react-starter
  - [x] create-react-app
  - [ ] react-gen
  - [ ] react-start
@@
  #### Q83. What is the browser extension called that React developers use to debug applications?
@@
  - [x] React Developer Tools
  - [ ] React Tooling Add-on
  - [ ] React Codewatch
  - [ ] React Debug
@@
  #### Q84. Which tool is not part of Create React App?
@@
  - [ ] React
  - [x] jQuery
  - [ ] webpack
  - [ ] ReactDOM
@@
  #### Q85. What is the JavaScript syntax extension that is commonly used to create React elements?
@@
  - [ ] HTML
  - [ ] JavaScriptX
  - [x] JSX
  - [ ] React JavaScript
@@
  #### Q86. How might you check property types without using Flow or TypeScript?
@@
  - [ ] Check Manually.
  - [ ] Use 'prop-helper'.
  - [x] use 'prop-types'.
  - [ ] user 'checker-types'.
@@
  #### Q87. How do you add an id of heading to the following h1 element?
@@
  'let dish = <h1>Mac and Cheese</h1>; '
@@
  - [ ] 'let dish = <h1 id={heading}>Mac and Cheese</h1>;'
  - [x] 'let dish = <h1 id="heading">Mac and Cheese</h1>;'
  - [ ] 'let dish = <h1 id:"heading">Mac and Cheese</h1>;'
  - [ ] 'let dish = <h1 class="heading">Mac and Cheese</h1>;'
@@
  #### Q88. What value of button will allow you to pass the name of the person to be hugged?
@@
  '''
  class Huggable extends React.Component {
    hug(id) {
      console.log("hugging " + id);
    }
    render() {
      let name = "kitten";
      let button = // Missing code
      return button;
    }
  }
  '''
@@
  - [ ] '<button onClick={(name) => this.hug(name)}>Hug Button</button>;'
  - [ ] '<button onClick={this.hug(e, name)}>Hug Button</button>;'
  - [ ] '<button onClick={(e) => hug(name, e)}>Hug Button</button>;'
  - [x] '<button onClick={(e) => this.hug(name, e)}>Hug Button</button>;'
@@
  **Explanation:**
  This question test knowledge of react class components. You need to use 'this' in order to call methods declared inside class components.
@@
  #### Q89. What syntax do you use to create a component in React?
@@
  - [ ] a generator
  - [x] a function or a class
  - [ ] a service worker
  - [ ] a tag
@@
  'React Components are like functions that return HTML elements. Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML. Components come in two types, Class components and Function components.' [(Source)](https://reactjs.org/docs/components-and-props.html)
@@
  #### Q90. You want to disable a button so that it does not emit any events onClick. Which prop do you use to acomplish this?
@@
  - [ ] onBlur
  - [ ] onPress
  - [ ] defaultValue
  - [x] disabled
@@
  #### Q91. In this function, which is the best way to describe the Dish component?
@@
  '''
  function Dish() {
    return (
      <>
        <Ingredient />
        <Ingredient />
      </>
    );
  }
  '''
@@
  - [ ] child component
  - [x] parent component
  - [ ] nested component
  - [ ] sibling component
@@
  #### Q92. When does the componentDidMount function fire?
@@
  - [x] right after the component is added to the DOM
  - [ ] before the component is added to the DOM
  - [ ] right after the component is updated
  - [ ] right after an API call
@@
  #### Q93. What might you use webpack for?
@@
  - [ ] to fetch remote dependencies used by your app
  - [x] to split your app into smaller chunks that can be more easily loaded by the browser
  - [ ] to format your code so that it is more readable
  - [ ] to ensure your app is not vulnerable to code injection
@@
  #### Q94. When using the React Developer Tools Chrome extension, what does it mean if the React icon is red?
@@
  - [x] You are using the development build of React.
  - [ ] You are using the production build of React.
  - [ ] You are using webpack.
  - [ ] You are using Create React App.
@@
  [Reference](https://teamtreehouse.com/community/hey-why-the-logo-of-react-developer-tools-appears-in-red)
@@
  #### Q95. How would you modify the constructor to fix this error: "ReferenceError: Must call super constructor in derived class before accessing 'this'..."?
@@
  '''
  class TransIsBeautiful extends React.Component {
    constructor(props){
    // Missing line
    console.log(this) ;
    }
    ...
  }
  '''
@@
  - [ ] render(props);
  - [x] super(props);
  - [ ] super(this);
  - [ ] this.super();
@@
  #### Q96. Which language can you not use with React?
@@
  - [x] Swift.
  - [ ] JSX.
  - [ ] Javascipt.
  - [ ] TypeScript.
@@
  #### Q97. This code is part of an app that collects Pokemon. How would you print the list of the ones collected so far?
@@
  '''javascript
  constructor(props) {
      super(props);
      this.state = {
          pokeDex: []
      };
  }
  '''
@@
  - [ ] console.log(props.pokeDex);
  - [ ] console.log(this.props.pokeDex);
  - [ ] console.log(pokeDex);
  - [x] console.log(this.state.pokeDex);
@@
  [Reference](https://www.digitalocean.com/community/tutorials/how-to-manage-state-on-react-class-components#step-3-setting-state-from-a-static-value)
@@
  #### Q98. What would be the result of running this code?
@@
  '''javascript
  function add(x = 1, y = 2) {
    return x + y;
  }
@@
  add();
  '''
@@
  - [ ] null
  - [x] 3
  - [ ] 0
  - [ ] undefined
@@
  ![image](https://user-images.githubusercontent.com/62549240/160531605-bf8790d5-5eb9-4291-a9bd-4232f2fd7b6e.png)
@@
  #### Q99. Why might you use a React.ref?
@@
  - [ ] to refer to another JS file
  - [ ] to bind the function
  - [ ] to call a function
  - [x] to directly access the DOM node
@@
  [Reference](https://reactjs.org/docs/refs-and-the-dom.html)
@@
  #### Q100. What pattern is being used in this code?
@@
  '''javascript
  const { tree, lake } = nature;
  '''
@@
  - [ ] function defaults
  - [ ] array destructuring
  - [ ] PRPL pattern
  - [x] destructuring assignment
@@
  [Reference](https://javascript.info/destructuring-assignment)
  @@
  #### Q101. What should we put to the following gaps in order to render the component correctly?
  @@
  function FancyBorder({<?>}) {
    return (
      <div>
        {<?>}   
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <div>Dorime</div>
      </FancyBorder>
    );
  }
  
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<WelcomeDialog />);
@@
- [x] children 
- [ ] any meaningful word
- [ ] props
- [ ] props.child
  @@
  #### Q102. What is a render prop?
  @@
  - [x] a technique for sharing code between React components using a prop whose value is a function
  - [ ] a prop  of a component where you can pass objects
  - [ ] a technique for sharing code using a prop whose value is a component
  - [ ] a prop for rendering into ReactDom
  @@
  A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.
  @@
  #### Q103. What is missing in the following code?
  @@
  class NameWrapper extends Component {
    state = { 
       name: 'Dan Abramov' 
    };
    render() {
      <?>
    }
  }
  const Name = () => (
    <NameWrapper render={name => <h2>Hi, {name}!</h2>} />
  );
  @@
  - [x] return this.props.render(this.state.name);
  - [ ] return render(this.state.name);
  - [ ] return this.props.render(state.name);
  - [ ] return render(name);
  @@
  #### Q104. What was replaced in react-router-dom version 6?
  @@
  - [x] Switch 
  - [ ] HashRouter
  - [ ] Nothing  
  - [ ] Routes
  @@
  #### Q105. What is RTK Query?
  @@
  - [x]  a powerful data fetching and caching tool.
   It is designed to simplify common cases for loading data in a web application, eliminating the need to hand-write data fetching & caching logic yourself.
  - [ ] a pattern and library for managing and updating application state. 
  - [ ] a recommended approach for writing Redux logic. It contains packages and functions that we think are essential for building a Redux app. 
  - [ ] a set of tools that helps simplify Redux development.
   It includes utilities for creating and managing Redux stores, as well as for writing Redux actions and reducers.
  @@
  #### Q106. What are the in three fundamental principles of Redux?
  @@
  - [x] <Changes are made with pure functions> <Single source of truth​> <State is read-only​ >
  - [ ] <Changes are made with pure functions> <Unidirectional directional data flow​> <State is immutable​ >
  - [ ] <Changes are made with predefined functions> <Single source of truth​> <State is read-only​ >
  - [ ] <Changes are made with pure functions> <Single source of truth​> <State cannot be accessed from outside​ >
  @@
  #### Q107. Which hook does this?
  @@
  Accepts a value and returns a new copy of the value that will defer to more urgent updates. 
  If the current render is the result of an urgent update, like user input, React will return the previous value and then render the new value after the urgent render has completed.
  @@
  - [x] useDeferredValue
  - [ ] useTransition
  - [ ] useSyncExternalStore
  - [ ] useImperativeHandle
  @@
  #### Q108. Which hook does this?
  @@
  Customizes the instance value that is exposed to parent components when using ref. As always, imperative code using refs should be avoided in most cases.
  It should be used with forwardRef.
  @@
  - [x] useImperativeHandle
  - [ ] useTransition
  - [ ] useSyncExternalStore
  - [ ] useDeferredValue
  @@
  useImperativeHandle(ref, createHandle, [deps])

  function FancyInput(props, ref) {
    const inputRef = useRef();
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      }
    }));
    return <input ref={inputRef} ... />;
  }
  FancyInput = forwardRef(FancyInput);
  @@
  #### Q109. Which hook does this?
  @@
  Returns a stateful value for the pending state of the transition, and a function to start it.  Lets you mark updates in the provided callback as transitions.
  @@
  - [x] useTransition
  - [ ] useImperativeHandle
  - [ ] useSyncExternalStore
  - [ ] useDeferredValue
  @@
  #### Q110. The React.lazy function lets you render a dynamic import as a regular component. What is missing  in the following code?
  @@
  const OtherComponent = React.lazy(<?> import('./OtherComponent'));
  @@
  - [x] () => 
  - [ ] props
  - [ ] render
  - [ ] children
  @@
#### Q111. Why does createStore take a state object as its second argument given that the root reducer has the ability to return the initial state?

@@
- [x] This argument is used to initialize the store with a saved state, either retrieved from the server or stored on the client.
- [ ] This argument needs to be supplied when using middleware.
- [ ] This argument provides a fixed state value that cannot be changed by reducers, which is useful for testing.
- [ ] This argument is merged with the initial state returned by the root reducer.
@@
#### Q112. Your application has a problem. When a user clicks a button, a DOM event is caught by a listener set up by your application. The listener dispatches an action, and a reducer that is triggered by this action makes an AJAX call and updates the state. Upon seeing that the state is updated, the view updates as well. What is the problem here?
@@
- [x] Reducers are not allowed to generate side effects.
- [ ] First the state should update, then the reducer should trigger.
- [ ] The view should update before the state is updated, not after.
- [ ] AJAX calls are not permitted anywhere inside a Redux application.
@@
 #### Q113. How is an immutable object defined?
@@
- [x] Properties can neither be added, deleted nor modified.
- [ ] Properties can be added but not deleted.
- [ ] Properties can be deleted but not added.
- [ ] Properties can be added and deleted, but not modified.
@@
 #### Q114. Which method do you need to use to send actions to the store?
@@
- [x] dispatch<br>
- [ ] apply<br>
- [ ] send<br>
- [ ] execute<br>
@@
 #### Q115. How can you obtain the current state?
@@
- [x] Using the  Store.getState function
- [ ] By keeping a reference to the state object
- [ ] By using the state argument in a callback passed to Store.subscribe
- [ ] Using the globally available  state function
@@
 #### Q116. Given a reducer called reduce and two middleware functions, f and g, how do you configure the store to use both middleware functions?
@@
- [x] createStore(reduce, preloadedState, applyMiddleware(f, g))
- [ ] It isn't possible as only a single middleware can be applied to a store.
- [ ] createStore(applyMiddleware(g, f, reduce), preloadedState)
- [ ] store.applyMiddleware(f); store.applyMiddleware(g);
@@
#### Q117. You are troubleshooting a complex application in which many actions are dispatched on a regular basis. You are able to consistently reproduce the bug, but then an unknown action conceals the bug a few seconds later. What is the best solution?
@@
- [x] Pause recording just after the bug appears
- [ ] Make a branch of the application that fires fewer actions
- [ ] Do your best to figure out the bug in the few seconds available
- [ ] Reclock your computer so that everything on it happens 100x slower
@@
 #### Q118. If your reselect selector is recomputing even though the input state hasn't changed, what is the most likely reason?

@@
- [x] There is a bug in a reducer which makes it return a new object even though there is no state change.
- [ ] There is a bug in one of the subscriber callbacks.
- [ ] There is a bug in middleware used by the store.
- [ ] There is a bug in the reselect library's memoization function.
@@
 #### Q119. What is the difference between redux-devtool and redux-devtools-extension?

@@
- [x] The former is a component that is included in an application, the latter is a browser extension.

- [ ] The former monitors Redux applications, the latter monitors generic applications.

- [ ] The former refers to older versions of Redux DevTools, the latter refers to newer versions.

- [ ] The former is the main library, the latter is a collection of enhancements.

@@
 #### Q120. In which of the following scenarios is a deep copy of an object impossible?
@@
- [x] One property of the object is a reference to itself.

- [ ] The object is a subtype of array.

- [ ] The object is only one layer deep (it is shallow).

- [ ] The object contains more than 2^16 properties.

@@
 #### Q121. What is the effect of creating an action?
@@
- [x] An action is a description of something that happened in the application. It has no effect unless dispatched.
- [ ] An action maintains the binding between a UI control and its value in the state object
- [ ] An action triggers a view update in response to state changes
- [ ] Creating an action updates the state
@@
 #### Q122. Which of the following is a design constraint of Redux?

@@
- [x] It enforces unidirectional data flow between the store and state observers.

- [ ] It has to be combined with another library like Immutable.js to support immutable data.

- [ ] It can only be used for applications with a simple state structure.

- [ ] It can only be used with React, not other frameworks.

@@
 #### Q123. Does Redux require all of the application state to be in the store?
@@
- [x] No, things like the internal state of UI components don't have to be in the store.
- [ ] No, and it's best practice to keep as much state outside the store as possible
- [ ] Yes, because all of the state has to be defined upfront when the store is initialized.
- [ ] Yes, by convention all of the state has to be in the store.
@@
 #### Q124. How will you initialize the store with saved state from localStorage?

@@
- [x] Retrieve the state fromlocalStorage and pass it as the second argument to createStore

- [ ] Use Store.getState immediately after creating the store, and modify the object it returns to match the saved state

- [ ] Retrieve the saved state in the root reducer and return it when the root reducer'sstate argument is undefined

- [ ] Write custom middleware to retrieve the saved state and use it as the initial state
@@
#### Q125. What will store.getState() return after the following code is executed?

@@
function reduce (state, action) {
    if (typeof state == 'undefined') {
        return { counter: 0 };
    }
    switch (action.type) {
        case 'INCREMENT':
            return { counter: state.counter + 1 };
        default: 
            return state;
    }
}
let store = Redux.createStore(reduce, { counter: -100 });

@@
- [x] { counter: -100 }

- [ ] undefined

- [ ] { counter: 1 }

- [ ] { counter: 0 }

@@
 #### Q126. Which of the following code snippets will shallow copy an object?
@@
- [x] a=&gt;Object.assign({ }, a)<br>
- [ ] a=&gt;({… []})<br>
- [ ] a=&gt;{ let b = a; return b;}<br>
- [ ] a=&gt;a<br>
@@
 #### Q127. Is a reducer allowed to update the DOM?
@@
- [x] No, the reducer has to be a pure function.
- [ ] Yes, but only if its action argument is the result of a UI event
- [ ] Yes, combining state and UI updates in one function improves locality.
- [ ] No, the reducer is only allowed to start server requests.
@@
 #### Q128. If you need to update some of the UI controls when the state changes, how can you achieve it?
@@
- [x] Connect subscribers to the store and update the UI controls when the relevant portion of the state changes.
- [ ] Enable the two-way data binding mode of the store, and initialize it with the relevant UI controls.
- [ ] Update the relevant UI controls in action creators prior to returning an action.
- [ ] Update the relevant UI controls when handling actions in reducers.
@@
 #### Q129. You are working on a social network-like application. The reducer which handles the user's list of friends is performing very slowly. Which of the following options is NOT a viable solution to the reducer's slow performance?
@@
- [x] Letting it modify the state directly
- [ ] Using shallow copying instead of deep copying
- [ ] Using object equality checking instead of deep checking (dirty checking)
- [ ] Modifying the reducer so the logic triggers in response to a narrower scope of actions
@@
 #### Q130. What is an action creator?
@@
- [x] A function that returns an action
- [ ] An object that can be cloned to produce an action
- [ ] A UI element with an event handler that triggers an action dispatch
- [ ] A store subscriber that dispatches actions to the store
@@
function addTodo(todo) {
  return {
    type: 'ADD_TODO',
    todo: todo
  }
}
With this in place, creating an action is simply a matter of calling the addTodo action creator and passing the todo (the payload) as an argument.
@@
#### Q131. What does useTransition return?
@@
 - [x] [isPending, startTransition]
 - [ ] [isLoading, setTransition]
 - [ ] [isPending, initTransition]
 - [ ] [isLoadiing, addTransition]
 @@
 #### Q132. What is the difference between useTransition and useDeferredValue?
 @@
 - [x] useTransition to wrap code which you have access to, useDeferredValue to wrap value received from the code you don't have access to
 - [ ] useDeferredValue to wrap code which you have access to, useTransition to wrap value received from the code you don't have access to
 - [ ] useTransition to wrap value which you have access to, useDeferredValue to wrap code received from the code you don't have access to
 - [ ] useDeferredValue to wrap value which you have access to, useTransition to wrap code received from the code you don't have access to
 @@
 They both are responsible for Concurrency in React. Concurrency can be defined as the ability to do numerous tasks at the same time.
 @@
 #### Q133. What is the purpose of isPending in useTransition?
 @@
 - [x] to show some fallback content while waiting for the main state update to complete
 - [ ] to show some content instead of the one
 - [ ] to check whether the main content has been updated
 - [ ] to check whether the main has been loaded
 @@
 isPending tells you whether there are currently some state updates that are still pending (hasn’t been performed yet by React, and is treated with lower priority
 @@
 #### Q134. What is in common between useTransitioin and useDeferredValue?
 @@
 These two hooks give you the crazy power of deciding on the <?> of a state update, or rather, to specify if an update is less important than others and put it aside in favour of more urgent ones
 @@
 - [x] priority
 - [ ] order
 - [ ] position
 - [ ] relevance
 @@
 #### Q135. What does useReducer return?
 @@
 - [x] [state, dispatch]
 - [ ] [state, setState]
 - [ ] [intialState, setDispatch]
 - [ ] [stateArray, dispatch]
 @@
 #### Q136. What parameters does useReducer take?
 @@
 - [x] (reducer, initialState)
 - [ ] (callback, initialState)
 - [ ] (callback, state)
 - [ ] (reductor, state)
 @@
 #### Q137. What parameters does reducer in useReducer take?
 @@
 - [x] (state, action)
 - [ ] (initialState, action)
 - [ ] (state, callback)
 - [ ] (state, actions)
 @@
  `;
  const dataArray = data.split('####').slice(1);

  const finalDataArray = randomQuestionLogic(dataArray, dataBlockNumber);

  return finalDataArray[Math.floor(Math.random() * finalDataArray.length)];
};

export default giveRandomReactQuestion;
