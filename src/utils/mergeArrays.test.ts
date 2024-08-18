import { mergeArrays } from './mergeArrays';

describe('mergeArrays', () => {
  it('deve mesclar objetos com base na chave id', () => {
    const array1 = [
      { id: 1, name: 'Alice', age: 25 },
      { id: 2, name: 'Bob', age: 30 }
    ];

    const array2 = [
      { id: 1, age: 26, email: 'alice@example.com' },
      { id: 3, name: 'Charlie', age: 22 }
    ];

    const result = mergeArrays(array1, array2);

    expect(result).toEqual([
      { id: 1, name: 'Alice', age: 26, email: 'alice@example.com' },
      { id: 2, name: 'Bob', age: 30 },
      { id: 3, name: 'Charlie', age: 22 }
    ]);
  });
});