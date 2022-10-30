import {useState, useEffect} from "react"

const DisplayQuestion = (props) =>{
    const {question, questionBtn} = props


    // console.log("aaaaaaaa",question[0].category)

    // const cat = question[0].category

    // let thing 


    // for (const key in cat){
    //     if(key === "title")
        
    //     // console.log(`${cat[key]}`)        
    //     thing = `${cat[key]}`

    //     return thing
    // }

    // console.log(thing)






    //function to get to category object
    // console.log(question[0].category.title)
    


    
    // const cat = question[0].category

    // const getTitle = async()=>{
    //     try {
    //         const cat = await question[0].category
    //         const catTitle = await cat.title
    //         return catTitle
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    // getTitle()



    //  const cat = question[0].category



    // let catArr = Object.keys(cat)

    // console.log(catArr)



    //  for (const key in cat){
    //     console.log(`${key}`)
    //  }


    //  const getCategory = () =>{
    //     const {title} = question[0].category
    //     console.log(title)
    // }

    
    
    return(
        <div>
            <button className="random" onClick={questionBtn}>Random Trivia Question</button>
            <div className="questionBox">

            <h2><span className="highlight">Question:</span> {question[0].question}</h2>
            <h2><span className="highlight">Category:</span> {question[0].category.title}</h2>
            <h2><span className="highlight">Points:</span> {question[0].value}</h2>
            </div>
            
            
           
            
            
        </div>
    )
}

export default DisplayQuestion