function solve(input) {
    let lowestPrice = {};

    for (let line of input) {
        let [townInfo, productName, price] = line.split(' | ');
        price = Number(price);
        

        if (!lowestPrice.hasOwnProperty(productName)) {
            lowestPrice[productName] = {townInfo, price:price};
            
        } else {
            lowestPrice[productName] = lowestPrice[productName].price <= price ? lowestPrice[productName] : {townInfo, price:price};
        }
    
    }
    let result = [];
    for (let key in lowestPrice) {
         result.push(`${key} -> ${lowestPrice[key].price} (${lowestPrice[key].townInfo})`);
    }
    return result.join('\n');
}

console.log(solve([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000'
  ]
));