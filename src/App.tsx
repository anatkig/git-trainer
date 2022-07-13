import React from "react";
import "./App.css";
import giveRandomGitQuestion from "./questions/giveRandomGitQuestion";
import QuestionContainer from "./components/question-container/QuestionContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">Git Questions</header>
      <QuestionContainer randomQuestion={giveRandomGitQuestion} />
    </div>
  );
}

export default App;
