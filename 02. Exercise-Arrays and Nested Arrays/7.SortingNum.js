function solve(arr) {
    let ascending = arr.sort((a, b) => a - b);
    let resultArr = [];

    while (ascending.length != 0) {
        let smallest = ascending.shift();
        let biggest = ascending.pop();

        resultArr.push(smallest, biggest);
    }

    return resultArr;

}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

//Second Solution

function solve(arr) {
    let resultArr = []

    while (arr.length != 0) {
        let smallest = Math.min(...arr);
        let indexOfSmall = arr.indexOf(smallest);
        resultArr.push(smallest);
        arr.splice(indexOfSmall, 1);

        let biggest = Math.max(...arr);
        let indexOfBiggest = arr.indexOf(biggest);
        resultArr.push(biggest);

        arr.splice(indexOfBiggest, 1);
    }
    return resultArr;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));