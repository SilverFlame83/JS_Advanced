function biggerHalf(number) {
    return number
        .sort((a, b) => a - b)
        .slice(number.length / 2);
}

console.log(biggerHalf([3, 19, 14, 7, 2, 19, 6]));

//Second Solution

function solve(arr) {
    let sorted = arr.sort((a, b) => a - b)
    let modified = [];

    for (let i = Math.floor(sorted.length / 2); i < sorted.length; i++) {
        modified.push(sorted[i]);
    }
    return modified;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));