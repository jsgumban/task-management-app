import React, { createContext, useContext, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

const TaskContext = createContext();

const defaultTasks = [
  {
    id: '1',
    title: 'Sample Task',
    description: 'This is a sample task',
    status: 'active',
    priority: 'medium',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

export function TaskProvider({ children }) {
	// custom hook to manage local storage
  const [tasks, setTasks] = useLocalStorage('tasks', defaultTasks);
	
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map(task => 
      task.id === updatedTask.id ? updatedTask : task
    ));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{
      tasks,
      filter,
      searchTerm,
      setFilter,
      setSearchTerm,
      addTask,
      updateTask,
      deleteTask
    }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTask must be used within TaskProvider');
  }
  return context;
}