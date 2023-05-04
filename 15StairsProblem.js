
function stairsProblem(num){
    let sol = [1,2];
    if(num===1 || num===2){
        sol[num];
    }
    for(let i=2;i<=num;i++){
        sol[i] =sol[i-1] +sol[i-2];
    }
    return sol[num-1]
}

console.log(stairsProblem(5));
console.log(stairsProblem(6));