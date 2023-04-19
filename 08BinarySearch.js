
function binarySearch(arr,target){
    let leftIndex = 0;
    let rightIndex = arr.length -1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex)/2);
        console.log(leftIndex,rightIndex,middleIndex);
        if(arr[middleIndex] === target ){
            return middleIndex;
        }

        if(arr[middleIndex]< target){
            leftIndex=middleIndex+1;
        }else{
            rightIndex = middleIndex -1;
        }
    }
    return -1
};

let arr = [ 2,4,5,7,8,9,12];
// console.log(binarySearch(arr,5));
console.log(binarySearch(arr,6));