'use strict'
let should = require('chai').should();
describe('OCP Kata', () => {
  it('say the number', () => {
    OcpKata(DefaultRule()).say(1).should.equal('1');
    OcpKata(DefaultRule()).say(2).should.equal('2');
  });

  it('say Fizz', () => {
    OcpKata(FizzRule()).say(3).should.equal('Fizz');
    OcpKata(FizzRule()).say(6).should.equal('Fizz');
  });

  it('say Buzz', () => {
    OcpKata(BuzzRule()).say(5).should.equal('Buzz');
    OcpKata(BuzzRule()).say(10).should.equal('Buzz');
  });

  it('say FizzBuzz', () => {
    OcpKata(FizzRule(), BuzzRule()).say(3*5).should.equal('FizzBuzz');
  });


})

function OcpKata() {
  var rules = Array.prototype.slice.call(arguments);

  function applyRules(number) {
    return rules.reduce((acc, currentRule) => {
      return acc + currentRule.say(number);
    }, '');

  }

  return {
    say : applyRules
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

function BuzzRule() {
  return {
    say: (number) => 'Buzz'
  }
}
