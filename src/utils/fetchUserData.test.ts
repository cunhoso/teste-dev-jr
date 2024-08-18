import { fetchUserData } from './fetchUserData';

beforeEach(() => {
  global.fetch = jest.fn();
});

test('deve retornar usuários cujo username começa com "C"', async () => {
  (global.fetch as jest.Mock).mockResolvedValueOnce({
    ok: true,
    json: async () => [
      { id: 1, username: 'Cathy' },
      { id: 2, username: 'Alice' },
      { id: 3, username: 'Carl' },
    ],
  });

  const result = await fetchUserData();
  expect(result).toEqual([
    { id: 1, username: 'Cathy' },
    { id: 3, username: 'Carl' },
  ]);
});

test('deve retornar um array vazio em caso de erro', async () => {
  (global.fetch as jest.Mock).mockRejectedValueOnce('Erro');

  const result = await fetchUserData();
  expect(result).toEqual([]);
});