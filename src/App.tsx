import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import QuestionContainer from "./components/question-container/QuestionContainer";

function App() {
  const [topic, setTopic] = useState(localStorage.getItem("topic") || "Git");
  const [totalCounter, setTotalCounter] = useState(
    localStorage.getItem(`total${topic}`)
      ? JSON.parse(localStorage.getItem(`total${topic}`) as string)
      : [0, 0]
  );

  useEffect(() => {
    setTotalCounter(
      localStorage.getItem(`total${topic}`)
        ? JSON.parse(localStorage.getItem(`total${topic}`) as string)
        : [0, 0]
    );
  }, [topic]);

  const handleClick = (skill: string) => {
    localStorage.setItem("topic", skill);
    setTopic(skill);
  };

  return (
    <div className="App">
      <Header handleClick={handleClick} topic={topic} />
      <QuestionContainer
        totalCounter={totalCounter}
        setTotalCounter={setTotalCounter}
        topic={topic}
      />
    </div>
  );
}

export default App;
