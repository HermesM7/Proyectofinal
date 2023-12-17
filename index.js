const sumar = require('./miPrograma');

test('sumar dos números', () => {
  expect(sumar(2, 3)).toBe(5);
});

test('sumar números negativos', () => {
  expect(sumar(-2, -3)).toBe(-5);
});

test('sumar un número positivo y uno negativo', () => {
  expect(sumar(5, -3)).toBe(2);
});
