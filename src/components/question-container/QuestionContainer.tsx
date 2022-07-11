import "./question-container.css";

const QuestionContainer = ({ question }: { question: string }) => {
  const questionArray = question.split("?");
  const answersArray = questionArray[1].trim().split(" - ");
  console.log(answersArray);

  return (
    <div id="question-container">
      <div id="question">{questionArray[0] + "?"}</div>
      <div id="answers">
        <ul>
          {answersArray.map((answer) => (
            <li className="answer-option" key={answer}>
              {answer}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default QuestionContainer;
