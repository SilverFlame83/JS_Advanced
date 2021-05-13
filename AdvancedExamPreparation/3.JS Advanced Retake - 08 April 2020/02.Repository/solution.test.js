const { expect } = require("chai");
let { Repository } = require("./solution.js");

describe("Tests", ()=> {
    describe('Check new entity', () => {
        it('Id getter', () => {
            let repository = new Repository;
            let id = 0;
            let id1 = 1;

        expect(repository.add(id)).to.equal(0);
        expect(repository.add(id1)).to.equal(1);
        });
    });
    describe('')
    // TODO: …
});
