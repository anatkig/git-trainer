import React, { useState } from "react";
import giveRandomQuestion from "../../questions/giveRandomQuestion";
import "./question-container.css";

const QuestionContainer = ({
  randomQuestion,
}: {
  randomQuestion: () => string;
}) => {
  const [showExplanation, setShowExplanation] = useState("none");
  const [question, setQuestion] = useState(giveRandomQuestion());
  const [answerMode, setAnswerMode] = useState(false);

  const questionArray = question
    .split("\n")
    .filter((question) => question.trim());

  const optionsArray = questionArray.filter(
    (element) => element.includes("[x]") || element.includes("[ ]")
  );
  const optionsStartIndex = questionArray.indexOf(optionsArray[0]);
  const optionEndIndex =
    questionArray.indexOf(optionsArray[optionsArray.length - 1]) + 1;

  const additionToQuestion = questionArray.slice(1, optionsStartIndex);
  const explanation = questionArray.slice(optionEndIndex);

  const handleAnswerButtonClick = (event: React.MouseEvent, answer: string) => {
    setShowExplanation("block");
    if (!answer.includes("[x]")) {
      event.currentTarget.setAttribute("style", "background:rgb(255,100,0)");
    }
    setAnswerMode(true);
  };
  const handleNextButtonClick = () => {
    setQuestion(randomQuestion());
    setAnswerMode(false);
  };

  return (
    <div id="question-container">
      <div id="question">{questionArray[0]}</div>
      <div id="addition-to-question">
        {additionToQuestion.map((addition) => (
          <div key={addition}>{addition}</div>
        ))}
      </div>
      <div id="answers">
        <ul>
          {optionsArray.map((answer) => (
            <li className="answer-option" key={answer}>
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
        {explanation.map((element) => (
          <div>{element}</div>
        ))}
      </div>
      <div>
        <button id="next-button" onClick={handleNextButtonClick}>
          Next=&gt;
        </button>
      </div>
    </div>
  );
};

export default QuestionContainer;
