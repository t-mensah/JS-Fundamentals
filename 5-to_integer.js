const arg = process.argv[2]; // get the first argument
const num = parseInt(arg); // try convert to integer

if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log("My number: " + num);
}