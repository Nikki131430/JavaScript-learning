/*let i = 1;
while(i<=5){
    console.log("Hello World", i);
    i++;
}*/

/*for(let i = 1; i <= 5; i++){
    console.log("Hello World", i);
}
console.log("\n");
let i = 1;
do{
    console.log("Hello World", i);
    i++;
}while(i<=5);*/

/*const fruits = ["apple", "banana", "orange", "mango"];
for(let i in fruits){
    console.log(fruits[i]);
}
console.log("\n");  

const person1 = {
    name: "John",
    age: 30,
    city: "New York"

};
for(let key in person1){
    console.log(key,':', person1[key]);
}
*/
console.log("\n");
fruits = ["apple", "banana", "orange", "mango"];

for(let fruit of fruits){
    console.log(fruit);
}
console.log("\n");
let con = 'hello world';
for(let char of con){
    console.log(char);
}

console.log("\n");
const user = new Map([
    ["John", 30],
    ["Jane", 25],
    ["Bob", 35]
]);
for(let [key, value] of user){
    //console.log(key, ':', value);
    console.log(`${key} : ${value}`);
}
console.log("\n");


let arr1 =[1,2,3]
let arr2 = [...arr1]
console.log(arr1)
console.log(arr2)
arr1.push(4)
console.log(arr1)
console.log(arr2)
