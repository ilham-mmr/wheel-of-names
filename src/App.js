import "./App.css";
import Wheel from "./components/Wheel";
import { useRef, useState } from "react";
import Button from "./components/Button";

function App() {
  const initialValue = ["ilham", "hilda", "rifqi", "ucok", "mamang", "usep"];
  const [items, setItems] = useState(() => initialValue);

  // array of names

  const wheelEl = useRef(null);
  const textAreaEl = useRef(null);
  const spinBtnEl = useRef(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const onSpin = (e) => {
    e.preventDefault();
    setIsSpinning(true);
    const wheelElement = wheelEl.current;
    // Calculate a new rotation between 5000 and 10 000
    const deg = Math.floor(5000 + Math.random() * 5000);
    wheelElement.style.transform = "rotate(" + deg + "deg)";

    setTimeout(() => {
      setIsSpinning(false);
    }, 2500);
  };

  const onChangeText = (e) => {
    spinBtnEl.current.disabled = false

    let text = e.target.value.split(",");
    const names = text.filter(function (el) {
      return el !== "";
    });
    if (names.length === 0) {
      spinBtnEl.current.disabled = true
    }
    setItems(names);
  };

  return (
    <>
      <div className="main">
        <div className="text-container">
          <textarea
            ref={textAreaEl}
            onChange={onChangeText}
            id="txtid"
            rows="4"
            cols="25"
            maxlength="200"
            disabled={isSpinning ? true : false}
          >
            ilham, hilda, rifqi, ucok, mamang, usep
          </textarea>
        </div>
        <Wheel listOfNames={items} theRef={wheelEl} />

        <div style={{ marginTop: "2rem" }}>
          <Button theRef={spinBtnEl} title="spin" onClick={onSpin} />
        </div>
      </div>
    </>
  );
}

export default App;
