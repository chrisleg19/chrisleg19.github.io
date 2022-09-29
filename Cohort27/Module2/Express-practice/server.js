//1. load the express framework (package, module, other names for it)
const { response } = require("express")
const express = require("express")

//2. create an instance of the express app  (express is a function)
const app = express()

//3. creating ROOT route for the app
    //syntax: app.get("root route(or url address)", callback function(request,response){})
app.get("/", function(request, response){
    response.send("<h1>Hello World!</h1>")                                     //send a response back to client
})

    // creating another route (endpoint) for the app
    app.get("/posts", (request, response)=>{
        response.send("<h3>Welcome to the Server</h3>")  //.send is like the return keyword, whatever follows will not run
    })

    //Example of another route (endpoint) for the app (at localhost:3000/home)
    app.get("/home", (request, response)=>{
        response.send("I did it in less than 3 min.!")
    })

//4. telling the app to listen on port 3000 for HTTP requests from clients
    //syntax: app.listen(port#, callback function)
app.listen(3000, function(){
    console.log("Server listening in port 3000");
})

//5. run node server.js in terminal

//6. run in your browser: localhost:3000
    //localhost refers to the machine you are using
    //you are telling the browser to run a get request on port 30000


//NOTE: in order to make changes to the app, you must first stop the server, unless you use **Nodemon**

//to install Nodemon, use this syntax: 

//npm i -g nodemon (windows)
//$ sudo npm i -g nodemon (mac)

//note: this is installed globally on your computer.  You don't have to reinstall




//REQUEST Type examples:
//app.get - client wants to retrieve/READ data
//app.post - client wants to send/CREATE data (example would be a form)
//app.put - client wants to put/UPDATE data
//app.delete - client wants to DELETE

//NOTE: app.listen(3000, function) - this will assign the port data will be transferred through
    //List of, and information about TCP and UDP port numbers: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers 

//Ways to RESPOND to a Request:
    //res.render()- Render a view template and send the resulting HTML to the browser.
    //res.redirect()- Tell the browser to issue another GETrequest.
    //res.json()- Send a JSON response (used when we build an API).


/*
    *Creating a Server w/ express

    1. Create a new folder
    2. npm init -y   (to create package.json)
    3. npm i express (to load express, get your node_modules, and package-lock.json)
    4. .gitignore (input node_modules to bypass push to github)
    5. create your server.js file (within server.js)
    6.//load modules (Express)
        const express = require("express")
    7.//initialize express app
        const app = express()
    8.//assign the port we're using to a variable
        const PORT = 3000
    8a.//assigning the port#
        app.listen(PORT, ()=>{
        console.log("Server running on port 3000")})
    9.//Routes
        app.get("/", (request, response)=>{
        console.log(request)
        response.send("<h1>Welcome to Express Plants</h1>")
        })
*/    