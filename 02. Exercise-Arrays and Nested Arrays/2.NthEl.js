function solve(arr,step) {
    return  arr.filter((el,i) => i % step === 0);
    
}

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6));


//Second Solution
function solve(arr,step) {
    let result = [];

    for (let i = 0; i < arr.length; i += step){
        result.push(arr[i]);
    }


    return result
}

console.log(solve(['1', 
'2',
'3', 
'4', 
'5'], 
6));