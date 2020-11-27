import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";
import { ReactComponent as Wicket } from "../img/wicket.svg";
import { ReactComponent as Ball } from "../img/cricket-ball.svg";
import "./Controls.css";

const Controls = () => {
  const {
    wickets,
    lastOperation,
    increaseRuns,
    increaseWickets,
    increaseOver,
    resetScore,
    undoLastOperation,
  } = useContext(ScoreContext);
  const iconButton = { display: "flex", justifyContent: "center" };
  return (
    <div className="controls">
      <div className="dot">
        <button
          className="add-btn dot-btn"
          onClick={increaseOver}
          disabled={wickets === 10}
        >
          <Ball />
        </button>
      </div>
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
      <div className="other">
        <div className="add-wicket">
          <button
            className="wicket-btn"
            onClick={increaseWickets}
            style={iconButton}
            disabled={wickets === 10}
          >
            <Wicket />
            WICKET!
          </button>
        </div>
        <div className="reset">
          <button className="reset-btn" onClick={resetScore} style={iconButton}>
            <svg
              style={{ width: "1.25em", height: "1.25em" }}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>
            &nbsp; RESET
          </button>
        </div>
      </div>
      <div className="undo">
        <button
          className="undo-btn"
          style={iconButton}
          disabled={lastOperation === null}
          onClick={undoLastOperation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M17.026 22.957c10.957-11.421-2.326-20.865-10.384-13.309l2.464 2.352h-9.106v-8.947l2.232 2.229c14.794-13.203 31.51 7.051 14.794 17.675z" />
          </svg>
          &nbsp; UNDO
        </button>
      </div>
    </div>
  );
};

export default Controls;
