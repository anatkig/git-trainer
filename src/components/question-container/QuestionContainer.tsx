import React, { useEffect, useState } from "react";
import giveRandomQuestion from "../../questions/giveRandomQuestion";
import "./question-container.css";

const QuestionContainer = ({
  totalCounter,
  setTotalCounter,
  topic,
}: {
  totalCounter: [number, number];
  setTotalCounter: React.Dispatch<[number, number]>;
  topic: string;
}) => {
  const [showExplanation, setShowExplanation] = useState("none");
  const [
    [questionArray, optionsArray, additionToQuestion, explanation],
    setQuestion,
  ] = useState(giveRandomQuestion());
  const [answerMode, setAnswerMode] = useState(false);
  const [counterOfCorrect, setCounterOfCorrect] = useState(0);
  const [counterOfAttempts, setCounterOfAttempts] = useState(0);

  useEffect(() => {
    setQuestion(giveRandomQuestion());
    setCounterOfCorrect(0);
    setCounterOfAttempts(0);
  }, [topic]);

  const handleAnswerButtonClick = (event: React.MouseEvent, answer: string) => {
    setCounterOfAttempts(counterOfAttempts + 1);
    if (localStorage.getItem(`total${topic}`)) {
      const kept = JSON.parse(localStorage.getItem(`total${topic}`) as string);

      setTotalCounter([kept[0], kept[1] + 1]);

      localStorage.setItem(
        `total${topic}`,
        JSON.stringify([kept[0], kept[1] + 1])
      );
    } else {
      setTotalCounter([counterOfCorrect, 1]);
      localStorage.setItem(
        `total${topic}`,
        JSON.stringify([counterOfCorrect, 1])
      );
    }
    setShowExplanation("block");
    if (!answer.includes("[x]")) {
      event.currentTarget.setAttribute("style", "background:rgb(255,100,0)");
    } else {
      setCounterOfCorrect(counterOfCorrect + 1);

      const kept = JSON.parse(localStorage.getItem(`total${topic}`) as string);

      setTotalCounter([kept[0] + 1, kept[1]]);
      localStorage.setItem(
        `total${topic}`,
        JSON.stringify([kept[0] + 1, kept[1]])
      );
    }
    setAnswerMode(true);
  };
  const handleNextButtonClick = () => {
    setQuestion(giveRandomQuestion());
    setAnswerMode(false);
    setShowExplanation("none");
  };
  return (
    <div id="question-container">
      <div id="counter">
        {" "}
        <div>
          Current: {counterOfCorrect}/{counterOfAttempts} -{" "}
          <strong>
            {" "}
            {counterOfCorrect > 0
              ? Math.floor((counterOfCorrect / counterOfAttempts) * 100)
              : 0}
            %{" "}
          </strong>
        </div>
        <div>
          Total: {totalCounter[0]}/{totalCounter[1]}-{" "}
          <strong>
            {" "}
            {totalCounter[0] > 0
              ? Math.floor((totalCounter[0] / totalCounter[1]) * 100)
              : 0}
            %{" "}
          </strong>
        </div>
      </div>
      <div id="question">{questionArray[0]}</div>
      <div id="addition-to-question">
        {additionToQuestion.map((addition: string, index: number) => (
          <div key={addition + index}>{addition}</div>
        ))}
      </div>
      <div id="answers">
        <ul>
          {optionsArray &&
            optionsArray.map((answer: string, index: number) => (
              <li className="answer-option" key={answer + index}>
                <button
                  onClick={(event: React.MouseEvent) =>
                    handleAnswerButtonClick(event, answer)
                  }
                  style={{
                    background:
                      answerMode && answer.includes("[x]") ? "lightgreen" : "",
                  }}
                >
                  {answer.slice(answer.indexOf("]") + 1)}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div id="explanation" style={{ display: showExplanation }}>
        {explanation.map((element: string, index: number) => (
          <div key={element + index}>{element}</div>
        ))}
      </div>
      <div style={{ display: showExplanation }}>
        <button id="next-button" onClick={handleNextButtonClick}>
          Next=&gt;
        </button>
      </div>
    </div>
  );
};

export default QuestionContainer;
