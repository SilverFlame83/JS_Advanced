function solve(arr) {
    const callObj = {};
    
    for (let i = 0; i < arr.length; i += 2){
        callObj[arr[i]] = Number(arr[i+1]);
    }

    return callObj
}

console.log(solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']));

// function solve(arr) {
//     const callObj = {};
//     for (let i = 0; i < arr.length; i += 2) {
//         let product = arr[i];
//         let qty = Number(arr[i + 1]);

//         if(!callObj.hasOwnProperty(product)){
//             callObj[product] = 0;
//         }
//         callObj[product] += qty;
//     }
//     console.log(callObj);
// }

// solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])