// const person = {
//     name: "jon doe",
//     age:30
// }
//
// module.exports = person


// module wrapper function:
 // (function(exports, require, module, __filename, __dirname) {
//
// })


class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age
    }
    greeting() {
        console.log(`name is ${this.name} im ${this.age}`)
    }
}

module.exports = Person
