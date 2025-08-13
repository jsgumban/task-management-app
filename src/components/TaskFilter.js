import React from 'react';
import useTaskManager from '../hooks/useTaskManager';

const TaskFilter = () => {
  const { filter, setFilter } = useTaskManager();

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div className="mb-3">
      <div className="btn-group" role="group" aria-label="Task filter options">
        <button
          type="button"
          className={`btn ${filter === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('all')}
          aria-pressed={filter === 'all'}
        >
          All
        </button>
        <button
          type="button"
          className={`btn ${filter === 'active' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('active')}
          aria-pressed={filter === 'active'}
        >
          Active
        </button>
        <button
          type="button"
          className={`btn ${filter === 'completed' ? 'btn-primary' : 'btn-outline-primary'}`}
          onClick={() => handleFilterChange('completed')}
          aria-pressed={filter === 'completed'}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default TaskFilter;