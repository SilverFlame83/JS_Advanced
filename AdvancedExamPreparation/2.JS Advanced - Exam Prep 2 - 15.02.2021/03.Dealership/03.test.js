const {expect} = require('chai');
const dealership = require('./03');

describe("Tests …", ()=> {
    describe("Check the function newCarCost", ()=> {

        it("Check the discount", ()=> {
            expect(dealership.newCarCost('Audi A4 B8',30000)).to.equal(15000)
        });
     });

});
