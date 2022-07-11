import React from "react";
import "./App.css";
import giveRandomQuestion from "./questions/giveRandomQuestion";
import QuestionContainer from "./components/question-container/QuestionContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Git Questions</header>
      <QuestionContainer question={giveRandomQuestion()} />
      {giveRandomQuestion()}
    </div>
  );
}

export default App;
