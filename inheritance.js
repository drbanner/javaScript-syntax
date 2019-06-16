/*
    inheritance in js 
    note when we inherit a class we inhert variables and methods and also the constructor of the class also
*/
class Person {
    constructor(name) {
        this.name = name;

    }
    walk() {
        console.log("walking");
    }
};

class Teacher extends Person {

    constructor(name, education) {
        super(name);
        this.education = education;
    }
    teach() {
        console.log("teaching");
    }
};

const teacher = new Teacher('Jane Doe', 'MS');
console.log(teacher.name);
console.log(teacher.education);
console.log(teacher.teach());
console.log(teacher.walk());
