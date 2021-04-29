// function solve(matrix) {

//     let neighbors = 0;


//     for (let row = 0; row < matrix.length - 1; row++) {

//         for (let col = 0; col < matrix[row].length; col++) {

//             if (matrix[row][col] == matrix[row + 1][col]) {
//                 neighbors++;
//             }
//             // if (matrix[row][col] == matrix[row][col + 1]) {
//             //     neighbors++;
//             // }
//             // if (row == matrix.length - 2 && matrix[row + 1][col] == matrix[row + 1][col + 1]) {
//             //     neighbors++;
//             // }
//         }
//     }

//     return neighbors
// }
// console.log(solve([['test', 'yes', 'yo', 'ho'],
// ['well', 'done', 'yo', '6'],
// ['not', 'done', 'yet', '5']]
// ));


function solve(arrMatrix) {
    let matchCounter = 0;

    for (let r = 0; r < arrMatrix.length -1 ; r++) {
        
        for (let c = 0; c < arrMatrix[r].length; c++) {
            
            if(arrMatrix[r][c] === arrMatrix[r+1][c]){
                matchCounter++;
            }
            if (arrMatrix[r][c] == arrMatrix[r][c + 1]) {
                matchCounter++;
            }
            if (r == arrMatrix.length - 2 && arrMatrix[r + 1][c] == arrMatrix[r + 1][c + 1]) {
                matchCounter++;
            }
       
        }
    }

    return matchCounter;
}

console.log(solve([
    ['2', '2', '5', '7', '4'],
    ['4', '0', '5', '3', '4'],
    ['2', '5', '5', '4', '2'],
   
]));
