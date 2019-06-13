/* Introduction to this keyword in js*/

/*
    Person object 
*/
const person = {
    name: "Mosh",
    walk() {
        console.log(this);
    }
}

/*
    returns / logs the person object as this refers to the person object
*/
person.walk();

/*
    assinging the walk method to the new const walk
*/
const walk = person.walk;
console.log(walk);


/*
    returns / logs the window/global object as this refers to the window(since 'this' is not called from a mehtod an object so 'this' refers to window object)
    
    note: id strict mode in enabled(enabled in react apps) then returns undefined instead of window object 
*/

walk();

/******************************************************************************************************************/

/* 
    Binding this
    
    The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
    
        note: In js functions are objects

*/

const walk1 = person.walk.bind(person);
console.log(walk);

walk1();
