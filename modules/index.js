/*
    modularity in javaScript (**Used in react**)
    
    In javaScript each js file is module(modulaity is introduced in ECMAScript)
*/

import { promote, Teacher } from "./teacher";

const teacher = new Teacher("Jawid", "MBA");
console.log(teacher.teach());
