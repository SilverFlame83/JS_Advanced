const describe = require('mocha').describe;
const assert = require('chai').assert;

function isOddOrEven(string) {
    if (typeof(string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
//console.log(isOddOrEven(2))
describe('check isOddOrEven', ()=>{
    it('Type is string',() =>{
        assert.equal(isOddOrEven(1),undefined,'Message a==a');
       
    })
    it('Is even',() =>{
        assert.equal(isOddOrEven('aa'),'even','Message a==a');
     
    })
    it('Is odd',() =>{
        assert.equal(isOddOrEven('a'),'odd','Message a==a');
     
    })
})

