function solve() {
    const button= document.querySelector('button');
    const [name,date ]= document.querySelectorAll('input');
    const moduleName = document.querySelector('select');
    const sectionTraining = document.querySelector('.modules')

    button.addEventListener('click', (event)=>{
        event.preventDefault();
        if(name.value == '' || date.value =='' || moduleName == 'Select module..'){
            return;
        } else {
            add()
        }
    })

    function add(){
        const lectureName = name.value;
        const lectureDate = date.value;

        
        const div = e('div', {className:'module'}, e('h3',{},`${moduleName.value.toUpperCase()}-MODULE`));
        const ul = e('ul',{},e('li', {className:'flex'},e('h4',{},`${lectureName} - ${lectureDate.split('-').join('/').split('T').join('-')}`)
        ,e('button',{className:'red'},'Del')));

        
        sectionTraining.appendChild(div);
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
    
};