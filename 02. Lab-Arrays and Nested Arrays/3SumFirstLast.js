function sum(arr) {
    let num = arr.map(Number);
    
    return num.shift() + num.pop();
}

console.log(sum(['5', '10']));