import React, { useState, useCallback } from 'react';
import useTaskManager from '../hooks/useTaskManager';

const TaskItem = React.memo(({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const { updateTask, deleteTask, toggleTaskStatus } = useTaskManager();

  const handleSave = useCallback(() => {
    updateTask({ ...task, title, description, priority, updatedAt: new Date() });
    setIsEditing(false);
  }, [task, title, description, priority, updateTask]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [task.id, deleteTask]);

  const handleToggleStatus = useCallback(() => {
    toggleTaskStatus(task.id);
  }, [task.id, toggleTaskStatus]);

  if (isEditing) {
    return (
      <div className="card mb-3 border-warning">
        <div className="card-header bg-warning bg-opacity-10">
          <h6 className="mb-0">✎ Editing Task</h6>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter task title"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter task description"
              rows="3"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Priority</label>
            <select
              className="form-select"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
	        <div className="btn-group btn-group-sm" role="group">
            <button className="btn btn-outline-success" onClick={handleSave}>
              Save Changes
            </button>
            <button className="btn btn-outline-secondary" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`card mb-3 shadow-sm ${task.status === 'completed' ? 'bg-light' : ''}`}>
      <div className="card-body">
        <div className="d-flex align-items-start gap-3">
          {/* Checkbox for completion status */}
          <div className="form-check mt-1">
            <input
              className="form-check-input"
              type="checkbox"
              checked={task.status === 'completed'}
              onChange={handleToggleStatus}
              id={`task-${task.id}`}
            />
            <label className="form-check-label" htmlFor={`task-${task.id}`}>
              <span className="visually-hidden">Mark task as {task.status === 'completed' ? 'active' : 'completed'}</span>
            </label>
          </div>
          
          {/* Task content */}
          <div className="flex-grow-1">
            <div className="d-flex justify-content-between align-items-start mb-2">
              <h5 className={`mb-1 ${task.status === 'completed' ? 'text-decoration-line-through text-muted' : ''}`}>
                {task.title}
              </h5>
              <span className={`badge ${
                task.priority === 'high' ? 'bg-danger' : 
                task.priority === 'medium' ? 'bg-warning text-dark' : 'bg-secondary'
              }`}>
                {task.priority}
              </span>
            </div>
            
            {task.description && (
              <p className={`mb-2 ${task.status === 'completed' ? 'text-muted' : ''}`}>
                {task.description}
              </p>
            )}
            
            <div className="d-flex justify-content-between align-items-center">
             
              
              <div className="btn-group btn-group-sm" role="group">
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => setIsEditing(true)}
                  title="Edit task"
                >
                  Edit
                </button>
                <button 
                  className="btn btn-outline-danger" 
                  onClick={handleDelete}
                  title="Delete task"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TaskItem;