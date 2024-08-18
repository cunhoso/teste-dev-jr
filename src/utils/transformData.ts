type User = {
    id: number;
    name: string;
    age: number;
    isActive: boolean;
  };
  
  export function transformData(users: User[]): { id: number; name: string }[] {
    const activeUsers = users.filter(user => user.isActive);
  
    const transformedUsers = activeUsers.map(user => ({
      id: user.id,
      name: user.name,
    }));
  
    transformedUsers.sort((a, b) => a.name.localeCompare(b.name));
  
    return transformedUsers;
  }