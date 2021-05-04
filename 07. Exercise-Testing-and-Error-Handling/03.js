const { expect } = require('chai');

const describe = require('mocha').describe;
const assert = require('chai').assert;

function lookupChar(string, index) {
    if (typeof (string) !== 'string' || !Number.isInteger(index)) {
        return undefined;
    }
    if (string.length <= index || index < 0) {
        return "Incorrect index";
    }

    return string.charAt(index);
}

describe('Main', () => {
    describe('Invalid parametres', () => {
        it('Should return undefined for non str', () => {
            expect(lookupChar(null, 0)).to.equal(undefined);
        })
        it('Should return undefined for non num', () => {
            expect(lookupChar('seabird', 1.3)).to.equal(undefined);
        })
    })
    describe('out range', () => {
        it('Should return undefined bellow 0', () => {
            expect(lookupChar('seabird', -1)).to.equal("Incorrect index")
        })
        it('Should return undefined above str.length', () => {
            expect(lookupChar('seabird', 9)).to.equal("Incorrect index")
        })
    })
    describe('Happy Path',()=>{
        it('should return s',()=>{
            expect(lookupChar('seabird',0)).to.equal('s')
        })
        it('should return a',()=>{
            expect(lookupChar('seabird',2)).to.equal('a')
        })
        it('should return i',()=>{
            expect(lookupChar('seabird',4)).to.equal('i')
        })
    })
})
