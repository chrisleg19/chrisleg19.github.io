
//Fetch API - The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

// Syntax: fetch("website")

// fetch("https://jsonplaceholder.typicode.com/posts")

//fetch requests will return a promise ("a middle man between data and your request")
//A Promise is in one of these states:
    //pending: initial state, neither fulfilled nor rejected.
    //fulfilled: meaning that the operation was completed successfully.
    //rejected: meaning that the operation failed.
    //IMAGE OF Promise flowchart
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/promises.png
  
//BASIC FORMAT OF FETCHING / PROMISES
    
//fetch("https://jsonplaceholder.typicode.com/posts")  //1. go fetch the data
//.then(()=>{                                          //2. then run this block of code
    //return the data in .jason()
//})
//.then(()=>{                                          //3. then run this block of code
    //do whatever you want with data
//})
//.catch(err => console.log(err))                      //4. If there is an error, do this



fetch("https://jsonplaceholder.typicode.com/posts")  
.then((responseFromServer)=>{  
    //we get back a response object (this has details needed to communicate to server)
    //then we use .json() method to access the data                                        
    // console.log(responseFromServer)  //gives you the response object
    // console.log(responseFromServer.json())  //with .json() you get the promise with data
    return responseFromServer.json()
})
.then((jsonData)=>{                                          
    console.log(jsonData)
})
.catch(err => console.log(err))                      




fetch("https://jsonplaceholder.typicode.com/photos")
.then((responseFromServer)=>{
    return responseFromServer.json()
})
.then((jsonData)=>{
    console.log(jsonData)

})
.catch(err=> console.log(err))






//========Declare variables

const section = document.getElementById("posts")


//========Logic to fetch data

fetch("https://jsonplaceholder.typicode.com/posts")
.then((responseFromServer)=>responseFromServer.json())
.then((data)=>{                                    // using the "data" we retrieved as an argument for the .then
    // data.forEach(post => console.log(post))
    data.forEach(post=>{                           // using for each method for each piece of data
        const h3 = document.createElement("h3")    // created an h3 and assigned to a variable "h3"
        h3.textContent = post.title                // assigning the title from the post API to the h3
        section.appendChild(h3)                    // appending the created h3 to the section in HTML
    })
})
.catch(err=> console.log(err))



//=========Event Listeners