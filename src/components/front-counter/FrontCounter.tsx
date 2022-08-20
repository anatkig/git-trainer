import { useEffect, useState } from 'react';
import { skillsToFunctions } from '../../constants/constants';
import { SkillToFuncMapType } from '../../types/types';
import './front-counter.css';

const FrontCounter = ({
  counterOfCorrect,
  counterOfAttempts,
  topic,
}: {
  counterOfCorrect: number;
  counterOfAttempts: number;
  topic?: string;
}) => {
  const [persent, setPersent] = useState(0);
  const [totalCounter, setTotalCounter] = useState(
    localStorage.getItem(`total${topic}`)
      ? JSON.parse(localStorage.getItem(`total${topic}`) as string)
      : [0, 0]
  );
  const [level, setLevel] = useState('');

  useEffect(() => {
    if (topic) {
      const question = skillsToFunctions[topic as keyof SkillToFuncMapType](0);

      const currentTopicStatisticsQuestionsNum = question.split('$$$')[1];

      if (currentTopicStatisticsQuestionsNum) {
        setLevel(String(Math.floor(totalCounter[0] / Number(currentTopicStatisticsQuestionsNum))));
      }
    }
  }, [topic]);

  useEffect(() => {
    setTotalCounter(
      localStorage.getItem(`total${topic}`)
        ? JSON.parse(localStorage.getItem(`total${topic}`) as string)
        : [0, 0]
    );
  }, [topic]);

  useEffect(() => {
    setPersent(counterOfCorrect > 0 ? Math.floor((counterOfCorrect / counterOfAttempts) * 100) : 0);
  }, [counterOfCorrect, counterOfAttempts]);

  return (
    <div id="counter">
      {' '}
      <div>Right: {counterOfCorrect}</div>
      <div>Tries: {counterOfAttempts}</div>
      <div>
        Rate: <strong> {persent}% </strong>
      </div>
      {topic && (
        <div>
          Level: <strong>{level}</strong>
        </div>
      )}
    </div>
  );
};

export default FrontCounter;
