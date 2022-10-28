import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const Answer = (props) =>{
    const {question} = props

    const clickAnswer = () =>{
        return(
         <Answer/>
        )
     }
    return(
        <div>
            <h2>What is {question[0].answer} </h2>
        </div>
    )
}

export default Answer