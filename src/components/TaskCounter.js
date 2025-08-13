import React from 'react';
import useTaskManager from '../hooks/useTaskManager';

const TaskCounter = React.memo(() => {
  const { taskStats } = useTaskManager();
  const { totalTasks, completedTasks, activeTasks } = taskStats;

  return (
    <div className="mb-3">
      <div className="row">
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{totalTasks}</h5>
              <p className="card-text">Total Tasks</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{activeTasks}</h5>
              <p className="card-text">Active Tasks</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">{completedTasks}</h5>
              <p className="card-text">Completed Tasks</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default TaskCounter;