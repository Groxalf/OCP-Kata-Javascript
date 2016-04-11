'use strict'
let should = require('chai').should();
describe('OCP Kata', () => {

  let ocpKata = OcpKata(FizzRule(), BuzzRule(), BangRule(), DefaultRule());

  it('say the number', () => {
    ocpKata.say(1).should.equal('1');
    ocpKata.say(2).should.equal('2');
  });

  it('say Fizz', () => {
    ocpKata.say(3).should.equal('Fizz');
    ocpKata.say(6).should.equal('Fizz');
  });

  it('say Buzz', () => {
    ocpKata.say(5).should.equal('Buzz');
    ocpKata.say(10).should.equal('Buzz');
  });

  it('say FizzBuzz', () => {
    ocpKata.say(3*5).should.equal('FizzBuzz');
  });

  it('say Bang', () => {
    ocpKata.say(7).should.equal('Bang');
    ocpKata.say(14).should.equal('Bang');
  });

  it('say it properly', () => {
    ocpKata.say(3*7).should.equal('FizzBang');
    ocpKata.say(5*7).should.equal('BuzzBang');
    ocpKata.say(3*5*7).should.equal('FizzBuzzBang');
  });


})

function OcpKata() {
  let argumentsArray = Array.prototype.slice.call(arguments);
  let rules = argumentsArray.slice(0, argumentsArray.length - 1);
  let lastRule = arguments[argumentsArray.length - 1];

  function applyRules(number) {
    let result = rules.reduce((acc, currentRule) => {
      return acc + currentRule.say(number);
    }, '');

    if (result != '') return result;
    return lastRule.say(number);

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
    say: (number) => {
      if (number % 3 != 0) return '';

      return 'Fizz';
    }
  }
}

function BuzzRule() {
  return {
    say : (number) => {
      if (number % 5 != 0) return '';

      return 'Buzz';
    }
  }
}
function BangRule() {
  return {
    say: (number) => {
      if (number % 7 != 0) return '';

      return 'Bang';
    }
  }
}
