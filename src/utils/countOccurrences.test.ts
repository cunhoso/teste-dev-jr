import { countOccurrences } from './countOccurrences';

test('deve contar o número de ocorrências de cada string no array', () => {
  const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
  const result = countOccurrences(fruits);

  expect(result).toEqual({
    apple: 3,
    banana: 2,
    orange: 1,
  });
});