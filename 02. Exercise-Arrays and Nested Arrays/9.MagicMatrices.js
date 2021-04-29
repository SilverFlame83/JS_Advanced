function solve(arr) {
    let rowSum = [];
    let columnSum = [];

    for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        let sum = row.reduce((a, b) => a + b, 0)
        rowSum.push(sum);
    }

    for (let i = 0; i < arr.length; i++) {
        let column = [];
        for (let j = 0; j < arr.length; j++) {
            let index = arr.length - 1 - j;
            column.push(arr[index][i]);
        }
        let sum = column.reduce((a,b) => a+b,0);
        columnSum.push(sum);
    }

    return rowSum.concat(columnSum).every((el,i,arr) => el === arr[0]);
}

console.log(solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]));

//Second Solution

function solve(arrMatrix) {
    let rowResult = [];
    let collResult = [];

    for (let row = 0; row < arrMatrix.length; row++) {
        let firstRow = arrMatrix[row];
        let sum = firstRow.reduce((a, b) => a + b, 0);
        rowResult.push(sum);
    }

    for (let i = 0; i < arrMatrix.length; i++) {
        let colum = [];
        for (let y = 0; y < arrMatrix.length; y++) {
            let index = arrMatrix.length - 1 - y;
            colum.push(arrMatrix[index][i]);
        }
        let sum = colum.reduce((a, b) => a + b, 0);
        collResult.push(sum);

    }

    return rowResult.concat(collResult).every((el,i,arr) => el === arr[0])
}

console.log(solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]));