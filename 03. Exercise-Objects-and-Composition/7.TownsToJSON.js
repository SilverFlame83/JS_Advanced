// function solve(input) {
//     let townInfo = input.map(el => el.split('|').filter(x => x !== '').map(x => x.trim()));
//     let headingRow = townInfo.shift();

//     let result = [];

//     townInfo.forEach(row => {
//         let town = {
//             [headingRow[0]]: row[0],
//             [headingRow[1]]: Number(Number(row[1]).toFixed(2)),
//             [headingRow[2]]: Number(Number(row[2]).toFixed(2))
//         }
//         result.push(town);
//     })
//     console.log(JSON.stringify(result))
// }

// solve(['| Town | Latitude | Longitude |',
//     '| Sofia | 42.696552 | 23.32601 |',
//     '| Beijing | 39.913818 | 116.363625 |']);


function townToJason(input) {
    
    let firstLine = input.shift().split(' | ');
    let town = firstLine[0].split('| ').filter(x => x != "");
    let latitude = firstLine[1];
    let longitude = firstLine[2].split(' |').filter(x => x != "");

    let property = [town,latitude,longitude];
    let result = [];

    for (let line of input) {
        let firstLine = line.split(' | ');
        let townName = firstLine[0].split('| ').filter(x => x != "");
        let latit = Number(firstLine[1]).toFixed(2);
        let longit = Number(firstLine[2].split(' |').filter(x => x != "")).toFixed(2);

        let townInfo ={
            [property[0]]:townName,
            [property[1]]: Number(latit),
            [property[2]] : Number(longit)
        }
        result.push(townInfo);
    }

console.log(JSON.stringify(result));

}

townToJason(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])