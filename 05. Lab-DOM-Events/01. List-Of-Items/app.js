function addItem() {
    let userInput = document.querySelector("#newItemText").value;
    let itemList = document.querySelector("#items");
    let nextItem = document.createElement('li');

    nextItem.textContent = userInput;
    itemList.appendChild(nextItem);

    document.querySelector("#newItemText").value = '';
    
}