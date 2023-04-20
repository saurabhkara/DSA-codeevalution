function recursiveBinarySearch(arr,target, leftIndex, rightIndex){
    if(leftIndex>rightIndex){
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex)/2);

    if(arr[middleIndex]===target){
        return middleIndex;
    }

    if(target< arr[middleIndex]){
       return recursiveBinarySearch(arr,target,leftIndex, middleIndex-1);
    }else{
       return recursiveBinarySearch(arr,target,middleIndex+1, rightIndex)
    }
}


let arr = [2,4,6,8,9,12,14,16]
console.log(recursiveBinarySearch(arr,6,0,arr.length-1))
console.log(recursiveBinarySearch(arr,7,0,arr.length-1))
console.log(recursiveBinarySearch(arr,8,0,arr.length-1))