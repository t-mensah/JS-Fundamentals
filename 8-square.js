const size = parseInt(process.argv[2]); //coverts first argument to integer

if (isNaN(size)) {
    console.log("Missing size") // if not a number, print "Missing size"
} else{
    for (let i = 0; i < size; i++) { //for loop print rows
        console.log("X".repeat(size)); //.repeat(size) repeats "X" size times to built each row
    }
}