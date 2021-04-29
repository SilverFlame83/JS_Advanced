function solve(arr,rotation) {
    
    for (let i = 0; i< rotation; i++){
        let end = arr.pop();
        arr.unshift(end);
    }

    console.log(arr.join(' '));
}

solve(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15)