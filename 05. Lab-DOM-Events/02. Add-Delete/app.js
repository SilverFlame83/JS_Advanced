function addItem() {
   const input = document.getElementById('newText');
   const textContent = createElement('li', input.value);

   document.getElementById('items').appendChild(textContent);
   input.value = '';

   const deleteBtn = createElement('a','[Delete]');
   deleteBtn.href = '#';
   textContent.appendChild(deleteBtn);
   
   deleteBtn.addEventListener('click', (event) =>{
       event.target.parentNode.remove();
   })

   function createElement(type, content) {
       const element = document.createElement(type);
       element.textContent = content;
       return element;
   }
}
// function addItem() {
//     let itemsListEl = document.getElementById('items');
//     let inputEl = document.getElementById('newText');
    
//     let liEl= document.createElement('li');

//     liEl.innerHTML = `${inputEl.value}`;
    
//     let deleteBtn =document.createElement('button');
//     deleteBtn.innerText = ' [delete]';
//     //deleteBtn.style.cursor = 'pointer'
//     //deleteBtn.style.background = 'pink'

//     deleteBtn.addEventListener('click',deleteEvent) 
//     function deleteEvent(e){
//        let parentEl = e.target.parentElement;

//        parentEl.remove();
//     };

//     liEl.appendChild(deleteBtn);
//     itemsListEl.appendChild(liEl);

//     inputEl.value = '';
// }

// function addItem() {
//     const input = document.getElementById('newText');
//     const liElement = createElement('li',input.value);

//     const deleteBtn = createElement('a','[Delete]');
//     deleteBtn.href = '#';
//     deleteBtn.addEventListener('click', (ev) =>{
//         ev.target.parentNode.remove();
//     })
//     liElement.appendChild(deleteBtn);

//     document.getElementById('items').appendChild(liElement);

//     input.value = '';

//     function createElement(type,content){
//         const element = document.createElement(type);
//         element.textContent = content;
//         return element;
//     }
    
// }