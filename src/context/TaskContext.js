import React, { createContext, useContext, useReducer } from 'react';

const TaskContext = createContext();

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Sample Task',
      description: 'This is a sample task',
      status: 'active',
      priority: 'medium',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ],
  filter: 'all',
  searchTerm: ''
};

function taskReducer(state, action) {
  switch (action.type) {
    case 'SET_FILTER':
      return { ...state, filter: action.payload };
    case 'SET_SEARCH':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);
	console.log('stateX: ', state);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTask() {
  const context = useContext(TaskContext);
	console.log('contextX: ', context);
	
  if (!context) {
    throw new Error('useTask must be used within TaskProvider');
  }
  return context;
}