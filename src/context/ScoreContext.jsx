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
  const [lastOver, setLastOver] = useState(
    JSON.parse(localStorage.getItem("last_over")) || null
  );
  const [lastOperation, setLastOperation] = useState(
    JSON.parse(localStorage.getItem("last_operation")) || null
  );
  const [lastScore, setLastScore] = useState(
    JSON.parse(localStorage.getItem("last_score")) || null
  );
  const undoLastOperation = () => {
    switch (lastOperation) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
        setRuns(runs - Number(lastOperation));
        setOver(lastOver);
        setLastOver(null);
        setLastOperation(null);
        break;
      case "wicket":
        setWickets(wickets - 1);
        setOver(lastOver);
        setLastOver(null);
        setLastOperation(null);

        break;
      case "over":
        setOver(lastOver);
        setLastOver(null);
        setLastOperation(null);
        break;
      case "reset":
        if (lastScore) {
          setRuns(lastScore.runs);
          setWickets(lastScore.wickets);
          setOver(lastScore.over);
          setLastOver(null);
          setLastOperation(null);
        }
        break;
      default:
        return;
    }
  };
  const increaseOver = () => {
    setOver({
      overNo: over.ballNo === 5 ? over.overNo + 1 : over.overNo,
      ballNo: over.ballNo === 5 ? 0 : over.ballNo + 1,
    });
    setLastOperation("over");
    setLastOver(over);
  };
  const increaseRuns = (e) => {
    setRuns(runs + Number(e.target.innerText));
    increaseOver();
    setLastOperation(e.target.innerText);
  };
  const increaseWickets = () => {
    setWickets(wickets + 1);
    increaseOver();
    setLastOperation("wicket");
  };
  const resetScore = () => {
    setRuns(0);
    setWickets(0);
    setOver({ overNo: 0, ballNo: 0 });
    setLastScore({ runs, wickets, over });
    setLastOperation("reset");
  };
  useEffect(() => {
    localStorage.setItem("runs", JSON.stringify(runs));
    localStorage.setItem("wickets", JSON.stringify(wickets));
    localStorage.setItem("over", JSON.stringify(over));
    localStorage.setItem("last_operation", JSON.stringify(lastOperation));
    localStorage.setItem("last_over", JSON.stringify(lastOver));
    localStorage.setItem("last_score", JSON.stringify(lastScore));
  }, [runs, wickets, over, lastOperation, lastOver, lastScore]);
  return (
    <ScoreContext.Provider
      value={{
        runs,
        wickets,
        over,
        lastOperation,
        increaseRuns,
        increaseWickets,
        increaseOver,
        resetScore,
        undoLastOperation,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
