import "./Score.css";

const Score = () => {
  return (
    <>
      <div className="score">
        <h1 className="runs">00</h1>
        <h1 className="wickets">0</h1>
      </div>
      <div className="overs">
        <h2>OVERS: 5.3</h2>
      </div>
    </>
  );
};

export default Score;
