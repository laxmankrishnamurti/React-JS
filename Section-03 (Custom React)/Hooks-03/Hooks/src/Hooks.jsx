import { useState } from "react";

function App() {
  let [count, setCount] = useState(0);

  const add = function(){
    count += 1;

    if(count > 20){
      alert('You reached your Maximum point.');
      count = 0;
    }
    setCount(count);
  }

  const subtract = function(){
    count -= 1;

    if(count < 0){
      alert('Negative Integer is not allowed');
      count = 0;
    }
    setCount(count);
  }

  return (
    <>
      <div>
        <h1>Using Hooks</h1>
        <span id="display">Current Value :: {count}</span>
        <br/>
        <br/>
        <button id="increate" onClick={add}>Up</button>
        <br/>
        <br/>
        <button id="decrease" onClick={subtract}>Down</button>
      </div>
    </>
  )
}

export default App;
