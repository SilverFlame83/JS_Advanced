function sumTable() {
    const rows = document.querySelectorAll('table tr');
    let sum = 0;

    for (let i = 1; i < rows.length; i++) {
        const colm = rows[i].children;
        sum += Number(colm[colm.length -1].textContent);
    }
    document.getElementById('sum').textContent = sum;
}

//*Second Solution

//function sumTable() {
    //const rows = document.querySelectorAll('table tr');

    // let sum = 0;

    // for (let i = 1; i < rows.length -1; i++){
    //     const cols = rows[i].children;
    //     sum += Number(cols[cols.length-1].textContent);
    // }

    // document.getElementById('sum').textContent = sum;
//}

//* Third Solution

// function sumTable() {
//     const rows = [...document.querySelectorAll('table tr')].slice(1,-1);

//     document.getElementById('sum').textContent = rows.reduce((sum, row) => {
//         return sum + Number(row.children[row.children.length - 1].textContent);
//     });
// }