function solve(arr,startFlavour,endFlavour) {
    const resultFlavour = [];
 
    if (arr.includes(startFlavour) && arr.includes(endFlavour)){
        let startIndex = arr.indexOf(startFlavour);
        let endIndex = arr.indexOf(endFlavour);

        for (let i = startIndex; i <= endIndex; i++){
            resultFlavour.push(arr[i]);
        }
    }

    return resultFlavour;
}

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'
));