import {useState, useEffect} from "react"

const ShowAnswer = (props) =>{
    const [answer, setAnswer] = useState(false)
    const {question} = props

    const ans = question[0].answer

    useEffect(()=>{
        hideAnswer()
    },[ans])

    const showAnswerBtn = () =>{
        if(answer === false){
            setAnswer(true)
        } else {
            setAnswer(false)
        }
    }
    
    const hideAnswer = () =>{
        setAnswer(false)
    }

    return(
        <div className="answerDiv">
            <button onClick={showAnswerBtn} className="answerBtn">Answer</button>
            {answer && <h2 className="answer">Answer: {question[0].answer}</h2>}
        </div>
    )
}

export default ShowAnswer