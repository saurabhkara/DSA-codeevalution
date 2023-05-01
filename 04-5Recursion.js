
//Direct Recursion
function head(n){
    console.log(n);
    if(n<=0){
        return 0;
    }
    head(n-1)
}

// head(5);

function tail(n){
    if(n<0){
        return 0;
    }
    tail(n-1);
    console.log(n);
}

// tail(5);


function factorial(num){
    if(num===1){
        return 1;
    }
    return num * factorial(num -1);
}

// console.log(factorial(5))


function sumNatural(num){
    if(num===1){
        return num;
    }
    return num + sumNatural(num-1);
}

// console.log(sumNatural(10));

function powerOfNum(num, p){
    if(p===0){
        return 1;
    }
    return num * powerOfNum(num, p-1)
}
// console.log(powerOfNum(2,4));

function fibonacci(num){
    if(num===0 || num===1){
        return num;
    }
    return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(3));