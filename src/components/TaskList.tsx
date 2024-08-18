import React, { useState } from 'react';
import './TaskList.css'; 

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskName, setTaskName] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'completed' | 'incomplete'>('all');

  const addTask = () => {
    if (taskName.trim()) {
      const newTask: Task = {
        id: tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1,
        name: taskName,
        completed: false,
      };
      setTasks([...tasks, newTask]);
      setTaskName('');
    }
  };

  const toggleCompletion = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="task-list-container">
      <h1>Lista de Tarefas</h1>
      <div className="task-form">
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Digite o nome da tarefa"
        />
        <button onClick={addTask}>Adicionar Tarefa</button>
      </div>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')} className={filter === 'all' ? 'active' : ''}>Todas</button>
        <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Concluídas</button>
        <button onClick={() => setFilter('incomplete')} className={filter === 'incomplete' ? 'active' : ''}>Pendentes</button>
      </div>
      <div className="task-list">
        {filteredTasks.map(task => (
          <div key={task.id} className="task-item">
            <span className={task.completed ? 'completed' : ''}>{task.name}</span>
            <button onClick={() => toggleCompletion(task.id)}>
              {task.completed ? 'Marcar como Pendentes' : 'Marcar como Concluída'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
