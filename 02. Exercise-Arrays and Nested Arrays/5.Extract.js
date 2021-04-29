function solve(arr) {

    return arr.reduce(function (acc, c) {
        if (c >= acc[acc.length - 1] || acc.length === 0) {
            acc.push(c);
        }
        return acc;
    }, [])
}

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]));
//Second Solution

function solve(arr) {
    let endArr = [];

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i]
        if (current >= endArr[endArr.length - 1] || endArr.length === 0) {
            endArr.push(current);
        }
    }

    return endArr;

}
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]));
