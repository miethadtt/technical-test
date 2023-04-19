import "./styles.css";
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState();
  const [num, setNum] = useState();

  function handleChange(e) {
    var input = e.target.value;

    if (input % 1 !== 0) {
      var inputStr = input.toString().replace(".", "");
      var wholeNum = parseInt(inputStr, 10);
      setNum(wholeNum);
    } else {
      setNum(input);
    }
  }

  function handleInput() {
    //please put your logic here
    var reverseNum = 0;
    var tempNum = num;

    while (tempNum > 0) {
      reverseNum = reverseNum * 10 + (tempNum % 10);
      tempNum = Math.floor(tempNum / 10);
    }

    var diff = Math.abs(num - reverseNum);

    setResult(diff);
  }

  return (
    <div className="App">
      <div>
        Number: <input type="number" value={num} onChange={handleChange} />
        <button onClick={handleInput}>Submit</button>
      </div>
      <div>Result: {result}</div>
    </div>
  );
}
