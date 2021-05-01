function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const student = document.querySelectorAll('tbody tr');
      const inputText = document.querySelector('#searchField').value;

      for (let el of student) {
         if(el.textContent.toLowerCase().includes(inputText.toLowerCase())){
            el.setAttribute('class', 'select');
         } else {
            el.removeAttribute('class');
         }
      }

   }

   //Second Solution
   
   // const body = document.querySelector('tbody');
   // function onClick() {
   //    const input = document.querySelector('#searchField').value.toLowerCase();
   //    body.innerHTML = Array.from(body.children).map(function selectRow(row) {
   //       if(row.textContent.includes(input)){
   //          row.classList.add('select');
   //       }else {
   //          row.removeAttribute('class');
   //       }
   //       return row
   //    })
   // }
}