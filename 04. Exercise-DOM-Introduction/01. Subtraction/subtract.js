function subtract() {
   const firstNum = document.querySelector('#firstNumber');
   const secondNum = document.querySelector('#secondNumber');

   let res = Number(firstNum.value)-Number(secondNum.value);
   document.querySelector('#result').textContent = res;
}

// function subtract() {
//     const firstNum = document.getElementById("firstNumber").value;
//     const secondNum = document.getElementById("secondNumber").value;

//     let sub = Number(firstNum)- Number(secondNum);

//     document.getElementById("result").textContent = sub;
// }