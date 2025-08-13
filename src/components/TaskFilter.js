import React from 'react';
import useTaskManager from '../hooks/useTaskManager';

const TaskFilter = () => {
  const { filter, setFilter } = useTaskManager();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="mb-3">
      <div className="btn-group" role="group">
        <button
          type="button"
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('active')}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;