function solution() {
    const input = document.querySelector('input');
    const addBtn = document.querySelector('button');
    const giftSection = document.querySelectorAll('section ul')[0];
    const sentSection = document.querySelectorAll('section ul')[1];
    const discardSection = document.querySelectorAll('section ul')[2];
    const listSection = document.querySelectorAll('.card')[1].children[1];

    addBtn.addEventListener('click', listofGifts);

    function listofGifts() {
        if (input.value == '') {
            return;
        } else {
            const name = input.value
            const gift = e('li', { className: 'gift' }, name);
            const sendBtn = e('button', { id: 'sendButton' }, 'Send');
            const discardBtn = e('button', { id: 'discardButton' }, 'Discard');


            listSection.appendChild(gift);
            gift.appendChild(sendBtn);
            gift.appendChild(discardBtn);
            input.value = '';

        
            sortLi();
            sendBtn.addEventListener('click',()=> sent(name,gift));
            discardBtn.addEventListener('click',()=> discard(name,gift));

        }
    }

    function discard(input,gift){
        gift.remove();
        const li = e('li',{className:'gift'},input);
        discardSection.appendChild(li);
    }

    function sent(input,gift){
        gift.remove();
        const li = e('li',{className:'gift'},input);
        sentSection.appendChild(li);
    }

    function sortLi() {
        const li = giftSection.children;
        return Array.from(li)
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(g => giftSection.appendChild(g));
    }

    function e(type, attributes, ...content) {
        const result = document.createElement(type);

        for (let [attr, value] of Object.entries(attributes || {})) {
            if (attr.substring(0, 2) == 'on') {
                result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
            } else {
                result[attr] = value;
            }
        }

        content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

        content.forEach(e => {
            if (typeof e == 'string' || typeof e == 'number') {
                const node = document.createTextNode(e);
                result.appendChild(node);
            } else {
                result.appendChild(e);
            };
        });

        return result;
    };

}