import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const Scoreboard = (props) =>{
    const {question} = props
    

    return(
        <div>
            <h2>Score:  </h2>
            <button >Increase</button>
            <button>Decrease</button>
            <button>Reset</button>
        </div>
    )
}

export default Scoreboard