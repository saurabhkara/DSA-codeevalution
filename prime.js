//Given an natural number 'n',determine if the number is prime or not

function isPrime(num) {
  let flag = true;
  if (num < 2) {
    console.log("Given number is not natural number");
    return flag;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      flag = false;
      break;
    }
  }

  return flag;
}

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(11));
// console.log(isPrime(15));


//Big O time complexity is O(n)



//Optimized 

function isPrimeOptimed(num) {
    let flag = true;
    if (num < 2) {
      console.log("Given number is not natural number");
      return flag;
    }
  
    for (let i = 2; i <=Math.sqrt(num); i++) {
      if (num % i === 0) {
        flag = false;
        break;
      }
    }
  
    return flag;
  }

console.log(isPrimeOptimed(100))
console.log(isPrimeOptimed(1000))
console.log(isPrimeOptimed(1009))

//time complexity of above program become T(n) = O(sqrt(n));