
//load modules (Express)
const express = require("express")

//initialize express app
const app = express()

//assign the port we're using to a variable
const PORT = 3000

//DATA
const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];


//Routes
// app.get("/", (request, response)=>{
//     console.log(request.method)  //method used for request
//     console.log(request.url)     //url of get request
//     console.log(request.params)  //params of request
//     response.send("<h1>Welcome to Express Plants</h1>")
// })

//*========CREATING PARAMETER IN URL (anything after the :)====================
//*Think of parameters as blank spaces within the url that accept some type of input
// you can only have 1 response (.send) for each request unless they are nested in IFstatement or other program logic

// YOU WANT TO KEEP ROUTES WITH PARAMETERS (less specific) AT THE BOTTOM AND ROUTES W/OUT PARAMETERS (more specific) AT THE TOP

        //The shorter the address, the less specific, comes last.
        //Big > small, Specific > less specific
        //You'll know when this happens because when you try to go to the URL it redirects you to somewhere else.
        //It met the requirements. It found "/...something" Instead of finding the specific route. It returned the first instance of.

//Express starts at the top of your server.jsfile and attempts to match the url being used by the browser with routes in the order in which they're defined

        //note: creating a parameter after the "/plants" route (endpoint)
// app.get("/plants/:indexOfPlantsArray", (request, response)=>{ //using the : tells express you are using a parameter
    
//     const{indexOfPlantsArray} = request.params;         //destructuring to allow you to access the index of plants (line30)
    // console.log(request.params)                      //console logging the params for this request
    // console.log(request.params.indexOfPlantsArray)
    // response.send(plants[request.params.indexOfPlantsArray])
//     response.send(plants[indexOfPlantsArray])           //sending the index value from arr(indexOfPlantsArray)
// })       

//=======Example of new route with if statement=========

// app.get("/fixed/:indexOfPlantsArray", (req, res)=>{
//     const {indexOfPlantsArray} = req.params         //destructuring
//     // if(plants[req.params.indexOfPlantsArray])    //if statement without destructing variable
//     if(plants[indexOfPlantsArray]){                 //if statement using the destructuring variable
//         res.send(plants[req.params.indexOfPlantsArray])
//     } else{
//         res.send("Cannot Find that index" + req.params.indexOfPlantsArray)
//     }
// })

//==========Example of new route with multiple parameters=============

//in this example, the values for each parameter (:firstname and :lastname) are filled in by the client (browser)
    //Example: http://localhost:3000/hello/chris/legette
    //Output in the browser is: hello chris legette

// app.get('/hello/:firstname/:lastname', (req, res) => {
// 	console.log(req.params);
// 	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
// });

//same example with destructuring: 

// app.get('/hello/:firstname/:lastname', (req, res) => {
//     const {firstname, lastname} = req.params
// 	res.send(`hello, ${firstname} ${lastname}`);
// });


//Example of real world scenario (PASSWORD): 
// app.get("/login/:email/:password", (req,res)=>{
//     const{email,password} = req.params           
//     if(true){
//     res.redirect("/home")                //redirecting user to another page if email/password matches
//     } else{
//       res.send("please check your email")
//     }
// })




//*==========Using a Query in URL (? and =) ==============
//syntax: ?someKey=someValue
// similar to defining an object
//continue the key value pair chain with the & symbol


// app.get('/howdy/:firstName', function(req, res) {
//     console.log(req.params);
//     console.log(req.query);
//     // res.send('hello ' + req.query.title + ' ' + req.params.firstName);
//   });

//single key value pair
// http://localhost:3000/howdy/Chris?title=dev

//two key value pairs
//http://localhost:3000/howdy/Chris?title=dev&experience=1


//======*Another example using req.query=====

// const dbUser = ["Colton", "Abe", "Deja", "Chris"]

// app.get("/search/:username", (req,res)=>{
//     const {username} =req.params
//     console.log(req.params)
//     console.log(req.query)

//     for (let user of dbUser){
//         if(user === username){
//             return res.send(`Welcome ${username}`)
//         } else {
//             console.log("User Not Found!") 
//         }
//     }
//     res.send("User Not Found!")
// })

// URL using the for loop above: http://localhost:3000/search/Chris

// using req.query you can continue to set key value pairs in the url by using the &, then "key", then "=", then "value"

//three key value pairs

//http://localhost:3000/search/Chris?location=atl&salary=100000&title=blue







//assigning the port#
app.listen(PORT, ()=>{
    console.log("Server running on port 3000")
})



//============*Real world example with search/text input================

// searchBtn.addEventListener("click", function(){
//     const textInput = document.getElementById("id")            //textInput is populated on form

//     fetch(`http://localhost:3000/search/${textInput.value}?location=${location}`)    //fetch request using req.query to get data 
// })