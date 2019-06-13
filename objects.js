/*
 
      An object in javaScript is a collection of key value pairs
      example 1:
              const sample = {
                                firstName: "jane",
                                lastName: "doe",
                                age:26,
                                hobbies:[ 'badminton', 'coding'],
                                walk: function() {
                                  return "hey";
                                  }
                             };

            example 2:
              const sample = {
                                name: "kyle",
                                talk(){},
                                eat(){}

                              }


/******************************************************************************************************************/
// creating an object with const
 const person = {
                    name:'Jane',
                    walk(){},
                    talk(){return 'I am speaking';}
                 };

// reading/ accessing object values
console.log(person.name);
console.log(person.talk());

const val ='name';
console.log(person[val]);


/******************************************************************************************************************/

// creating an object with let
 let person1 = {
                    name:'Jane',
                    walk(){},
                    talk(){return 'I am speaking';}
                 };

// reading/ accessing object values
console.log(person1.name);
console.log(person1.talk());

const val1 ='name';
console.log(person1[val1]);