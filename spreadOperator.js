/*
    Spred operator is used to mauplate the array objects like concate etc
*/
const first = [1, 2, 3];
const second = [4, 5, 6];


// old school
const combined = first.concat(second);
console.log(combined);


// using spread operator 
const combined1 = [...first, ...second]
console.log(combined1);


// using spread operator we can add element in the middle of concatinated objects
const combined2 = [...first, 'alpha', ...second, 12, 'beta'];
console.log(combined2);


// cloning using the spread operator
const clone = first;
console.log(clone);

const clone2 = [...second];
console.log(clone2);


// sperad operator on objects
const firstObj = {
    name: 'Jane'
};
const secondObj = {
    job: 'developer'
};

const combineObj = {
    ...firstObj,
    ...secondObj,
    location: 'USA'
};
console.log(combineObj);

// cloning object using speread operator
const cloneFirstObj = firstObj;
console.log(cloneFirstObj);


const cloneSecondObj = {
    ...secondObj
};

console.log(cloneSecondObj);
