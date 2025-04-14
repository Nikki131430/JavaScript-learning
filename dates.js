// let date = new Date();

// console.log("1 -> "+date.toDateString());
// console.log("2 -> "+date.toTimeString());
// console.log("3 -> "+date.toISOString());
// console.log("4 -> "+date.toString());
// console.log("5 -> "+date.toUTCString());
// console.log("6 -> "+date.toLocaleString());
// console.log("7 -> "+date.toLocaleDateString());
// console.log("8 -> "+date.toLocaleTimeString());
// console.log("9 -> "+date);
// console.log(typeof date)

// let myCreatedDate = new Date(2023,3,23,5,45);
// console.log(myCreatedDate.toLocaleString())
// let myCreatedDate = new Date("2023-03-23");
// console.log(myCreatedDate.toLocaleString())

let myCreatedDate = new Date("2023-03-23"); 
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate1 = new Date("01-04-2023");  
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

