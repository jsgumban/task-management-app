import React from 'react';
import { useTask } from '../context/TaskContext';

const DataProvider = ({ render }) => {
  const taskData = useTask();
  return render(taskData);
};

export default DataProvider;