function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.write = function (message){
    console.log(`Person wrote: ${message}`)
}

const myPerson = new Person('John',' Abbot');

console.log(myPerson)
myPerson.write('Hello world!!');