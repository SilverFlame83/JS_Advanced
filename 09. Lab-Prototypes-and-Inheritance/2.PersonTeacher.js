function result(){
    class Person{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person{
        constructor(name,email,subject){
            super(name,email);
            this.subject = subject;
        }
    }
    return{
        Person,
        Teacher
    }
}
let classes = result();

let p = new classes.Person("Maria", "maria@gmail.com");
console.log("Person: " +
  p.name + ' (' + p.email + ')');
