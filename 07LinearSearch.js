
let arr =[-5,2,10,4,6];

function linearSearch(arr, target){
    let index =-1;
    for(let i =0; i<arr.length; i++){
        if(arr[i]===target){
            index=i
        }
    }
    return index;
}

console.log(linearSearch(arr,2));
console.log(linearSearch(arr,4));


//Time Complexity T(n) = O(n);