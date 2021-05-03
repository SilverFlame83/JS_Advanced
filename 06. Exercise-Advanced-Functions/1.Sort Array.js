function solve(arr,command) {
    const map = {
        'asc': (a,b) => a-b,
        'desc':(a,b) => b-a
    }
    // if(command === 'asc'){
    //     arr.sort((a,b) => a-b);
    // } else {
    //     arr.sort((a,b) => b-a);
    // }
    
     return arr.sort(map[command]);
}

console.log(solve([14, 7, 17, 6, 8], 'desc'))