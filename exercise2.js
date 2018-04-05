var result = 0; // set result to 0

for (var i = 2; i < process.argv.length; i++) { // from 2nd argument and loop by its length
  result += Number(process.argv[i]); // sum up
}

console.log(result);