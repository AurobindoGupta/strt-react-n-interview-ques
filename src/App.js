import React, { useState } from "react";
import "./styles.css";

var headdingText = "LETS DO THIS!";
var color = "red";
var welcomeText = "WELCOME....";
// var username = prompt("What is your name ?");
var buttonText = "ON";
var username = "madhav";
var counter = 0;

export default function App() {
  const [counter, setCounter] = useState(0);
  const [buttonText, setButtonText] = useState("ON");

  function changeButton() {
    if (buttonText === "ON") {
      var newButtonText = "OFF";
      setButtonText(newButtonText);

      console.log("changed");
    } else if (buttonText === "OFF") {
      newButtonText = "ON";
      setButtonText(newButtonText);

      console.log("changed back");
    }
    var newCounter = counter + 1;
    setCounter(newCounter);
    console.log("click", newCounter);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headdingText}</h1>
      <h2>
        {welcomeText} <span style={{ color: "blue" }}>{username}</span>
      </h2>
      <button onClick={changeButton}>{buttonText} </button> {counter}
    </div>
  );
}
