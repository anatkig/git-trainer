import { skillsToFunctions } from '../constants/constants';
import { SkillToFuncMapType } from '../types/types';
import shuffle from '../utils/utilFuncs';

const giveRandomQuestion = (dataBlockNumber: number) => {
  const topic = localStorage.getItem('topic') || 'Git';

  const question = skillsToFunctions[topic as keyof SkillToFuncMapType](dataBlockNumber);

  const questionAndQuestionNumArr = question.split('$$$');

  const questionArray = questionAndQuestionNumArr[0]
    .split('@@')
    .filter((question: string) => question.trim());

  const options = questionArray?.filter(
    (element: string) => element.includes('[x]') && element.includes('[ ]')
  )[0];

  const optionsArray = options?.split('- ').slice(1);
  optionsArray && shuffle(optionsArray);

  const optionsStartIndex = questionArray.indexOf(options);
  const optionEndIndex = questionArray.indexOf(options) + 1;

  const additionToQuestion = questionArray.slice(1, optionsStartIndex);
  const explanation = questionArray.slice(optionEndIndex);

  const questionsNum = questionAndQuestionNumArr[1];

  localStorage.setItem(`${topic}questionsNum`, JSON.stringify(questionsNum));

  return [questionArray, optionsArray, additionToQuestion, explanation];
};

export default giveRandomQuestion;
