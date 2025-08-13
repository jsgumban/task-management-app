import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TaskProvider } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';

const renderWithProvider = (component) => {
  return render(
    <TaskProvider>
      {component}
    </TaskProvider>
  );
};

describe('TaskForm', () => {
  test('renders form fields', () => {
    renderWithProvider(<TaskForm />);
    
    expect(screen.getByLabelText(/task title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /add task/i })).toBeInTheDocument();
  });

  test('disables submit button when title is empty', () => {
    renderWithProvider(<TaskForm />);
    
    const submitButton = screen.getByRole('button', { name: /add task/i });
    expect(submitButton).toBeDisabled();
  });

  test('enables submit button when title is filled', () => {
    renderWithProvider(<TaskForm />);
    
    const titleInput = screen.getByLabelText(/task title/i);
    const submitButton = screen.getByRole('button', { name: /add task/i });
    
    fireEvent.change(titleInput, { target: { value: 'Test task' } });
    expect(submitButton).toBeEnabled();
  });
});