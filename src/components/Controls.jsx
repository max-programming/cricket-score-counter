import { useContext } from "react";
import { ScoreContext } from "../context/ScoreContext";
import "./Controls.css";

const Controls = () => {
  const { increaseRuns, increaseWickets, resetScore } = useContext(
    ScoreContext
  );

  const wicketImgURL =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBhdGggZD0ibTM4OSAyNnYyMGgtMjd2MTFoLTY4di0xMWgtMjN2LTIwaDIzdi0xMWg2OHYxMXoiIGZpbGw9IiM4N2FmOGMiLz48cGF0aCBkPSJtMjY2IDI2djIwaC0yN3YxMWgtNjh2LTExaC0yM3YtMjBoMjN2LTExaDY4djExeiIgZmlsbD0iIzg3YWY4YyIvPjxnIGZpbGw9IiM5YWM1YTEiPjxwYXRoIGQ9Im0zNjkgNTFoNDR2NDQ2aC00NHoiLz48cGF0aCBkPSJtMjQ1IDUxaDQ0djQ0NmgtNDR6Ii8+PHBhdGggZD0ibTEyMSA1MWg0NHY0NDZoLTQ0eiIvPjwvZz48cGF0aCBkPSJtMzY5LjUgMjA2Ljk3aDQ0djgwaC00NHoiIGZpbGw9IiNkYzZlODQiLz48cGF0aCBkPSJtMjQ1LjUgMjA2Ljk3aDQ0djgwaC00NHoiIGZpbGw9IiNkYzZlODQiLz48cGF0aCBkPSJtMTIxLjUgMjA2Ljk3aDQ0djgwaC00NHoiIGZpbGw9IiNkYzZlODQiLz48cGF0aCBkPSJtMTIxIDUxaDI0djQ0NmgtMjR6IiBmaWxsPSIjODBhODg0Ii8+PHBhdGggZD0ibTEyMS41IDIwNi45N2gyNHY4MGgtMjR6IiBmaWxsPSIjYmY1YTcyIi8+PHBhdGggZD0ibTk5LjEwNSAyNjguMzIyYTYgNiAwIDAgMSAtNi02di0xMTMuNDkyYTYgNiAwIDAgMSAxMiAwdjExMy40OTJhNiA2IDAgMCAxIC02IDZ6IiBmaWxsPSIjZDRlMWY0Ii8+PHBhdGggZD0ibTk4LjUgMTMyLjcwOGE2IDYgMCAwIDEgLTYtNnYtNDAuNjE0YTYgNiAwIDAgMSAxMiAwdjQwLjYxNGE2IDYgMCAwIDEgLTYgNnoiIGZpbGw9IiNkNGUxZjQiLz48cGF0aCBkPSJtOTguNSA2OS43MDhhNiA2IDAgMCAxIC02LTZ2LTUuNjE0YTYgNiAwIDEgMSAxMiAwdjUuNjE0YTYgNiAwIDAgMSAtNiA2eiIgZmlsbD0iI2Q0ZTFmNCIvPjwvc3ZnPg==";
  return (
    <div className="controls">
      <button className="add-btn dot" onClick={increaseRuns}>
        0
      </button>
      <div className="add-runs">
        <button onClick={increaseRuns} className="add-btn one">
          1
        </button>
        <button onClick={increaseRuns} className="add-btn two">
          2
        </button>
        <button onClick={increaseRuns} className="add-btn three">
          3
        </button>
        <button onClick={increaseRuns} className="add-btn four">
          4
        </button>
        <button onClick={increaseRuns} className="add-btn five">
          5
        </button>
        <button onClick={increaseRuns} className="add-btn six">
          6
        </button>
      </div>
      <div className="other">
        <div className="add-wicket">
          <button className="wicket-btn" onClick={increaseWickets}>
            <img src={wicketImgURL} width="20" height="20" alt="wickets" />
            &nbsp; WICKET!
          </button>
        </div>
        <div className="reset">
          <button className="reset-btn" onClick={resetScore}>
            RESET
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
