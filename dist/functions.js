"use strict";
function add_functions(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log('Result: ' + num);
}
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
printResult(add_functions(5, 3));
let combinedValues; // Function
combinedValues = add_functions;
console.info(combinedValues(6, 7));
addAndHandle(63, 96, (result) => console.log(result));
