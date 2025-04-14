/*function processArray(arr,callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}

let array1 = [1,2,3,4,5];
processArray(array1,function(num){
    console.log(num * 2);
});

function multiplynumbers(num){
    console.log(num * 10);
}

processArray(array1,multiplications);*/


//scope / closure


/*function outer(){
    let a = 10;
    return function inner(){
        a++;
        console.log(`Count: ${a}`);
    }
}
let counter = outer();
counter(); // Count: 11
counter(); // Count: 12

//IIFE - Immediately Invoked Function Expression    
 (function(){
    let a = 10;
    console.log(a);
    console.log('I am IIFE function');
    //IIFE function is executed immediately after it is defined.
    //It is used to create a private scope for variables and functions.
    //It is also used to avoid polluting the global scope.
 })(); 

 //currying
 // Currying is a technique in functional programming where a function takes multiple arguments and transforms it into a sequence of functions that each take a single argument.
// This allows for partial application of functions and can lead to more reusable and composable code.
const addNUm = a=> b => c => a + b * c;
let add = addNUm(1)(2)(3); // 6
console.log(add);

function add1(a,b){
    console.log(a + b);
}
let sum = add1(1,2); // 3

function forEach(arr,callback){
    for(let i = 0; i < arr.length; i++){
        callback(arr[i]);
    }
}
let array1 = [1,2,3,4,5];
forEach(array1,function(num){
    console.log(num * num);
});*/
 
/*function toCheckVowels(str){
    let count = 0;
    str = str.toLowerCase();
    for(const char of str){
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){ 
            count++;
        }
}
    return count;
}
let str = 'HelloWorld';
let count1 = toCheckVowels(str);
console.log(`Number of vowels: ${count1}`);*/

let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach(function printVal(num){
//     console.log(num);
// });


//arr.forEach(num => console.log(num**2)); // Arrow function
arr.forEach((num) =>{
   console.log(num**2);
});