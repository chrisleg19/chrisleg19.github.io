//NODE JS documentation for fs module: https://nodejs.org/dist/latest-v16.x/docs/api/fs.html 
//The node:fs module enables interacting with the file system in a way modeled on standard POSIX functions.
//syntax:  fs.writeFile(file, data[, options], callback)
//the fs module is creating, appending, etc. files on your local device


//fs is an object with a lot of properties and methods
//when using fs, use dot notation to access the properties and methods
//fs module is an object that can be used to create/modify modules (or files)

const fs = require("fs")

console.log(typeof fs);

//creating a file with fs module
//syntax: fs.writeFile(filepath/filename, data (or what is in the file), callback function)
//1. specify file location and name 2. specify what is in the file 3. include a callback function to instruct what to do after file creation is complete
fs.writeFile("./hello.txt", "hello world!", ()=>{
    console.log("done writing file...")
})


//Example creating a new file with a lot of text

const data = "a;kdfljas;dfjas;dfja;dksf;lkdsaf;lkdsaf;lksajdf;lkjsadf;lkjsad;flkjas;dkja;lkdsf;lksajdf;lksajdfksajdfksajdfkjsdfja;dfksdkfjal;kjskjsadkjsafjad;fkjsdkfj;kdjsakjsdksajfksajf;kjdfjad;flkj;dfkjldkfj;kdsjfkdsajksjdkjsadfksadfjad;fklasdkfja;kdjs;kdsajsjfd"

fs.writeFile("./hello2.txt", data, ()=>{
    console.log("done writing file")
})


//Example appending file:

fs.appendFile("./hello.txt", " Hello Cohort27", ()=>{
    console.log("done")
})

fs.appendFile("./hello2.txt", " Hello Chris!!!!!", ()=>{
    console.log("complete");
})