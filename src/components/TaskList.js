import React from 'react';
import useTaskManager from '../hooks/useTaskManager';
import TaskItem from './TaskItem';
import TaskFilter from "./TaskFilter";

const TaskList = React.memo(() => {
  const { filteredTasks, bulkDeleteCompleted } = useTaskManager();

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <TaskFilter/>
        <button className="btn btn-outline-danger" onClick={bulkDeleteCompleted}>
          Clear Completed
        </button>
      </div>
      {filteredTasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        filteredTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
});

export default TaskList;