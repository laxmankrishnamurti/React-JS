import React from "react";
import { useState } from "react";

function Hooks() {
  let [score, setScore] = useState(0);

  function add() {
    if (score < 20) {
      score += 1;
      setScore(score);
    } else {
      alert("You reached your Maximum Limit");
      score = 0;
    }
  }

  function sub() {
    if (score <= 0) {
      alert("Negative Integer is not allowed");
      screen = 0;
    } else {
      score -= 1;
      setScore(score);
    }
  }

  return (
    <div>
      <h1>Using Hooks</h1>
      <p>
        Current Value : <span>{score}</span>
      </p>
      <button onClick={add}>Up</button>
      <br />
      <br />
      <button onClick={sub}>Down</button>
    </div>
  );
}

export default Hooks;
