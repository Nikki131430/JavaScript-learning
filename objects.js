/*const students = {
    name: "John Doe",
    age: 20,
    major: "Computer Science",
    courses: ["CS101", "CS102", "CS103"],
};
const courses = {
    courseName: "CS101",
    credits: 3,
    instructor: "Dr. Smith",
    studentsEnrolled: ["John Doe", "Jane Doe"],
};
const instructors = {
    name: "Dr. Smith",
    age: 45,
    department: "Computer Science",
    coursesTaught: ["CS101", "CS102"],
};
console.log(students.name); // John Doe
console.log(courses.courseName); // CS101   
//object methoda :- Function defined inside an object is called a method.
const person = {
    firstName:"Niteesh",
    Lastname:"Prajapati",
    fullname(){
        return `${this.firstName} ${this.Lastname}`;//this.firstName = person.firstName
    }
}
console.log(person.fullname()); // Niteesh Prajapati
console.log(this.firstName); // undefined
console.log(this);


const person1 = {
    firstName:"Niteesh",
    Lastname:"Prajapati",
    fullname:()=>{
        return `${this.firstName} ${this.Lastname}`;//this refers to the global object, not the person1 object
    }
}
console.log(person1.fullname());*/

const gameName = new String('Niteesh-prajapti-engineer-student')
console.log(gameName[0]);
console.log(gameName.__proto__); //
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4)
console.log(newString);

// const anothermethod = gameName.slice(-1,-5)
// console.log(anothermethod);
const anothermethod ="    Niteesh    ";
console.log(anothermethod)
console.log(anothermethod.trim())

const url = "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
console.log(url.replace('.org','.in'))

console.log(url.includes("Niteesh"))
console.log(gameName.split('-'))