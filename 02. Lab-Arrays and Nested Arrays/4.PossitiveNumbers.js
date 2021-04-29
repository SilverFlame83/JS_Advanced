function positiveNegative(numbers) {
    const result = [];

    for (let num of numbers) {
        if (num < 0) {
            result.unshift(num);
        } else {
            result.push(num);
        }
    }

    return result.join('\n');
}

console.log(positiveNegative([8, -3, -4, 5, -2]));

//Second SOolution

function solve(arr) {
    let negative = [];
    let positive = [];


    for (let num of arr) {
        if (num < 0) {
            negative.unshift(num);
        } else if (num >= 0) {
            positive.push(num);
        }

    }
    let result = negative + "," + positive;
    result = result.split(',');
    for (let num of result) {
        console.log(num)
    }

}

solve([8, -3, -4, 5, -2]);