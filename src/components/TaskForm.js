import React, { useState } from 'react';
import { useTask } from '../context/TaskContext';
import { createTask } from '../utils/taskHelpers';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const { addTask } = useTask();
	
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = createTask(title, description, priority);
      addTask(newTask);
      setTitle('');
      setDescription('');
      setPriority('medium');
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Add New Task</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Task title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="Task description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-3">
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
          <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;