import React, { useState, useCallback } from 'react';
import { useTask } from '../context/TaskContext';

const TaskItem = React.memo(({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const { updateTask, deleteTask } = useTask();

  const handleSave = useCallback(() => {
    updateTask({ ...task, title, description, priority, updatedAt: new Date() });
    setIsEditing(false);
  }, [task, title, description, priority, updateTask]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [task.id, deleteTask]);

  const toggleStatus = useCallback(() => {
    updateTask({ 
      ...task, 
      status: task.status === 'completed' ? 'active' : 'completed',
      updatedAt: new Date()
    });
  }, [task, updateTask]);

  if (isEditing) {
    return (
      <div className="card mb-2">
        <div className="card-body">
          <input
            type="text"
            className="form-control mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control mb-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select
            className="form-select mb-2"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <button className="btn btn-success btn-sm me-2" onClick={handleSave}>
            Save
          </button>
          <button className="btn btn-secondary btn-sm" onClick={() => setIsEditing(false)}>
            Cancel
          </button>
        </div>
      </div>
    );
  }

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
        <div className="mt-2">
          <button className="btn btn-outline-primary btn-sm me-2" onClick={toggleStatus}>
            {task.status === 'completed' ? 'Mark Active' : 'Mark Complete'}
          </button>
          <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => setIsEditing(true)}>
            Edit
          </button>
          <button className="btn btn-outline-danger btn-sm" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
});

export default TaskItem;