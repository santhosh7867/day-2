function san(number) {
    if (typeof number !== 'number' || number <= 0 || !Number.isInteger(number)) {
        return false;
    }
    return true;
}
console.log(san(-15));   
console.log(san(1));    
console.log(san(10.22));
console.log(san(10/0));