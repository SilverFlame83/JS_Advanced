function solve(arr) {
    let result = [];
    
    let num = 1;

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];
        if(command == 'add') {
            result.push(num);
        } else if(command == 'remove') {
            result.pop();
        }
        num++;
    }
    if (result.length > 0) {
        console.log(result.join('\n'));
    } else {
        console.log('Empty')
    }
}

solve(['remove',
    'remove',
    'remove'])