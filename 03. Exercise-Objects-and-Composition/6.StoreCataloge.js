function solve(arr) {
    let storage = {};

    for (let product of arr) {
        let [name, price] = product.split(' : ');
        let letter = name[0];
        if (!storage[letter]) {
            storage[letter] = []
        }
        storage[letter].push({ name, price: Number(price) });
        storage[letter].sort((a,b) => a.name.localeCompare(b.name));

    }
    let result = [];
    let sorted = Object.entries(storage).sort((a,b) => a[0].localeCompare(b[0]))
    
    for (let product of sorted) {
        result.push(`${product[0]}`);
        for (let el of product[1]){
            result.push(`  ${el.name}: ${el.price}`)
        }
        
    }
     
    console.log(result.join('\n'));

}

solve(
    ['Banana : 2',
    'Rubic\'s Cube : 5',
    'Raspberry P : 4999',
    'Rolex : 100000',
    'Rollon : 10',
    'Rali Car : 2000000',
    'Pesho : 0.000001',
    'Barrel : 10']
    );