import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <span className={`badge ${task.status === 'completed' ? 'bg-success' : 'bg-primary'}`}>
          {task.status}
        </span>
        <span className={`badge ms-2 ${
          task.priority === 'high' ? 'bg-danger' : 
          task.priority === 'medium' ? 'bg-warning' : 'bg-secondary'
        }`}>
          {task.priority}
        </span>
      </div>
    </div>
  );
};

export default TaskItem;