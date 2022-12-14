//https://youtu.be/vAgzuS3u6W0 

//the factorial of a non-negative integer "n", is the product of all positive integers less than or equal to "n"

//syntax: n!

//example: 5! => 5 * 4 * 3 * 2 * 1 = 120 

//note: factorial of zero is 1

//problem - Give an integer "n", find the factorial of that integer

function factorial(n){
    //factorial will always start at 1, so initialize a variable with value 1
    let ans = 1
    //for loop will begin at the next number (2), so we set i=2.
    //i goes up by one after each iteration and we multiply that number with ans
    for (let i = 2; i<=n; i++){
        //same as => ans = ans * i
        ans*=i
    }
    return ans
}

console.log(factorial(5))


//Big-0 = O(n) or linear time complexity
    //There is only 1 for loop in the algorithm