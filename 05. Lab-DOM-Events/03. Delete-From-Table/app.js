function deleteByEmail() {
    const email = document.querySelector('input[name ="email"]').value;
    const resultElement = document.getElementById('result');

    const rows = Array.from(document.querySelectorAll('tbody tr'));

    let deleted = false;
    for (let row of rows) {
        if (row.children[1].textContent == email) {
            row.parentNode.removeChild(row);
            //row.remove();
            deleted = true;
            resultElement.textContent = "Deleted.";
        }
    }
    if(deleted!== true){
        resultElement.textContent = "Not found." 
    }
}