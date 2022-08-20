import { skillsToFunctions } from '../constants/constants';
import { SkillToFuncMapType } from '../types/types';
import shuffle from '../utils/utilFuncs';

const giveRandomQuestion = (dataBlockNumber: number) => {
  const topic = localStorage.getItem('topic') || 'Git';

  // const question = skillsToFunctions[topic as keyof SkillToFuncMapType](dataBlockNumber);

  const question = ` #### Q19. What is the best semantic markup for the sentence shown?
  @@
    '''
    On July 21, 1969, Neil Armstrong said, "One small step for man, one giant leap for mankind."
    '''
  @@
    - [x] A
    '''html
    <p>
      On <time datetime="1969-07-21">July 21, 1969</time>, Neil Armstrong said,
      <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
        >One small step for man, one giant leap for mankind.</q
      >
    </p>
    '''
    - [ ] B
    '''html
    <p>
      On July 21, 1969, Neil Armstrong said,
      <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
        >"One small step for man, one giant leap for mankind."</q
      >
    </p>
    '''
    - [ ] C
    '''html
    <p>
      On July 21, 1969, Neil Armstrong said,
      <q>"One small step for man, one giant leap for mankind."</q>
    </p>
    '''
    - [ ] D
    '''html
    <p>
      On <time datetime="07-21-1969">July 21, 1969</time>, Neil Armstrong said,
      <q cite="https://www.hq.nasa.gov/alsj/a11l/a11.html"
        >One small step for man, one giant leap for mankind.</q
      >
    </p>
    '''
  @@`;

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

  return [questionArray, optionsArray, additionToQuestion, explanation];
};

export default giveRandomQuestion;
