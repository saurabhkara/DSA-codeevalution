function insertionSort(arr){

    for(let i=1;i<arr.length;i++){
        let temp =arr[i];
        let index;
        for(let j=i-1;j>=0;j--){
            if(arr[j]>temp){
                arr[j+1]=arr[j];
                index =j;
            }
        }
        if(index){
            arr[index] = temp
        }
    }

}


function insertionSortWhile(arr){
    let j;
    for(let i =1;i<arr.length;i++){
        let temp = arr[i];
         j=i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1]=arr[j];
            j=j-1;
        }

        arr[j+1]= temp;

    }
}


let arr = [20,-6,8,4,2];

// insertionSort(arr);
// console.log(arr);

// insertionSortWhile(arr);
// console.log(arr);


function recursriveInsertionSort(arr, n){
    if(n<=1){
        return
    }
    recursriveInsertionSort(arr,n-1);
    let last = arr[n-1];
    let j= n-2;

    while(j>=0 && arr[j]>last){
        arr[j+1]=arr[j];
        j--;
    }

    arr[j+1]=last;
}

recursriveInsertionSort(arr, arr.length);
console.log(arr);