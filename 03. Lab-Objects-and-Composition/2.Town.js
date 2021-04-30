function solve(arr) {
    let townPopulation = {};

    for (let townStr of arr) {
        let [name, pop] = arr.split(' <-> ');
        pop = Number(pop);

        if (townPopulation[name] != undefined) {
            pop += townPopulation[name];
        }

        townPopulation[name] = pop;
    }

    for (let name in townPopulation) {
        console.log(`${name} : ${townPopulation[name]}`);
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);

//Second Solution
function solve(arr) {
    for (let city of arr) {
        let [town, population] = city.split(' <-> ');
        population = Number(population);
        if (!townPopulation.hasOwnProperty(town)) {
            townPopulation[town] = 0;
        }
        townPopulation[town] += population;
    }

    for (let [town, pop] of Object.entries(townPopulation)) {
        console.log(`${town} : ${pop}`);
    }
}
solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']);