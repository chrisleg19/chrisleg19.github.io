import { useState } from "react";


const Form = (props) =>{
    //destructuring props from App.js:
    const {movieSearch} = props;

    //create a state to hold the form data:
        //Note: use [] to destructure useState, because useState returns an array
    //the formData.searchTerm is an empty string when the pg first loads
        //example of multiple input fields included (exampleOf2ndInput: "")
    const [formData, setFormData] = useState({searchTerm: "", exampleOf2ndInputField: ""})

    //NOTE: this is best for a long form (w/ many inputs) Example:
        //const [formData, setFormData] = useState({name: "",
        //lastName: "",
        //dob: ""
        //})
    //NOTE: can also be done this way with a few inputs: 
        // const[name, setName] = useState("")
        // const[lastName, setLastName] = useState("")
        // const[dob, setDob] = useState("")

    //React will begin to record the state of the form (similar autocomplete) when the user begins typing and starts searching. This is done by: 
        //the value of the input: (value={formData.searchTerm})
        //onChange = {handleChange} (using the handleChange function)

    //Function for onChange property in the input field:
    const handleChange = (event) =>{
        // console.log(event.target.value)
        
        //capturing data from formData (with ...) and setting the state key & value
        setFormData({...formData, [event.target.name]: event.target.value})
    }


    //Function for the form's onSubmit:
    //calling the movieSearch function with the form's searchTerm value
    const handleSubmit = (event) =>{
        //stops the form from refreshing the page
        event.preventDefault()
        //runs the movieSearch() function with the searchTerm
        movieSearch(formData.searchTerm)
        //resets the input field (searchTerm) to blank after clicking search (or running movieSearch())
        setFormData({searchTerm:""})
    }


    return(
        <div>
            <form onSubmit ={handleSubmit}>
                <input type="text" placeholder="Enter Movie" value={formData.searchTerm} onChange={handleChange} name="searchTerm" required/>
                <br/>

                <input type="text" placeholder="Example of a 2nd input" value={formData.name} onChange={handleChange} name="exampleOf2ndInputField"/>
                <br/>

                <input type="submit" value="Search"/>

            </form>

        </div>
    )

}

export default Form;