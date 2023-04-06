//#Given a positive integer 'n', determine if the number is a power of 2 or not. An integer is a power of two if ////there exists an integer

function isPowerTwo(num) {
  let temp = num;
  if (num < 1) {
    return false;
  }
  while (temp > 1) {
    if (temp % 2 !== 0) {
      return false;
    }
    temp /= 2;
  }
  return true;
}

// console.log(isPowerTwo(2))
// console.log(isPowerTwo(6))
// console.log(isPowerTwo(8))
// console.log(isPowerTwo(7))
// console.log(isPowerTwo(12))
// console.log(isPowerTwo(32))
// console.log(isPowerTwo(64))

//Time complexity of above program is O(logn)

function isPowerTwoByBits(num) {
  if (num < 1) {
    return false;
  }
  return (num & (num - 1)) === 0;
}

console.log(isPowerTwoByBits(4));
console.log(isPowerTwoByBits(5));
console.log(isPowerTwoByBits(8));
console.log(isPowerTwoByBits(16));

//Time complexity of above method is T(n) = O(1);
