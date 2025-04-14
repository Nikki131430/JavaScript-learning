// problem 1 - filter students by grad
/*const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'C' },
    { name: 'David', grade: 'A' },
    { name: 'Eve', grade: 'F' }
];
const filterStudenstByGrade = students.filter(students => students.grade === 'A');
console.log(filterStudenstByGrade);*/

//problem 2 - destructure object presonal information
/*const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    country: 'USA'
}
const { name, age, city } = person;
console.log(`Name: ${name}, Age: ${age}, City: ${city}`);
console.log('ABS'.toLowerCase());*/

//problem 3 - filter marks
/*let arr = [87,93,64,99,86,54,67,94];
let filteredMarks = arr.filter(marks => marks >= 90);
console.log(filteredMarks); // [93, 99, 94]*/


// problem 4 - 
// const prompt = require('prompt-sync')({ sigint: true });
// let n = prompt('Enter a number: ');
// let arr = [];
// for(let i = 1; i <= n; i++){
//     arr.push(i);
// }
// console.log(arr); // [1, 2, 3, ..., n]

// console.log(arr.reduce((acc, curr) => acc + curr, 0)); // sum of all elements in the array

// console.log(arr.reduce((acc, curr) => acc * curr, 1));

//problem 3 - use map to create a new array to double the elements of an array
const number = [1, 2, 3, 4, 5];
const doubled = number.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
// problem 4 - use filter to create a new array with only even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4, 6, 8, 10]
// problem 5 - use reduce to calculate the sum of an array of numbers
const numbersArray = [1, 2, 3, 4, 5];
const sum = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);  
console.log(sum); // 15
