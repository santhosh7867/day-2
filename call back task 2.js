function exclaim(inputString) {
    return inputString + "!";
}
let a = exclaim('Adrian');
let b = exclaim(exclaim('Adrian'));
console.log(a);
console.log(b);