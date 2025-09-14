function add(a, b) { //defines the function
    return a + b;
}

const a = parseInt(process.argv[2]); //first integer
const b = parseInt(process.argv[3]); //second integer

console.log(add(a, b)); 