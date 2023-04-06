function recursiveFibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return 1;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

// console.log(recursiveFibonacci(6))
// console.log(recursiveFibonacci(0))
// console.log(recursiveFibonacci(1))