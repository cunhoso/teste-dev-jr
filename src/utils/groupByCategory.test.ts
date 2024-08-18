import { groupByCategory } from './groupByCategory';

test('deve agrupar itens por categoria', () => {
  const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
  ];

  const result = groupByCategory(items);

  expect(result).toEqual({
    fruit: [
      { name: 'apple', category: 'fruit' },
      { name: 'banana', category: 'fruit' }
    ],
    vegetable: [
      { name: 'carrot', category: 'vegetable' },
      { name: 'broccoli', category: 'vegetable' }
    ]
  });
});