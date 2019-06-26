//rest operator is used to pass multiple parameters as arguments to a method we can used any name instead of args

const testFilter = (...args) => {

    return args.filter(el => el <= 4);
}

const testSort = (...args) => {

    return args.sort();
}

const testMap = (...args) => {

    return args.map(el => el * 2);
}


console.log(testFilter(4, 1, 8, 2, 0, 9));
console.log(testSort(4, 1, 8, 2, 0, 9));
console.log(testMap(4, 1, 8, 2, 0, 9));
