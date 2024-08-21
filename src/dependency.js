
import './App.css';
import { useState, useEffect } from "react";





function App({library}) {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tired");
  
  useEffect(() => {
    console.log(`its ${emotion} around here`);},[emotion]);

  useEffect(() => {
    console.log(`its S ${secondary} around here!`);},[secondary]);


  return (
    <div className="App">
     <h1>Current emotion is {emotion}</h1>
     <button onClick={() => setEmotion("sad")}>Sad</button>
     <button onClick={() => setEmotion("Excited")}>Excited</button>
    <h2>Current secondary emotion is {secondary}</h2>
    <button onClick={() => setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
