let arr = [
    [4, 6, 3, 0],
    [2, 1, -2],
    [-5, 17],
    [7, 3, 9, 12]
];

// for (let row of arr) {
    
//         console.log(row.join(' '));
// }

let result = arr.reduce((acc,c) => acc.concat(c));



console.log(Math.max(...result));


