import React from 'react';
import useTaskManager from '../hooks/useTaskManager';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useTaskManager();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search tasks by title..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBar;