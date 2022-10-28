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
        <div>
            <button onClick={showAnswerBtn}>Answer</button>
            {answer && <h1>Answer: {question[0].answer}</h1>}
        </div>
    )
}

export default ShowAnswer