function operationMath(numOne,numTwo,strArg) {
    let result = 0;

    switch (strArg) {
        case '+': result = numOne + numTwo; break;
        case '-': result = numOne - numTwo; break;
        case '*': result = numOne * numTwo; break;
        case '/': result = numOne / numTwo; break;
        case '%': result = numOne % numTwo; break;
        case '**': result = numOne ** numTwo; break;
         
    }
    console.log(result)
}

operationMath(5, 6, '**');