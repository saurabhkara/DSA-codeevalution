//Fibonacci sequence is a sequence in which each number is sum of two preceding ones.

function fibonacci(n){
    let fibb = [0,1]
    for(let i =2; i<n; i++){
        let n3 = fibb[i-2] + fibb[i-1];
        fibb.push(n3);
    }
    console.log(fibb);
    return fibb;
}

fibonacci(8);

//time complexity is O(n)