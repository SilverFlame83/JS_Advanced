function solve(...rest) {
    let arguments = rest;
    let obj = {};
    
    for(let arg of arguments){
        console.log(`${typeof(arg)}: ${arg}`);
        if(! obj[typeof(arg)]){
            obj[typeof(arg)] = 1;
        } else {
            obj[typeof(arg)]++;
        }
    }
 
    Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach(el => console.log(`${el} = ${obj[el]}`))
}

solve(42, 'cat', [], undefined);

//Second Solution

function solve(arguments) {
    const firstType = typeof firstArr;
    const secondType = typeof secondArr;
    const thirdType = typeof thirdArr;

    const obj = {
        [firstType]: firstArr,
        [secondType]: secondArr,
        [thirdType]: thirdArr
    }
    
    let result = [];

    
    for (let el in obj){
        result.push(`${el}: ${obj[el]}`);
    }
    console.log(result.join('\n'))
}

// solve(['cat', 42, function () { console.log('Hello world!'); }])