/*const arr1 = ['a', 'b', 'c'];
console.log(arr1[2]);
console.log(arr1[0]);
console.log('\n');
const nums = [1, 2, 3, 4, 5];
nums.pop();
console.log(nums);
console.log('\n');
nums.push(6);
console.log(nums);*/

//Map Function
//map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]

//filter() method creates a new array with all elements that pass the test implemented by the provided function.
const ages = [15, 22, 18, 30, 12];
const adults = ages.filter((age) => age >= 18);
console.log(adults); // [22, 18, 30]

//reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
const prices = [100,200,300];
const total = prices.reduce((sum,price) => sum+price,0);//600
console.log(total); // 600

