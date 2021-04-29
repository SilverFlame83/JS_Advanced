function solve(firstStr,secondStr,thirdStr) {
    let result = firstStr.length+ secondStr.length+ thirdStr.length;
    let round = Math.round(result/3);

    console.log(`${result}\n${round}`);
}

solve('pasta', '5', '22.3')