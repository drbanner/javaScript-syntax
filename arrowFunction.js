/* Arrow functions in js */


/*
Below functions are the same one with the arrow function and the other with out arrow function(old school)
*/

const square = function (number) {
    return number * number;
};


const square1 = num => num * num;

console.log(square(5));
console.log(square1(6));

/*****************************************************************************************************/

const jobs = [

    {
        id: 1,
        isActive: true
    },
    {
        id: 1,
        isActive: true
    },
    {
        id: 1,
        isActive: false
    },
];

//jobs.filter(j.isActive)
console.log(jobs.filter(j.isActive));
const activeJobs = jobs.filter(job => job.isActive);
console.log(activeJobs);
