import { createContext, useEffect, useState } from "react";

export const ScoreContext = createContext();

export const ScoreProvider = ({ children }) => {
  const [runs, setRuns] = useState(
    JSON.parse(localStorage.getItem("runs")) || 0
  );
  const [wickets, setWickets] = useState(
    JSON.parse(localStorage.getItem("wickets")) || 0
  );
  const [over, setOver] = useState(
    JSON.parse(localStorage.getItem("over")) || {
      overNo: 0,
      ballNo: 0,
    }
  );
  const increaseOver = () => {
    setOver({
      overNo: over.ballNo === 5 ? over.overNo + 1 : over.overNo,
      ballNo: over.ballNo === 5 ? 0 : over.ballNo + 1,
    });
  };
  const increaseRuns = (e) => {
    setRuns(runs + Number(e.target.innerText));
    increaseOver();
  };
  const increaseWickets = () => {
    setWickets(wickets < 10 ? wickets + 1 : wickets);
    increaseOver();
  };
  const resetScore = () => {
    setRuns(0);
    setWickets(0);
    setOver({ overNo: 0, ballNo: 0 });
  };
  useEffect(() => {
    localStorage.setItem("runs", JSON.stringify(runs));
    localStorage.setItem("wickets", JSON.stringify(wickets));
    localStorage.setItem("over", JSON.stringify(over));
  }, [runs, wickets, over]);
  return (
    <ScoreContext.Provider
      value={{
        runs,
        wickets,
        over,
        increaseRuns,
        increaseWickets,
        increaseOver,
        resetScore,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
