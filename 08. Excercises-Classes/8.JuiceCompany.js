function juice(input) {
    let juiceStorage = {};
    let endStorage = {};

    for (let line of input) {
        let bottles = 0;
        let [product, qty] = line.split('=>');
        qty = Number(qty);
        if (!juiceStorage.hasOwnProperty(product)) {
            juiceStorage[product] = 0;
        }
        juiceStorage[product] += qty;
        let storage = juiceStorage[product];
        if (storage >= 1000) {
            for (let i = storage; i >= 1000; i -= 1000) {
                bottles++;
                storage -= 1000;
            }
            if(!endStorage.hasOwnProperty(product)){
                endStorage[product] = 0;
            }
           endStorage[product] += bottles;
           juiceStorage[product]= storage;
        }
    }
    for (let [pr,qty] of Object.entries(endStorage)) {
        console.log(`${pr.trim()} => ${qty}`);
    }
}

juice(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])