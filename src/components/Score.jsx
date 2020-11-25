import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";
import "./Score.css";

const Score = () => {
  const {
    runs,
    wickets,
    over: { overNo, ballNo },
  } = useContext(ScoreContext);

  return (
    <>
      <div className="score">
        <h1 className="runs">{runs >= 10 ? runs : `0${runs}`}</h1>
        <h1 className="wickets">{wickets}</h1>
      </div>
      <div className="overs">
        <h2>
          OVERS: {overNo}.{ballNo}
        </h2>
      </div>
    </>
  );
};

export default Score;
