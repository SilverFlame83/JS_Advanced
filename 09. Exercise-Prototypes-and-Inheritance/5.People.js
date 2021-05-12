function result() {
    const TASKS = {
        JUNIOR: [' is working on a simple task.'],
        SENIOR:[' is working on a complicated task.',
        ' is taking time off work.',
        ' is supervising junior workers.'],
        MANAGER: [' scheduled a meeting.',
        ' is preparing a quarterly report.']
    }
    class Employee {
        constructor(name, age,tasks) {
            if(new.target === Employee) {
                throw new Error("Cannot instaniate directly.")
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = tasks;
            this._index = 0;
        }
        work() {
            if(this._index === this.tasks.length){
                this._index = 0;
            }
            
            console.log(this.name + this.tasks[this._index]);
            this._index ++;
         };

        collectSalary() { 
            console.log(`${this.name} received ${this.salary} this month.`)
        };
    };

    class Junior extends Employee { 
        constructor(name,age){
            super(name,age,TASKS.JUNIOR);
          
        }
    };

    class Senior extends Employee {
        constructor(name,age){
            super(name,age,TASKS.SENIOR);
       
        }
     };

    class Manager extends Employee {
        constructor(name,age){
            super(name,age,TASKS.MANAGER);
            
            this.divident = 0;
        }
        
        collectSalary() { 
            console.log(`${this.name} received ${this.salary + this.divident} this month.`)
        };
     };

    return {
        Employee,
        Junior,
        Senior,
        Manager
    }
}

//SecondSolution

function solution() {
    class Employee {
      constructor(name, age) {
        if (new.target === Employee) {
          throw new Error("Cannot make instance of abstract class Employee.");
        }
   
        [this.name, this.age, this.salary, this.tasks] = [name, age, 0, []];
      }
   
      work() {
        let current = this.tasks.shift();
        console.log(`${this.name} ${current}`);
        this.tasks.push(current);
      }
   
      getSalary() {
        return this.salary;
      }
   
      collectSalary = () =>
        console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
   
    class Junior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = ["is working on a simple task."];
      }
    }
   
    class Senior extends Employee {
      constructor(name, age) {
        super(name, age);
        this.tasks = [
          "is working on a complicated task.",
          "is taking time off work.",
          "is supervising junior workers.",
        ];
      }
    }
   
    class Manager extends Employee {
      constructor(name, age) {
        super(name, age);
        this.dividend = 0;
        this.tasks = ["scheduled a meeting.", "is preparing a quarterly report."];
      }
   
      getSalary() {
        return super.getSalary() + this.dividend;
      }
    }
   
    return { Employee, Junior, Senior, Manager };
  }

const people = solution();

const a = new people.Junior('George',23);
a.work();
a.collectSalary(789);

const b = new people.Senior('Peter', 30);
b.work();
b.collectSalary();

const c = new people.Manager('ivan', 22);
c.work();
c.collectSalary();