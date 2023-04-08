
//Direct Recursion
function head(n){
    console.log(n);
    if(n<=0){
        return 0;
    }
    head(n-1)
}

// head(5);

function tail(n){
    if(n<0){
        return 0;
    }
    tail(n-1);
    console.log(n);
}

// tail(5);

