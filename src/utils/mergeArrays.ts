type ObjectWithId = { id: number; [key: string]: any };

export function mergeArrays(arr1: ObjectWithId[], arr2: ObjectWithId[]): ObjectWithId[] {
  const map = new Map<number, ObjectWithId>();

  arr1.forEach(item => map.set(item.id, { ...item }));
  arr2.forEach(item => map.set(item.id, { ...map.get(item.id), ...item }));

  return Array.from(map.values());
}