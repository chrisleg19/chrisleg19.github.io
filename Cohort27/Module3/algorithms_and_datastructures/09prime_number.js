//https://youtu.be/cbHMQxOuIUw 

//A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

//Problem - give a natural number "n", determine if the number is prime or not

function isPrime(n){
    // if n is less than 2 (or not greater than 1) then n is NOT a prime number
    if (n < 2){
        return false
    }
    //if n is greater than 2, then loop through each number between 2 and n to see if is divisible by 2 with a remainder of 0.  If so, then n is not a prime number
    for (let i = 2; i<n; i++){
        if(n%i === 0){
            return false
        }
    }
    //if n does not pass any of the test above, then it IS a prime number, so return true.
    return true
}

console.log(isPrime(5))

//Big-O = O(n) - linear because of for loop