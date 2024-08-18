export function countOccurrences(arr: string[]): Record<string, number> {
    const countMap: Record<string, number> = {};
  
    arr.forEach((item) => {
      countMap[item] = (countMap[item] || 0) + 1;
    });
  
    return countMap;
  }