function even(inputArr){
    let result = [];

    for(let i = 0; i < inputArr.length; i+=2) {
        result[result.length] = inputArr[i];
    }

    return result.join(' ');
}


console.log(even(['20', '30', '40', '50', '60']));

//Second Solution

function solve(arr) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            resultArr.push(arr[i]);
        }
    }

    return resultArr.join(' ');
}

console.log(solve(['20', '30', '40', '50', '60']));