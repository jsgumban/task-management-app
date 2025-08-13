import React from 'react';
import useTaskManager from '../hooks/useTaskManager';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useTaskManager();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-3">
      <label htmlFor="search-tasks" className="form-label">Search Tasks</label>
      <input
        id="search-tasks"
        type="text"
        className="form-control"
        placeholder="Search tasks by title..."
        value={searchTerm}
        onChange={handleSearchChange}
        aria-label="Search tasks by title"
      />
    </div>
  );
};

export default SearchBar;