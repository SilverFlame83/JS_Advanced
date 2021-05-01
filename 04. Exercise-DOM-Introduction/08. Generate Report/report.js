function generateReport() {
    let input = Array.from(document.querySelectorAll('input'))
    
    const endResultArr =[];
    let columns = [];

    let rows = Array.from(document.querySelectorAll('tr'));

    for(let i= 0; i< rows.length;i++){
        const row = rows[i];
        const obj = {};

        for(let j = 0; j < row.children.length; j++){
            const el = row.children[j];
            if(i == 0){
                if(el.children[0].checked){
                    columns.push(j);
                }
                continue;
            }

            if(columns.includes(j)){
                let propertyName = input[j].name;
                obj[propertyName] = el.textContent;
            }
        }
        if(i!==0){
            endResultArr.push(obj);
        }
    }
    document.getElementById('output').value = JSON.stringify(endResultArr);
}
