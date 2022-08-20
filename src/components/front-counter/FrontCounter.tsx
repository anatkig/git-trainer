import { useEffect, useState } from 'react';
import './front-counter.css';

const FrontCounter = ({
  counterOfCorrect,
  counterOfAttempts,
  level,
}: {
  counterOfCorrect: number;
  counterOfAttempts: number;
  level?: number;
}) => {
  const [persent, setPersent] = useState(0);

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
      <div>
        Level: <strong>{level}</strong>
      </div>
    </div>
  );
};

export default FrontCounter;
