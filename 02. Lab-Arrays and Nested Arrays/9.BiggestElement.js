function biggest(arrMatrix) {
    let max = arrMatrix.reduce((acc, c) => acc.concat(c));
    return Math.max(...max)
}

console.log(biggest([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));

//Second Solution

function solve(arrayMatrix) {
    let max = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < arrayMatrix.length; i++) {
        for (let j = 0; j <= arrayMatrix.length; j++) {
            let current = arrayMatrix[i][j];

            if (current > max) {
                max = current;
            }
        }
    }
    return max;
}

console.log(solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]));