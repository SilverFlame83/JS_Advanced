function solve(fruitType,weight,price) {

    let kilo = weight/1000;
    let endSum = kilo * price;

    console.log(`I need $${endSum.toFixed(2)} to buy ${kilo.toFixed(2)} kilograms ${fruitType}.`)
}

solve('apple', 1563, 2.35)