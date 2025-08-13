import React, { useState } from 'react';
import useTaskManager from '../hooks/useTaskManager';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [error, setError] = useState('');
  const { addNewTask } = useTaskManager();
	
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (!title.trim()) {
      setError('Task title is required');
      return;
    }
    
    if (title.length > 100) {
      setError('Task title must be less than 100 characters');
      return;
    }
    
    try {
      addNewTask(title.trim(), description.trim(), priority);
      setTitle('');
      setDescription('');
      setPriority('medium');
    } catch (err) {
      setError('Failed to create task. Please try again.');
    }
  };

  return (
    <div className="card mb-4 shadow-sm">
      <div className="card-header bg-primary bg-opacity-10 border-bottom">
        <h5 className="mb-0 text-primary">Create New Task</h5>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-8 mb-3">
              <label htmlFor="task-title" className="form-label fw-semibold">
                Task Title <span className="text-danger">*</span>
              </label>
              <input
                id="task-title"
                type="text"
                className={`form-control ${error && !title.trim() ? 'is-invalid' : ''}`}
                placeholder="What needs to be done?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                aria-describedby="title-help"
                required
              />
            </div>
            
            <div className="col-md-4 mb-3">
              <label htmlFor="task-priority" className="form-label fw-semibold">Priority</label>
              <select
                id="task-priority"
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                aria-label="Select task priority"
              >
                <option value="low">🟢 Low</option>
                <option value="medium">🟡 Medium</option>
                <option value="high">🔴 High</option>
              </select>
            </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="task-description" className="form-label fw-semibold">
              Description <span className="text-muted">(optional)</span>
            </label>
            <textarea
              id="task-description"
              className="form-control"
              placeholder="Add more details about this task..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows="3"
            />
          </div>
          
          {error && (
            <div className="alert alert-danger d-flex align-items-center" role="alert">
              <span className="me-2">⚠️</span>
              <div>{error}</div>
            </div>
          )}
          
          <div className="d-flex justify-content-between align-items-center">
            <button 
              type="submit"
              className="btn btn-outline-primary px-3"
              disabled={!title.trim()}
            >
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;