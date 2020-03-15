'use strict';

var should = require('chai').should();
var calcular = require('../js/modulo-calculadora.js');

describe('Pruebas ejemplo', () => { 

  it('número', () => {
    calcular.evaluar("127").should.equal(127);
  });
    it('suma', () => {
    calcular.evaluar('2 + 3').should.equal(5);
  });
  it('resta', () => {
    calcular.evaluar('2 - 3 - 4').should.equal(-5);
  });
  it('multiplicación y división', () => {
    calcular.evaluar('10 * 5 / 2').should.equal(25);
  });
});



