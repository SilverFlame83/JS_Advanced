const {expect} = require('chai');
const { sumNum }= require('./4.SumOfnumbers.js');

describe('Sum Num',()=>{
    it('sums single number',()=>{
        expect(sumNum([1])).to.equal(1);
    });
    it('sums two numbers',()=>{
        expect(sumNum([1,2])).to.equal(3);
    });
    it('sums different numbers',()=>{
        expect(sumNum([1,4,2])).to.equal(7);
    });
});