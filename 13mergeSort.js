function merge(left, right){
    let final =[];
    while(left.length && right.length){
        if(left[0]<=right[0]){
            final.push(left.shift())
        }else{
            final.push(right.shift())
        }
    }
    console.log([...final,...left, ...right])
    return [...final,...left, ...right];
}

function mergeSort(arr){
    if(arr.length<2){
        return arr;
    }
    let mid = Math.floor(arr.length/2);
    let left = arr.slice(0,mid)
    let right = arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

let arr = [12,5,4,7,2,1,3];

console.log(mergeSort(arr))
