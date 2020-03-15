var expect = chai.expect;
chai.should();  

describe('Pruebas ejemplo', () => {

 beforeEach (function () {
     calcular = new Calculadora();
  });


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
  it('Operación con sumas y restas', () => {
    calcular.evaluar('15 + 3 - -2').should.equal(20);
  });
  it('Operación con multiplicaciones y divisiones', () => {
    calcular.evaluar('7 / 2 * 4').should.equal(14);
  });
  it('Operación con sumas, restas, multiplicaciones y divisiones', () => {
    calcular.evaluar('2.5 * 2 - 20 + 16 / 4 ').should.equal(-11);
  });
});








