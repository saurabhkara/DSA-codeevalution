//Given an integer 'n',, find the factorial of the number.

function factorial(num){
    let fact =1;
    if(num===0 || num===1 || num<0){
        return fact;
    }
    for(let i =2; i<=num;i++){
        fact = fact * i;
    }

    return fact;
}

// console.log(factorial(-5));
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(5));

//Time complexity of above function is O(n)
// Space complexity of above function is O(1)



function recurrsiveFactorial(num){
    if( num ===0 || num < 0){
        return 1;
    }
    return recurrsiveFactorial(num -1)  * num;
}


// console.log(recurrsiveFactorial(0))
// console.log(recurrsiveFactorial(1))
// console.log(recurrsiveFactorial(5))

//Time complexity of above function is O(n)
// Space complexity of above function is O(n)