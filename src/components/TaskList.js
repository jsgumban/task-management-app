import React from 'react';
import { useTask } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { state } = useTask();
  const { tasks, filter, searchTerm } = state;

  const filteredTasks = tasks.filter(task => {
    const matchesFilter = filter === 'all' || task.status === filter;
    const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
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