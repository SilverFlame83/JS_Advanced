const { expect } = require('chai');
const {pizzUni} = require('./03');

describe('Check orders',()=>{
    describe('Make orders',()=>{
        it('Check if there\'s pizza',()=>{
             const pizza = {orderedDrink: 'cola'};
            expect(() => pizzUni.makeAnOrder(pizza)).to.throw('You must order at least 1 Pizza to finish the order.');
        });
        it('Return pizza name', ()=>{
             const pizza1 = {orderedPizza: 'pizza'};
             expect(pizzUni.makeAnOrder(pizza1)).to.equal(`You just ordered ${pizza1.orderedPizza}`);
        });
        it('Return pizza and drink', ()=>{
            const pizza2 = {orderedPizza: 'pizza',orderedDrink: 'drink'};
            expect(pizzUni.makeAnOrder(pizza2)).to.equal(`You just ordered ${pizza2.orderedPizza} and ${pizza2.orderedDrink}.`);
       });
    });
    describe('Remaining work',()=>{
        it('Check status',()=>{
            const pizza = [{pizzaName: 'pizza', status: 'ready'} ];
            const pizza1 = [{pizzaName: 'pizza1', status: 'preparing'},{pizzaName: 'pizza2', status: 'preparing'}  ];
            expect(pizzUni.getRemainingWork(pizza)).to.equal( 'All orders are complete!');
            expect(pizzUni.getRemainingWork(pizza1)).to.equal( 'The following pizzas are still preparing: pizza1, pizza2.');

        });
    });
    describe('Order Type', ()=>{
        it('Type of The order',()=>{
            expect(pizzUni.orderType(100,'Carry Out')).to.equal(90);
            expect(pizzUni.orderType(100,'Delivery')).to.equal(100);

        });
    });
});