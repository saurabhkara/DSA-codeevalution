//Bubble sort 

function bubbleSort(arr){
    let flag;
    do{
        flag =false;
        for(let i=0;i<arr.length-1;i++){
            
            if(arr[i]>arr[i+1]){
                console.log(arr[i],arr[i+1]);
                let temp = arr[i]
                arr[i]= arr[i+1];
                arr[i+1] = temp;
                flag=true
            }
        }
    }while(flag)
    
}


function bubbleSort2(arr){
    let swap;
    for(let i=0;i<arr.length-1;i++){
        swap =false;
        for(let j=0;j<arr.length-1-i;j++){
            swap= true;
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j]=arr[j+1];
                arr[j+1]= temp;
            }
        }

        if(!swap){
            break;
        }
    }
}

let arr = [5,4,2,1,-5,8,7];

// bubbleSort(arr)
bubbleSort2(arr)

console.log(arr);