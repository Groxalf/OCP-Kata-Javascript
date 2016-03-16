'use strict'
let should = require('chai').should();
describe('OCP Kata', () => {
  it('say the number', () => {
    ocpkata(DefaultRule()).say(1).should.equal('1');
    ocpkata(DefaultRule()).say(2).should.equal('2');
  });

  it('say Fizz', () => {
    ocpkata(FizzRule()).say(3).should.equal('Fizz');
    ocpkata(FizzRule()).say(6).should.equal('Fizz');
  });

})

function ocpkata(rule) {

  return {
    say : (number) => rule.say(number)
    }
}

function DefaultRule() {
  return {
    say: (number) => `${number}`
    }
}

function FizzRule() {
  return {
    say: (number) => 'Fizz'
  }
}
