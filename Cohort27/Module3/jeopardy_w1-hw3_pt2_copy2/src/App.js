import {Route, Routes} from "react-router-dom"
import GetQuestion from "./components/GetQuestion";
import ShowQuestion from "./components/ShowQuestion"
import Answer from "./components/Answer"
import Scoreboard from "./components/Scoreboard"
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Scoreboard/>
      <GetQuestion/>
      <ShowQuestion/>
      <Answer/>
    </div>
  );
}

export default App;
