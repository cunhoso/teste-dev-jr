import { transformData } from './transformData';

describe('transformData', () => {
  it('deve filtrar usuários ativos e retornar apenas id e name ordenados por nome', () => {
    const users = [
      { id: 1, name: 'Alice', age: 25, isActive: true },
      { id: 2, name: 'Bob', age: 30, isActive: false },
      { id: 3, name: 'Charlie', age: 22, isActive: true },
    ];

    const result = transformData(users);
    expect(result).toEqual([
      { id: 1, name: 'Alice' },
      { id: 3, name: 'Charlie' },
    ]);
  });
});