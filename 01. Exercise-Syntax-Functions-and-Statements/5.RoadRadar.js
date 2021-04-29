function roadRadar (speed, area) {
    speed = Number(speed);
    let speedLimit = 0

    switch (area) {
        case 'motorway':
            speedLimit = 130;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

            } else {
                let dif = Math.abs(speedLimit - speed);
                if(dif <= 20) {
                    console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                } else if(dif <= 40) {
                    console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - reckless driving `);
                    
                }
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if (speed <= speedLimit) {
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);

            } else {
                let dif = Math.abs(speedLimit - speed);
                if(dif <= 20) {
                    console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                } else if(dif <= 40) {
                    console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                } else {
                    console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - reckless driving `);
                    
                }
            }
            break;
            case 'city':
                speedLimit = 50;
                if (speed <= speedLimit) {
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    
                } else {
                    let dif = Math.abs(speedLimit - speed);
                    if(dif <= 20) {
                        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                    } else if(dif <= 40) {
                        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                    } else {
                        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - reckless driving `);
                        
                    }
                }
            break;
            case 'residential':
                speedLimit = 20;
                if (speed <= speedLimit) {
                    console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    
                } else {
                    let dif = Math.abs(speedLimit - speed);
                    if(dif <= 20) {
                        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                    } else if(dif <= 40) {
                        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                    } else {
                        console.log(`The speed is ${dif} km/h faster than the allowed speed of ${speedLimit} - reckless driving `);
                        
                    }
                }
            break;
    
    }
}

roadRadar(200, 'motorway')