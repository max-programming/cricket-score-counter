import { useContext } from "react";
import { ScoreContext } from "../../context/ScoreContext";

const AddButtons = () => {
  const { increaseRuns, wickets } = useContext(ScoreContext);
  return (
    <div className="add">
      <div className="add-runs">
        <button
          onClick={increaseRuns}
          className="add-btn one"
          disabled={wickets === 10}
        >
          1
        </button>
        <button
          onClick={increaseRuns}
          className="add-btn two"
          disabled={wickets === 10}
        >
          2
        </button>
        <button
          onClick={increaseRuns}
          className="add-btn three"
          disabled={wickets === 10}
        >
          3
        </button>
        <button
          onClick={increaseRuns}
          className="add-btn four"
          disabled={wickets === 10}
        >
          4
        </button>
        <button
          onClick={increaseRuns}
          className="add-btn five"
          disabled={wickets === 10}
        >
          5
        </button>
        <button
          onClick={increaseRuns}
          className="add-btn six"
          disabled={wickets === 10}
        >
          6
        </button>
      </div>
    </div>
  );
};

export default AddButtons;
