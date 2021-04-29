function solve(n, k) {
    let resultEl = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = findStartIndex(0, i - k);
        let el = resultEl.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0)

        resultEl.push(el)
        resultEl.join(', ')
    }
    function findStartIndex(a, b) {
        return Math.max(a, b);
    }
    let [...result] = resultEl;
    return result;
}
console.log(solve(8, 2));

//Second Solution

function lastKNumbersSequence(n, k) {
    let result = [1];

    for (let i = 1; i < n; i++) {
        let startIndex = Math.max(0, i - k);
        let currentElement = result.slice(startIndex, startIndex + k).reduce((a, b) => a + b, 0);
        result.push(currentElement);
    }

    console.log(result.join(" "));
}

lastKNumbersSequence(6, 3)