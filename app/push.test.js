import { arrayPush } from "./push.js";
test('Add a element to a array', () => {
  const result = arrayPush(['hola', 'mundo'], '!');
  expect(result).toEqual(['hola', 'mundo', '!']);
});
test('Verificar la longitud del arreglo devuelto', () => {
  const result = arrayPush(['hola'], 'mundo');
  expect(result.length).toBe(2);
});
