import { useEffect, useState } from "react";
import "./front-counter.css";

const FrontCounter = ({
  counterOfCorrect,
  counterOfAttempts,
}: {
  counterOfCorrect: number;
  counterOfAttempts: number;
}) => {
  const [persent, setPersent] = useState(0);
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPersent(counterOfCorrect > 0 ? Math.floor((counterOfCorrect / counterOfAttempts) * 100) : 0);
  }, [counterOfCorrect, counterOfAttempts]);

  useEffect(() => {
    if (counterOfAttempts > 9 && counterOfCorrect > 4) {
      setPoints(Math.floor(counterOfCorrect / 5 + persent));
    }
  }, [counterOfCorrect, counterOfAttempts, persent]);

  return (
    <div id="counter">
      {" "}
      <div>Right: {counterOfCorrect}</div>
      <div>Tries: {counterOfAttempts}</div>
      <div>
        Rate: <strong> {persent}% </strong>
      </div>
      <div>
        Points: <strong>{points}</strong>
      </div>
    </div>
  );
};

export default FrontCounter;
