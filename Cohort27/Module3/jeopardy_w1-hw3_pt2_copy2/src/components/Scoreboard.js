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
        <div>
            <h2>Score: {score} </h2>
            <button onClick={addPoints}>Increase</button>
            <button onClick={subtractPoints}>Decrease</button>
            <button onClick={resetPoints}>Reset</button>
        </div>
    )
}

export default Scoreboard
