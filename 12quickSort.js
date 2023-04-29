
//Inplace quick sort algorithm
function swap(arr,i,j){
    let temp = arr[i];
    arr[i]= arr[j];
    arr[j]=temp;
}

function partition(arr, low, high) {
  let i = low - 1;
  let pivot = arr[high];
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        swap(arr,i,j)
      }
    }
  swap(arr,i+1,high)
  return i+1; 

}

function quickSort(arr, low, high) {

  if (low < high) {
    let pivot = partition(arr, low, high);
    console.log(pivot);
    quickSort(arr,low,pivot-1);
    quickSort(arr,pivot+1,high);
  }
 
}
let arr = [5, 4, -2, 6, 8, 12, 7];

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);


function quickSort2(arr){
    if(arr.length <2){
        return arr
    }
    let pivot =arr[arr.length-1];
    let left =[];
    let right =[];
    for(let j=0;j<arr.length-1;j++){
        if(arr[j]<pivot){
            left.push(arr[j])
        }else{
            right.push(arr[j])
        }
    }

    return [...quickSort2(left),pivot, ...quickSort2(right)]
}

console.log(quickSort2(arr))
console.log(arr);