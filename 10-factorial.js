
//computes and print factorial

function factorial(n) { //recursive function
  if (isNaN(n) || n <= 0) { //case
    return 1; 
  }
  return n * factorial(n - 1); //multiplier
}

const num = parseInt(process.argv[2]);
console.log(factorial(num));
