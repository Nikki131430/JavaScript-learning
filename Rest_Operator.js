// This code demonstrates the use of the rest operator in JavaScript.
// The rest operator is used to collect all remaining arguments into an array.  
function sum(...numbers){
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
// The sum function takes any number of arguments and returns their sum.


