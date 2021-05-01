function toggle() {
   const btn = document.querySelector('.button');
    const div = document.querySelector('#extra');

    if(div.style.display === 'block'){
       div.style.display = 'none';
       btn.textContent = 'More'
    } else {
        div.style.display = 'block';
        btn.textContent = 'Less';
    }

}

//Secons Solution

// function toggle() {
//     const btn = document.getElementsByClassName("button")[0];

//     const displayMessage = document.getElementById("extra");
//     if (displayMessage.style.display === 'block') {
//         displayMessage.style.display = 'none';
//         btn.textContent = "More";
//     } else {
//         displayMessage.style.display = 'block';
//         btn.textContent = "Less";
//     }

// }