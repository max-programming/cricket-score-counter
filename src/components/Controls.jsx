import AddButtons from "./Controls/AddButtons";
import OtherButtons from "./Controls/OtherButtons";
import DotButton from "./Controls/DotButton";
import "./Controls.css";

const Controls = () => {
  return (
    <div className="controls">
      <DotButton />
      <AddButtons />
      <OtherButtons />
    </div>
  );
};

export default Controls;
