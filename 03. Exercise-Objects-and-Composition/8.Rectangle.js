function rectangle(width, height, color) {
    
    function getColor(str){
        return str[0].toUpperCase() + str.slice(1);
    }

    function calcArea() {
        return this.width * this.height;
    }

    return {
        width,
        height,
        color: getColor(color),
        calcArea
    }
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());

