import React from 'react';
import { render, screen } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import TaskList from '../components/TaskList';

const renderWithProvider = (component) => {
  return render(
    <TaskProvider>
      {component}
    </TaskProvider>
  );
};

describe('TaskList', () => {
  test('renders filter buttons', () => {
    renderWithProvider(<TaskList />);
    
    expect(screen.getByRole('button', { name: 'All' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Active' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Completed' })).toBeInTheDocument();
  });

  test('renders clear completed button', () => {
    renderWithProvider(<TaskList />);
    
    expect(screen.getByRole('button', { name: 'Clear Completed' })).toBeInTheDocument();
  });
});