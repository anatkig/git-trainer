import { useState, useEffect } from 'react';
import './statistics.css';
import FrontCounter from '../front-counter/FrontCounter';

const Statistics = ({ topic }: { topic: string }) => {
  const [todayDATA, setTodayDATA] = useState([0, 0]);
  const [currentTopicStatistics, setCurrentTopicStatistics] = useState<object[]>();
  const [todayDate, setTodayDate] = useState(new Date().toDateString());
  const [totalCounter, setTotalCounter] = useState(
    localStorage.getItem(`total${topic}`)
      ? JSON.parse(localStorage.getItem(`total${topic}`) as string)
      : [0, 0]
  );
  const [level, setLevel] = useState(0);
  const [currentNumOfQuesiont, setCurrentNumOfQuesiont] = useState(0);

  useEffect(() => {
    setTotalCounter(
      localStorage.getItem(`total${topic}`)
        ? JSON.parse(localStorage.getItem(`total${topic}`) as string)
        : [0, 0]
    );
  }, [topic]);

  useEffect(() => {
    setCurrentTopicStatistics(JSON.parse(localStorage.getItem(`statistics${topic}`) as string));

    if (topic) {
      const currentTopicStatisticsQuestionsNum = JSON.parse(
        localStorage.getItem(`${topic}questionsNum`) as string
      );
      setCurrentNumOfQuesiont(currentTopicStatisticsQuestionsNum);
      setLevel(Math.floor(totalCounter[0] / currentTopicStatisticsQuestionsNum));
    }
  }, [topic]);

  useEffect(() => {
    if (Array.isArray(currentTopicStatistics)) {
      const today = currentTopicStatistics.find(
        (date: object) => Object.keys(date)[0] === todayDate
      );

      if (today) {
        setTodayDATA([
          (today as keyof typeof currentTopicStatistics[0])[todayDate][0],
          (today as keyof typeof currentTopicStatistics[0])[todayDate][1],
        ]);
      }
    }
  }, [todayDate, topic, currentTopicStatistics]);

  useEffect(() => {
    setTodayDate(new Date().toDateString());
  }, [topic]);

  return (
    <div id="statistics">
      <div className="stat-item">
        <strong>Today:</strong>{' '}
        <FrontCounter counterOfCorrect={todayDATA[0]} counterOfAttempts={todayDATA[1]} />
      </div>
      {currentTopicStatistics?.map((date) => (
        <div className="stat-item" key={Object.keys(date)[0]}>
          <strong>{Object.keys(date)[0]}:</strong>
          <FrontCounter
            counterOfCorrect={date[Object.keys(date)[0] as keyof typeof date][0]}
            counterOfAttempts={date[Object.keys(date)[0] as keyof typeof date][1]}
          />
        </div>
      ))}
      <div className="stat-item">
        {' '}
        <strong>Total:</strong>{' '}
        <FrontCounter
          counterOfCorrect={totalCounter[0]}
          counterOfAttempts={totalCounter[1]}
          level={level}
        />
      </div>
      <div className="stat-item">
        {' '}
        <strong>
          Questions to the next level left: {totalCounter[0] % currentNumOfQuesiont}
        </strong>{' '}
      </div>
    </div>
  );
};

export default Statistics;
