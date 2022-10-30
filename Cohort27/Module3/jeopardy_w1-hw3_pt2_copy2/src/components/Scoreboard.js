import {useState, useEffect} from "react"

const Scoreboard = (props) =>{

const startScore = 0
const [score, setScore] = useState(startScore)
const {question} = props



const addPoints = () =>{
    setScore(score + question[0].value)
}

const subtractPoints = () =>{
    setScore(score - question[0].value)
}

const resetPoints = () =>{
    setScore(startScore)
}

    return(
        <div className="scoreBoard">
            <h2 className="score">Score: {score} </h2>
            <button onClick={addPoints} className="add">+</button>
            <button onClick={subtractPoints} className="subtract">-</button><br/>
            <button onClick={resetPoints} className="reset">Reset</button>
        </div>
    )
}

export default Scoreboard
