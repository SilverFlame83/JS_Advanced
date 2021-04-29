function solve(numOne,numTwo) {
    numOne = Number(numOne);
    numTwo = Number(numTwo);
    let sum = 0;

    for(let i = numOne; i <= numTwo; i++) {
        sum += i;
    }

    return sum;
}

console.log(solve('1', '5' ));