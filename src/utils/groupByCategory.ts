interface Item {
    name: string;
    category: string;
  }
  
  export function groupByCategory(items: Item[]): Record<string, Item[]> {
    return items.reduce((acc, item) => {
      if (!acc[item.category]) {
        acc[item.category] = [];
      }
      acc[item.category].push(item);
      return acc;
    }, {} as Record<string, Item[]>);
  }