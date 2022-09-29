const request = require("request")

//syntax: request(uri: string, options?: request.CoreOptions | undefined, callback?: request.RequestCallback | undefined): request.Request (+2 overloads)
//import request

//syntax: request('stringURL', callback function(error,response,body){})   //callback function is needed to Print the error if one occurred, Print the response status code if a response was received, Print the HTML for the Google homepage.
request('http://jsonplaceholder.typicode.com/users', function(error,response,body){
    console.error(error)
    console.log(body)
    console.log(response.statusCode);
})