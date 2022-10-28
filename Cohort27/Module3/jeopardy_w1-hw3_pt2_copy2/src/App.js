import {useState, useEffect} from "react"
import "./App.css"
import DisplayQuestion from "./components/DisplayQuestion"
import ShowAnswer from "./components/ShowAnswer"
import Scoreboard from "./components/Scoreboard"


function App() {
  //state to hold question data
  const [question, setQuestion] = useState("question")


  

  //state to hold category

  useEffect(()=>{
    getQuestion()
    
  },[])

  const getQuestion = async () =>{
    try {
      const res = await fetch("http://jservice.io/api/random")
      const data = await res.json()
      setQuestion(data)
    } catch (error) {
      console.log(error)
    }
  }





  console.log(question)
  // console.log(question[0].category)
  
  
  return (
    <div className="App">
      <h1>Welcome to Jeopardy!</h1>
      <Scoreboard question = {question}/>
      <DisplayQuestion question = {question} questionBtn = {getQuestion}  />
      
      <ShowAnswer question = {question}/>
      
    </div>
  );
}

export default App;
