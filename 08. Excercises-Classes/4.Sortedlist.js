class List {
    constructor(result = []){
        this.result = result.sort((a,b) => a-b);
        this.size = this.result.length
    }

    add(num){
        this.result.push(num);
        this.result.sort((a,b)=>a-b);
        this.size ++;
        return; 
    }

    remove(index){
        if(index < 0 || index >= this.result.length){
            throw new Error('Invalid index')
        }
        this.result.splice(index,1);
        this.size --;
        return;
    }

    get (index) {
        if(index < 0 || index >= this.result.length){
            throw new Error('Invalid index')
        }
        return this.result[index];
    }

    size(){
        return this.size;
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

// class List {
//     constructor(result = []) {
//         this.result = result.sort((a, b) => a - b);
//         this.size = this.result.length;
//     }
//     add(num) {

//         this.result.push(num);
//         this.result.sort((a, b) => a - b);
//         this.size++
//         return;
//     }
//     remove(index) {
//         if (index < 0 || index >= this.result.length) {
//             throw new Error("Index doesn't exist");
//         } else {
//             this.result.splice(index, 1);
//             this.size--;
//             return;
//         }
//     }
//     get(index) {
//         if (index < 0 || index >= this.result.length) {
//             throw new Error("Index doesn't exist");
//         } else {
//             return this.result[index]
//         }
//     }
//     size(){
//         return this.size;
//     }
// }

// let list = new List();
// list.add(5);
// list.add(6);
// list.add(7);
// console.log(list.get(1)); 
// list.remove(1);
// console.log(list.get(1));




// console.log(list.get(1));
