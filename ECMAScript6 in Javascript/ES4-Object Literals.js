
// Why should you use it?
// Object literals are easy to read and understand.
// Object literals are more efficient than other data types.
// Object literals are versatile and can store any type of data.

// Object literals are one of the most commonly used data structures in JavaScript. They are used to store collections of data, and can be used to represent complex data structures such as objects, arrays, functions, and even regular expressions. Object literals are also used to store information about a particular instance of an object, such as its state or behavior.

 
// function person(firstName, lastName, age) {
 
//     return { 
//         firstName: firstName, 
//         lastName: lastName, 
//         age: age
//     }
// }
 
 
// let ali=person("Ali","Grater",50)
// let Paul=person("Paul","Molive",25)
// console.log(ali)
// console.log(Paul)


/** benfits -> Object Literal Syntax Extensions in ES6
 * Enhanced way to allocate variable 
 * Enhaced way to manage our data
 * Short-cut way to write code 
 * Mostly used front-end react,vue js,etc
 * method short-cut defination
 * properity short-hard 
 * The object literal is one of the most popular patterns for creating objects in JavaScript because of its simplicity. ES6 makes the object literal more succinct and powerful by extending the syntax in some ways.
 */

function person(firstName, lastName, age) {
 
    return { 
        firstName,      //Shorthand Assignment
        lastName, 
        age,
        active:true     //Regular 
 
    }
}
 
let ali=person("Ali","Grater",50)
let Paul=person("Paul","Molive",25)

console.log(ali)
console.log(Paul)