export async function fetchUserData(): Promise<{ id: number; username: string }[]> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
  
      const filteredUsers = data.filter((user: { username: string }) => user.username.startsWith('C'));
  
      return filteredUsers;
    } catch (error) {
      console.error('Erro ao buscar informações dos usuários:', error);
      return [];
    }
  }
  