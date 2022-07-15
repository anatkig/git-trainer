import React from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import QuestionContainer from "./components/question-container/QuestionContainer";
import Statistics from "./components/statistics/Statistics";

function App() {
  const [topic, setTopic] = useState(localStorage.getItem("topic") || "Git");

  const [displayMode, setDisplayMode] = useState("questions");

  const handleClick = (skill: string) => {
    localStorage.setItem("topic", skill);
    setTopic(skill);
  };

  return (
    <div className="App">
      <Header
        handleClick={handleClick}
        topic={topic}
        displayMode={displayMode}
        setDisplayMode={setDisplayMode}
      />
      {displayMode === "questions" ? (
        <QuestionContainer topic={topic} />
      ) : (
        <Statistics topic={topic} />
      )}
    </div>
  );
}

export default App;
