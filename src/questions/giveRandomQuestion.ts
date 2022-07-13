import giveRandomGitQuestion from "./giveRandomGitQuestion";
import giveRandomCSSQuestion from "./giveRandomCSSQuestion";

const giveRandomQuestion = () => {
  const topic = localStorage.getItem("topic");

  const question: string =
    topic === "Git" ? giveRandomGitQuestion() : giveRandomCSSQuestion();

  const questionArray = question
    .split("@")
    .filter((question) => question.trim());

  const options = questionArray?.filter(
    (element) => element.includes("[x]") && element.includes("[ ]")
  )[0];
  const optionsArray = options?.split(" - ").slice(1);
  const optionsStartIndex = questionArray.indexOf(options);
  const optionEndIndex = questionArray.indexOf(options) + 1;

  const additionToQuestion = questionArray.slice(1, optionsStartIndex);
  const explanation = questionArray.slice(optionEndIndex);

  return [questionArray, optionsArray, additionToQuestion, explanation];
};

export default giveRandomQuestion;
