let myArr = [7, 6, 1, 5, 2, 13];
let moreNum = [5, 8, 11, 0, 4];

let result = myArr.reduce((acc, crr) => acc + crr, 0)

console.log(result);

let aVg = moreNum.reduce((acc, c, i, a) => acc + c / a.length, 0);

console.log(aVg);

let max = myArr.reduce((acc, c) => acc > c ? acc : c);

console.log(max)
