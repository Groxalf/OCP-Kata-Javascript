'use strict'
let should = require('chai').should();
describe('OCP Kata', () => {
  it('say the number', () => {
    ocpkata().say(1).should.equal('1');
    ocpkata().say(2).should.equal('2');
  });

})

function ocpkata() {
  return {
    say: (number) => `${number}`
    }
}
