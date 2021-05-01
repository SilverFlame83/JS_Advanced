function solve() {
  const inputText = document.querySelector('#text').value;
  const naming = document.querySelector('#naming-convention').value;
  const result = document.querySelector('#result');

  let txt = inputText.toLowerCase().split(' ');
  let endResult = [];

  if (naming === "Camel Case"){
    
    for(let i = 0; i < txt.length; i++){
      if(i === 0){
        endResult.push(txt[i]);
      }else{
        let upper = txt[i].substring(0,1).toUpperCase() + txt[i].substring(1);
        endResult.push(upper)
      }
      
    }
    
  } else if(naming === "Pascal Case"){
    for(let i = 0; i < txt.length; i++){
        let upper = txt[i].substring(0,1).toUpperCase() + txt[i].substring(1);
        endResult.push(upper);
      
    }
  } else{
    endResult.push('Error');
  }
  result.textContent = endResult.join('');
}

//Second Solution

// function solve() {
//   const txt = document.getElementById("text").value;
//   const convention = document.getElementById("naming-convention").value;

//   const transformedTxt = txt.toLowerCase().split(' ');

//   const resultWord = [];

//     for (let i = 0; i < transformedTxt.length; i++) {

//       if (convention === "Camel Case") {
//         if (i === 0) {
//           resultWord.push(transformedTxt[i]);
//         } else {
//           let letter = transformedTxt[i];
//           let word = letter[0].toUpperCase() + letter.slice(1);
//           resultWord.push(word);
//         }

//       } else if (convention === "Pascal Case") {
//           let letter = transformedTxt[i];
//           let word = letter[0].toUpperCase() + letter.slice(1);
//           resultWord.push(word);
//       } else {
//           resultWord.push('Error!');
//           break;
//       }
//     }
//     document.getElementById("result").textContent = resultWord.join('');

// }