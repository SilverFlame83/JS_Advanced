function sameNum(input) {
    let str = input.toString();
    let same = true;
    let sum = 0;
    
    for (let i = 0; i < str.length; i++) {
        if(i < str.length -1) {
            if(str[i] != str[i+1]) {
                same = false;
            }
        }
        sum += Number(str[i]);
    }
    console.log(`${same}\n${sum}`)
   
}

sameNum(2222222)