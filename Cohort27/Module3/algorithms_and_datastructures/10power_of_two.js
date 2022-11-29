//https://youtu.be/SZRG1bmDlx8

//An integer is a power of two if there exists an integer "x" such that "n"===2^x

//example:  isPowerOfTwo(1) = true (2^0)
//          isPowerOfTwo(2) = true (2^1)
//          isPowerOfTwo(5) = false 

//problem - Give a positive integer "n", determine if the number is a power of 2 or not

function isPowerOfTwo(n){
    //if "n" is less than 1 (or not a positive integer), return false
    if(n < 1){
        return false
    }
    //if "n" is a positive integer; while it is greater than 1...check if the remainder of n/2 does not equal 0...if so then n is not a power of 2 (return false)
    while(n > 1){
        if(n % 2 !==0){
            return false
        }
        //continue to divide n by 2 in the while loop
        n = n/2
    }
    //if none of the conditions above are met, then "n" is a power of 2
    return true
}


console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(5))