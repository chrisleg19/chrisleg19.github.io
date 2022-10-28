import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"
import Answer from "./Answer"



const GetQuestion = () =>{
    const [question, setQuestion] = useState(null)
    
    useEffect(()=>{
        randomQuestion()
    },[])

    const params = useParams()

    const url = "http://jservice.io/api/random"

    const randomQuestion = async () =>{
        try {
            const res = await fetch (url)
            const data = await res.json()
            setQuestion(data)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    

    return(
        <div>
            <h2>Let's Play</h2>
            <button onClick={randomQuestion}>Get Random Question</button>
            <h3>{question[0].question}</h3>
            <h2>Category: {question[0].category.title}</h2>
            <h3>Points: {question[0].value}</h3>
            
            
            
        </div>
    )
}

export default GetQuestion
