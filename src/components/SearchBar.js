import React from 'react';
import { useTask } from '../context/TaskContext';

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useTask();

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