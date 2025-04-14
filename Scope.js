const user = {
    username : "Niteesh",
    Id : 'bfjgbsidoo',
    price : 6758,

    welcomeMessage : function(){
       console.log(`${this.username} , welcome to website`);
       console.log(this)
    }
}

// user.welcomeMessage();
// user.username = "Nicky";
// user.welcomeMessage();

// console.log(this)
// function chai(){
//     let username = "Hello"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     let username = "Hello"
//     console.log(this.username)
// }
// const chai =()=>{
//     let username = "Hello"
//     //console.log(this.username)
//     console.log(this)
// }
// chai()

// const aadTwo = (num1,num2) => {
//     return num1+num2; 
// }
const addTwo = (num1,num2)=>(num1+num2);

// console.log(aadTwo(3,6));

console.log(addTwo(3,6));