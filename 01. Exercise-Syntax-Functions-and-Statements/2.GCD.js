function solve(numOne, numTwo) {
    if((typeof numOne !== 'number') ||(typeof numTwo !== 'number')){
        return false;
    }
    while(numTwo){
        let div = numTwo;
        numTwo = numOne % numTwo;
        numOne = div;
    }
    return numOne
}

console.log(solve(2154, 458));