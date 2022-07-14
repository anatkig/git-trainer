import { skillsToFunctions } from "../constants/constants";
import { SkillToFuncMapType } from "../types/types";

const giveRandomQuestion = () => {
  const topic = localStorage.getItem("topic") || "Git";

  const question = skillsToFunctions[topic as keyof SkillToFuncMapType]();

  const questionArray = question
    .split("@")
    .filter((question: string) => question.trim());

  const options = questionArray?.filter(
    (element: string) => element.includes("[x]") && element.includes("[ ]")
  )[0];

  const optionsArray = options?.split("- ").slice(1);

  const optionsStartIndex = questionArray.indexOf(options);
  const optionEndIndex = questionArray.indexOf(options) + 1;

  const additionToQuestion = questionArray.slice(1, optionsStartIndex);
  const explanation = questionArray.slice(optionEndIndex);

  return [questionArray, optionsArray, additionToQuestion, explanation];
};

export default giveRandomQuestion;
