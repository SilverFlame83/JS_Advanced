function solve() {
    const [addTask, open, inProgress, complete] = document.querySelectorAll('section');
    const addBtn = document.getElementById('add');

    addBtn.addEventListener('click', taskAdd);

    function taskAdd(event) {
        event.preventDefault();
        const task = document.getElementById('task');
        const description = document.getElementById('description');
        const data = document.getElementById('date');

        if (task.value == '' || description.value == '' || data.value == '') {
            return;
        }

        const openSection = open.lastElementChild;
        const article = e('article', {}, e('h3', {}, task.value),
            e('p', {}, `Description: ${description.value}`), e('p', {}, `Due Date: ${data.value}`));

        const classDiv = e('div', { className: 'flex' });
        const startBtn = e('button', { className: 'green' }, 'Start');
        const deleteBtn = e('button', { className: 'red' }, 'Delete');
        classDiv.appendChild(startBtn);
        classDiv.appendChild(deleteBtn);
        article.appendChild(classDiv);
        openSection.appendChild(article);

        startBtn.addEventListener('click', (event) => {

            article.lastElementChild.remove();

            const div = e('div', { className: 'flex' })
            const del = e('button', { className: 'red' }, 'Delete')
            const finishBtn = e('button', { className: 'orange' }, 'Finish');

            div.appendChild(del);
            div.appendChild(finishBtn);
            article.appendChild(div);

            document.getElementById('in-progress').appendChild(article);

            finishBtn.addEventListener('click', (event) => {
                article.lastElementChild.remove();
                complete.lastElementChild.appendChild(article);
            });

            del.addEventListener('click', (event) => {
                const delArticle = event.target.parentNode.parentNode;
                delArticle.remove();
            })

        });

        deleteBtn.addEventListener('click', (event) => {
            const del = event.target.parentNode.parentNode;
            del.remove();
        })

        document.getElementById('task').value = '';
        document.getElementById('description').value = '';
        document.getElementById('date').value = '';
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