function solve(arr) {
    let heroRegister = [];

    for(let hero of arr){
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        let heroes = {name, level,items};

        heroRegister.push(heroes);
    }
    
    return JSON.stringify(heroRegister);
}

console.log(solve(['Isacc / 25',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));