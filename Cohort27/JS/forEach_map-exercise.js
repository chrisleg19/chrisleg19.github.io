//=========Map Array=========

function subtractTwo(num){
    return num - 2;
}

function map(array, callback){
    let newArr =[]
    for (let i = 0; i < array.length; i++){
        const result = callback(array[i])
        newArr.push(result)
    }
    return newArr;
}

// Uncomment these to check your work!
console.log(typeof subtractTwo); // should log: 'function'
console.log(typeof map); // should log: 'function'
console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

// //=======forEach Array=================

// function recreateforEach(array, fn) {
//   for (let i = 0; i < array.length; i++) {
//     fn(array[i]);
//   }
// }

// function recreateMap(array, fn2) {
//   let newArr = [];
//   recreateforEach(array, function (item) {
//     newArr.push(fn2(item));
//   });
//   return newArr;
// }

// // Uncomment these to check your work!
// console.log(typeof recreateforEach); // should log: 'function'
// recreateforEach(["a", "b", "c"], (i) => console.log(i)); // should log: 'a', 'b', 'c'
// console.log(typeof recreateMap); // should log: 'function'
// console.log(recreateMap([3, 4, 5], (n) => n - 2)); // should log: [1, 2, 3]


