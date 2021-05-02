function solve() {
   let button = document.getElementsByTagName("button")
   let textArea = document.getElementsByTagName("textarea")[0]

   let list = new Map()

   Array.from(button).forEach(b => {
       b.addEventListener("click", (e) => {
           if (e.target.className === "add-product") {
               let currentElement = e.target.parentElement

               let priceElement = currentElement.nextElementSibling.innerHTML;
               let brandElement = currentElement.previousElementSibling.children[0].innerHTML

               if (!list.has(brandElement)) {
                   list.set(brandElement, 0);
               }
               list.set(brandElement, list.get(brandElement) + Number(priceElement));

               textArea.value += `Added ${brandElement} for ${priceElement} to the cart.\n`
           } else {
               let totalPrice = Number(Array.from(list.values()).reduce((a,b)=>+a+ +b, 0));
               textArea.value+=`You bought ${Array.from(list.keys()).join(', ')} for ${totalPrice.toFixed(2)}.`

               let buttons = Array.from(document.querySelectorAll('button'));
               buttons.forEach(button => button.disabled = true);

           }
       })
   })
}

// function solve() {
//    let btn = document.getElementsByTagName("button");
//    let text = document.getElementsByTagName("textarea");

//    let list = new Map();

//    Array.from(btn).forEach(button => {
//       button.addEventListener("click", (event) => {
//          if (event.target.className === "add-product") {
//             let currentEl = event.target.parentElement;

//             let price = currentEl.nextElementSibling.innerHTML;
//             let brandName = currentEl.previousElementSibling.children[0].innerHTML;

//             if (!list.has(brandName)) {
//                list.set(brandName, 0)
//             }

//             list.set(brandName, list.get(brandName) + Number(price))
//             text.value += `Added ${brandName} for ${price.toFixed(2)} to the cart.\n`

//          } else {
//             let total = Number(Array.from(list.values()).reduce((a, b) => +a + +b, 0));
//             text.value += `You bought ${Array.from(list.keys()).join(', ')} for ${total.toFixed(2)}.`;

//             let buttons = Array.from(document.querySelectorAll('button'));
//             buttons.forEach(button => button.disabled = true);
//          }
//       })
//    })
// }

// function solve() {
//    const output = document.querySelector('textarea')

//    const cart = [];

//    document.querySelector('.shopping-cart').addEventListener('click', (ev) => {
//       if (ev.target.tagName == 'BUTTON' && ev.target.className == 'add-product') {
//          const product = ev.target.parentNode.parentNode;
//          const title = product.querySelector('.product-title').textContent;
//          const price = Number(product.querySelector('.product-line-price').textContent);

//          output.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`

//          cart.push({ title, price });
//       }
//    });

//    document.querySelector('.checkout').addEventListener('click', () => {

//        const result = cart.reduce((acc,c) => {
//          acc.items.push(c.title);
//          acc.total += c.price;
//          return acc;
//       }, {items: [], total: 0});


//       output.value += `You bought ${result.items.join(', ')} for ${result.total.toFixed(2)}.`
//       disableButtons();
//    });

//    function disableButtons() {
//       let buttons = Array.from(document.querySelectorAll('button'));
//       buttons.forEach(button => button.disabled = true);
//    }

// }