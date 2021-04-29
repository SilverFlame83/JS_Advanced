function solve(input) {
    let num = Number(input[0]);

    let objCommand = {
        'chop':(num) => num / 2,
        'dice':(num) => Math.sqrt(num),
        'spice':(num) => num -1,
        'bake':(num) => num *3,
        'fillet':(num) => num * 0.8
    }
    for (let i = 1; i < input.length; i++){
        let command = input[i];

        if(objCommand.hasOwnproperty(command)){
            print(objCommand[command](num));
            num = objCommand[command](num);
        }
    }
    function print(num) {
        console.log(num.toFixed(2));
    }
}

solve(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'])