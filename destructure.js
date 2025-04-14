//object destructuring
const person = {
    name1:'Shyam',
    age : 30,
    city:'Kathmandu' 
};
const {name1,age,city} = person;
console.log(name1,city); // Shyam
console.log(person.age);

const color = ['red','green','blue'];
const [f,s,t] = color;
console.log(f,t,s); // red
