//Fibonacci sequence is a sequence in which each number is sum of two preceding ones.

function fibonacci(n){
    let n1=0;
    let n2=1;
    let output= `${n1}` +" "+` ${n2}`+ " ";
    for(let i =0; i<n-2; i++){
        let n3 = n1 + n2;
        output += n3 +" "
        n1=n2;
        n2=n3;
    }
    console.log(output);
}

fibonacci(7);

//time complexity is O(n)