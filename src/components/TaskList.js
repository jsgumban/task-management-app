import React from 'react';
import { useTask } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useTask();
  const { tasks, filter } = state;

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return task.status === 'active';
    if (filter === 'completed') return task.status === 'completed';
    return true;
  });

  return (
    <div>
      <h3>Tasks</h3>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
};

export default TaskList;