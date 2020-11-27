import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";
import { ReactComponent as Ball } from "../../img/ball.svg";

const DotButton = () => {
  const { increaseOver, wickets } = useContext(ScoreContext);
  return (
    <div className="dot">
      <button
        className="add-btn dot-btn"
        onClick={increaseOver}
        disabled={wickets === 10}
      >
        <Ball />
      </button>
    </div>
  );
};

export default DotButton;
