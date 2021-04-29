function solve (input) {
    let result = '';

    if (input === undefined) {
        for (let i = 0; i < 5; i++) {
            let asterix = ' ';
            for (let j = 0; j < 5; j++) {
                asterix += ' *';
            }
            result += `${asterix}\n`;
        }
        console.log(result);
    } else {
        for (let i = 0; i < input; i++) {
            let asterix = ' ';
            for (let j = 0; j < input; j++) {
                asterix += ' *';
            }
            result += `${asterix}\n`;
        }
        console.log(result);
    }
}

solve(5)