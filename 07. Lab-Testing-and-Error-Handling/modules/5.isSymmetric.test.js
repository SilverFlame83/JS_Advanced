const { expect } = require('chai');
const isSymmetric = require('./5.isSymmetric');

describe('isSymmetric', () => {
    it('returns true', () =>{
        expect(isSymmetric([1,1])).to.true;
    });

    it('returns false', ()=>{
        expect(isSymmetric([1,2])).to.be.false;
    })

    it('returns for invalid arg', () =>{
        expect(isSymmetric('a')).to.be.false;
    });

    it('returns false for type el', () =>{
        expect(isSymmetric(['1',1])).to.be.false;
    });

    it('returns true for valid symmetric odd el', () =>{
        expect(isSymmetric([1,1,1])).to.true;
    });

    it('returns true for valid symmetric string array', () =>{
        expect(isSymmetric(['a','a'])).to.true;
    });

    it('returns true for valid non- symmetric string array', () =>{
        expect(isSymmetric(['a','b'])).to.be.false;
    });

});