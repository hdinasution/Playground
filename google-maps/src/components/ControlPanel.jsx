import "../../src/App.css";
import * as FaIcons from "react-icons/fa";

export default function ControlPanel({ play, isPlay }) {
  return (
    <div className="control-panel">
      <h3>Routes Replay</h3>
      <div className="control">
        {isPlay ? (
          <FaIcons.FaPlay
            style={{ cursor: "pointer" }}
            onClick={() => {
              play();
            }}
          />
        ) : (
          <FaIcons.FaPause
            style={{ cursor: "pointer" }}
            onClick={() => {
              play();
            }}
          />
        )}
        <div className="time-line"></div>
      </div>
    </div>
  );
}
