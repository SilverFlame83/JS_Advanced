function solve(arrOfNames) {
    arrOfNames.sort((a,b) => a.localeCompare(b))
    .forEach((el,i) =>console.log(`${i+1}.${el}`));

}

solve(["John", "Bob", "Christina", "Ema"])