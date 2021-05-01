function extractText() {
    const getEl = document.querySelectorAll('li');
    const textGetEl = Array.from(getEl).map(e => e.textContent);
    
    const textArr = document.getElementById('result');
    textArr.value = textGetEl.join('\n')
}