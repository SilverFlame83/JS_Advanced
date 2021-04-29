function agregate(arr) {
   
    let sum = 0;
    let inverseSum = 0;
    let conacat = '';

    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        sum += current;
        inverseSum += 1/current;
        conacat += current;
    }
    console.log(`${sum}\n${inverseSum}\n${conacat}`);
}

agregate([2, 4, 8, 16])

//Second Solution

function aggregateElements(input) {
    let elements = input.map(Number);
    aggregate(elements, 0, (a, b)=>a + b);
    aggregate(elements, 0, (a, b)=>a + 1 / b);
    aggregate(elements, "", (a, b)=>a + b);
 
    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i++) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}
 
aggregateElements([2, 4, 8, 16]);