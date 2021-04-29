function solve(arr) {
    let type = typeof (arr);
    let result = 0;

    if (type === 'number') {
        
        result = Math.pow(arr,2) * Math.PI;
        console.log(result.toFixed(2));
    
    } else {
        
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)
    
    }

}

solve(5)