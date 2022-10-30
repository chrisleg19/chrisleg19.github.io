import {useState, useEffect} from "react"
import "./App.css"
import DisplayQuestion from "./components/DisplayQuestion"
import ShowAnswer from "./components/ShowAnswer"
import Scoreboard from "./components/Scoreboard"


function App() {
  //state to hold question data
  const [question, setQuestion] = useState(
    [{airdate : "1995-12-14T12:00:00.000Z",
      answer : "tailor",
      category : {id: 23, title: '"t" time', created_at: '2022-07-27T00:24:02.592Z', updated_at: '2022-07-27T00:24:02.592Z', clues_count: 75},
      category_id : 23,
      created_at : "2022-07-27T00:41:07.006Z",
      game_id : 7124,
      id : 39793,
      invalid_count : null,
      question : "It's the profession of a person who makes & alters clothes",
      updated_at : "2022-07-27T00:41:07.006Z",
      value : 100}]
  )


  

  //state to hold category

  useEffect(()=>{
    getQuestion()
    
  },[])

  let apiData

  const getQuestion = async () =>{
    try {
      const res = await fetch("http://jservice.io/api/random")
      const data = await res.json()
      setQuestion(data)
      return apiData
    } catch (error) {
      console.log(error)
    }
  }






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
