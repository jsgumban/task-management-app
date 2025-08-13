import React from 'react';
import { useTask } from '../context/TaskContext';

const SearchBar = () => {
  const { state, dispatch } = useTask();
  const { searchTerm } = state;

  const handleSearchChange = (e) => {
    dispatch({ type: 'SET_SEARCH', payload: e.target.value });
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