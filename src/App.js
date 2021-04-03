import React, { useState } from "react";
import "./styles.css";

var headdingText = "LETS DO THIS!";
var color = "red";
var welcomeText = "WELCOME....";
// var username = prompt("What is your name ?");

var username = "madhav";

export default function App() {
  var [counter, setCounter] = useState(0);
  var [buttonText, setButtonText] = useState("ON");
  var [userInput, setUserInput] = useState("");

  function inputChangeHandler(event) {
    console.log(event.target.value);
    setUserInput(event.target.value);
  }
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
      <div>
        <button onClick={changeButton}>{buttonText} </button> {counter}
      </div>
      <br></br>
      <input onChange={inputChangeHandler}></input>
      <div style={{ color: "green" }}>WELCOME {userInput}</div>
    </div>
  );
}
