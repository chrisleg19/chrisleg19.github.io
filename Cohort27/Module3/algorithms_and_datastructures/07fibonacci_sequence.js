//https://youtu.be/tQjd29Rmo_A

//Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

//The first two numbers in the sequence are always 0 and 1

//Problem - Give a number "n", find the first "n" elements of the Fibonacci sequence


//start by initializing a variable with an array [0,1] (since the first 2 values of fib are 0 and 1)
//in the for loop, start with i = 2 (because index 1 is 0 and index 2 is 1)
function fibonacci(n){
    let fib = [0,1]
    for (let i = 2; i<n; i++){
        console.log("1. array: ",fib)
        console.log("2. index: ", [i])
        console.log("3. fib index - 1: ", fib[i-1])
        console.log("4. fib index - 2: ", fib[i-2])

        //the next number at fib[i] equals the sum of the the previous two indexes ( fib[i-1] and fib[i-2] ) 
        fib[i] = fib[i-1] + fib[i-2]
        
        
        console.log("5. added to fib: ",fib[i])
        console.log(" ")
    }
    return fib
}

console.log(fibonacci(5))

//Big-O for this is O(n) or linear time complexity