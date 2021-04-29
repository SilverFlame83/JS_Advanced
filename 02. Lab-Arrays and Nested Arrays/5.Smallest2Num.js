function solve(arr) {
    let result = arr.sort((a, b) => a - b);
    result = result.slice(0,2);
    let endResult = [];

    for (let el of result) {
        endResult.push(el);
    }
    console.log(endResult.join(' '));
}

solve([3, 0, 10, 4, 7, 3])