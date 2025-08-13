import React from 'react';
import { useTask } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useTask();
  const { tasks } = state;

  return (
    <div>
      <h3>Tasks</h3>
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;