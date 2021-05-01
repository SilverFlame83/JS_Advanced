function search() {
   const listItems = document.querySelectorAll('#towns>li');
   const inputText = document.getElementById("searchText").value;
   const result = document.getElementById("result");

   let matchesCount = 0;

   for (const el of listItems) {
      if (el.textContent.toLowerCase().includes(inputText.toLowerCase())) {
         el.style.fontWeight = 'bold';
         el.style.textDecoration = 'underline';
         matchesCount ++;
      } else {
         el.style.fontWeight = '';
         el.style.textDecoration = '';
      }
   }
   result.textContent = `${matchesCount} matches found`;
}
