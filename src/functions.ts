function add_functions(n1: number, n2: number) {
    return n1 + n2;
}

function printResult(num: number): void {
    console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add_functions(5, 3));

let combinedValues: (a: number, b: number) => number; // Function

combinedValues = add_functions;

console.info(combinedValues(6, 7));

addAndHandle(63, 96, (result) => console.log(result));
