import {Route, Routes} from "react-router-dom"
import GetQuestion from "./components/GetQuestion";

import Answer from "./components/Answer"
import Scoreboard from "./components/Scoreboard"
import RevealQuestion from "./components/RevealQuestion";
import './App.css';

function App(props) {
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      
      
      <GetQuestion/>
      
      
      
    </div>
  );
}

export default App;
