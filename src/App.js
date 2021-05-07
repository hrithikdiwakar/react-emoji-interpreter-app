import "./styles.css";
import react, { useState } from "react";

export default function App() {
  var emojiDictionary = {
    "😐": "Neutral",
    "😘": "Blowing a Kiss",
    "😉": "Winking ",
    "😨": "Fearful ",
    "😊": "Happy ",
    "🤓": "Nerd "
  };

  // var emoji = ["😐", "😘", "😉", "😨", "😊", "🤓"];
  var emoji = Object.keys(emojiDictionary);

  const [meaning, setMeaning] = useState("");

  const [meaning1, setMeaning1] = useState("");
  function emojiClickHandler(emj) {
    console.log("clicked ", emj);
    setMeaning1(emojiDictionary[emj]);
  }

  function clickHandler(event) {
    // var newlikeCounter = event.target.value
    var userInput = event.target.value;
    console.log(userInput);
    setMeaning(emojiDictionary[userInput]);
    // console.log("clicked " + newlikeCounter + " times");
  }

  return (
    <div className="App">
      <h1>Know About Emoji!!</h1>
      <input
        style={{ width: "80%", padding: "1rem", margin: "1rem" }}
        placeholder="paste a emoji here to know its meaning"
        onChange={clickHandler}
      />
      <h3> {meaning}</h3>

      <h3>Or click on the emoji below </h3>
      {emoji.map(function (emj) {
        return (
          <span
            onClick={() => emojiClickHandler(emj)}
            key={emj}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
          >
            {emj}{" "}
          </span>
        );
      })}
      <h3>{meaning1}</h3>
    </div>
  );
}
