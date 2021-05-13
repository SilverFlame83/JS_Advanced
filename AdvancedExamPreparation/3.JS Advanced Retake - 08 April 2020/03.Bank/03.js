class Bank {
    constructor(bankName) {
        this.bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        const exist = this.allCustomers.findIndex(p => p.personalId == customer.personalId)
        if (exist < 0) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        const exist = this.allCustomers.findIndex(p => p.personalId == personalId)
        if (exist < 0) {
            throw new Error('We have no customer with this ID!');
        }
        const p = this.allCustomers[exist];
        if (p.totalMoney) {
            p.totalMoney += amount;
        } else {
            p.totalMoney = amount;
            p.transaction = [];
        }
        p.transaction.push(`${p.firstName} ${p.lastName} made deposit of ${amount}$!`);
        return `${this.allCustomers[exist].totalMoney}$`
    }
    withdrawMoney(personalId, amount) {
        const exist = this.allCustomers.findIndex(p => p.personalId == personalId);
        if (exist < 0) {
            throw new Error('We have no customer with this ID!');
        }
        let person = this.allCustomers[exist]
        if (person.totalMoney < amount) {
            throw new Error(`${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`)
        }
        person.totalMoney -= amount;
        person.transaction.push(`${person.firstName} ${person.lastName} withdrew ${amount}$!`);
        return `${person.totalMoney}$`
    }
    customerInfo (personalId){
        const exist = this.allCustomers.findIndex(p => p.personalId == personalId);
        if (exist < 0) {
            throw new Error('We have no customer with this ID!');
        }
        let p = this.allCustomers[exist]
        let result = `Bank name: ${this.bankName}\nCustomer name: ${p.firstName} ${p.lastName}\nCustomer ID: 
        ${p.personalId}\nTotal Money: ${p.totalMoney}$\nTransactions:\n`;
        if(p.transaction.length>0){
            for (let i = p.transaction.length; i > 0; i--){
                result += `${i}. ${p.transaction[i-1]}\n`;
            }
        }
        return result;
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
// console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));

// bank.depositMoney(6233267, 250);
// console.log(bank.depositMoney(6233267, 250));
// bank.depositMoney(4151596, 555);

// console.log(bank.withdrawMoney(6233267, 125));

//  console.log(bank.customerInfo(6233267));
