
function towerOfHanoi(num, src, dest, using){
    if(num===0){
        return
    }

    towerOfHanoi(num-1,src,using,dest);
    console.log(`${num} rings moved to ${src}  to ${dest} using ${using}`);
    towerOfHanoi(num-1,using, dest,src);
}

console.log(towerOfHanoi(1,'A','C','B'));