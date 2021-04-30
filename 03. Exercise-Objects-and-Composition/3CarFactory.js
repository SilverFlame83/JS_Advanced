function solve(objRequirment) {
    function getEngine(power) {
        const engine = [
            { power: 90, volume: 1800 },
            { power: 120, volume: 2400 },
            { power: 200, volume: 3500 }
        ]

        // let result;
        // for (let i = 0; i < engine.length; i++) {
        //     if (engine[i].power >= power) {
        //         result = engine[i];
        //         break;
        //     }
        // }
        return engine.find(eng => eng.power >= power);
    }
    function getCarriage(type, color) {
        return { type, color };
    }
    function getWheelSize(wheelsize) {
        let wheel = Math.floor(wheelsize) % 2 === 0
            ? Math.floor(wheelsize) - 1
            : Math.floor(wheelsize);

        return [wheel, wheel, wheel, wheel];
    }

    return {
        model: objRequirment.model,
        engine: getEngine(objRequirment.power),
        carriage: getCarriage(objRequirment.carriage, objRequirment.color),
        wheels: getWheelSize(objRequirment.wheelsize)
    }
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
))