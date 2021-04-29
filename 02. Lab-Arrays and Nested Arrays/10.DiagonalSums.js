function diagonalSum(matrixArr) {
    let mainDiag = 0;
    let secondDiag = 0;

    for (let i = 0; i < matrixArr.length; i++) {
        mainDiag += matrixArr[i][i];
        secondDiag += matrixArr[i][matrixArr.length -i -1];
    }

    console.log(mainDiag, secondDiag)
}

diagonalSum([
    [20, 40], 
    [10, 60]
]);

