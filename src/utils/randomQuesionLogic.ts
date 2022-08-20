const randomQuestionLogic = (dataArray: string[], dataBlockNumber: number) => {
  const dataBlocks: string[][] = [];
  dataArray.forEach((entry, index) =>
    Array.isArray(dataBlocks[Math.floor(index / 20)])
      ? dataBlocks[Math.floor(index / 20)].push(entry)
      : (dataBlocks[Math.floor(index / 20)] = [entry])
  );

  const wrongQuestions = localStorage.getItem('wrong JS questions');
  const wrongEntries: string[] = [];
  if (wrongQuestions) {
    dataArray.forEach(
      (questionEntry: string) =>
        JSON.parse(wrongQuestions).some((wrongQuestion: string) =>
          questionEntry.includes(wrongQuestion)
        ) && wrongEntries.push(questionEntry)
    );
  }
  const rightEntries =
    dataBlockNumber < dataBlocks.length ? [...dataBlocks[dataBlockNumber]] : dataArray;

  const totalDataArray = [...rightEntries, ...wrongEntries];
  const finalDataArray = totalDataArray.map((entry) => entry + `$$$${dataArray.length}`);

  return finalDataArray;
};

export default randomQuestionLogic;
