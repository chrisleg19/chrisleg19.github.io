//=======Nested Arrays (AKA Multidimensional Array)========

// const data = [[1,2,3], [4,5,6],[7,8,9]];

// console.log(data);  //gives me all the arrays within the data array

// console.log(data[0]); //gives me the first array within data array

// console.log(data[0][0]); // gives me (1) the first value of the first array within data array

// //NOTE: different console methods:
// console.table(data) // this will show data in a table format

//Tic Tac Toe game example:

// const table = [
//     ["x","","o"], 
//     ["","x",""],
//     ["","","x"]
// ];

// const data = [
//     [1,2,3], 
//     [4,5,6],
//     [7,8,9]
// ];

// for (let i = 0; i < data.length; i++){
//     // console.log(`i is ${i}`);
//     console.log(data[i]);     //showing each nested array  
//     for (let j = 0; j < data[i].length; j++){  // 2nd for loop logs each item inside of nested arrays  
//         console.log(data[i][j]);
//     }
// }

// const studentData = [["Jack", 24], ["Sara", 23], ["Peter", 24]];


// for (let i = 0; i < studentData.length; i++){  // 1st for loop to access outer array
//     console.log(studentData[i]);

//     for(let j = 0; j < studentData[i].length; j++){  // 2nd for loop to access inner array
//         console.log(studentData[i][j]);
//     }
// }

//========using forEach() with nested arrays================

const studentData = [["Jack", 24], ["Sara", 23], ["Peter", 24]];


for (let i = 0; i < studentData.length; i++){  // 1st for loop to access outer array
    // console.log(studentData[i]);

    for(let j = 0; j < studentData[i].length; j++){  // 2nd for loop to access inner array
        // console.log(studentData[i][j]);
    }
}
//====================================
studentData.forEach((arr) => { 
    // console.log(arr);
})

// **The above using forEach() gives you the same as below

for (let i = 0; i < studentData.length; i++){  
    // console.log(studentData[i]);
}
//====================================
//====================================

studentData.forEach((arr) => { 
    console.log(arr);
    arr.forEach((item) => {
        console.log(item);
    })
})

// **above is the same using forEach() as below

for (let i = 0; i < studentData.length; i++){  // 1st for loop to access outer array
    console.log(studentData[i]);

    for(let j = 0; j < studentData[i].length; j++){  // 2nd for loop to access inner array
        console.log(studentData[i][j]);
    }
}
//=====================================