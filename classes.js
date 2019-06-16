/*
    creating classes and using in javaScript 
*/
// class of a person(blue print to create object)
class Person {
    constructor(name) {
        this.name = name;

    }
    walk() {
        console.log("walking");
    }
}

const person = new Person("Dav");

console.log(person);
console.log(person.name);
console.log(person.walk());
