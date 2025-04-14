const arr1 = [1, 2, 3];
const arr2 = [...arr1,4, 5, 6];
console.log(arr2); 
// Output: [1, 2, 3, 4, 5, 6]
// The spread operator (...) is used to expand an iterable (like an array) into its elements.
// In this case, it takes the elements of arr1 and adds them to arr2, followed by 4, 5, and 6.  
console.log(arr2[4]);

const arr3 = [...arr1];
const obj = {a: 1, b: 2};
const obj1 = {b:2,c:3};
const obj2 = {a:0,...obj, ...obj1, d: 4, c: 5};
console.log(obj2);

