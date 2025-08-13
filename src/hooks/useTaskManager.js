import { useTask } from '../context/TaskContext';
import { createTask } from '../utils/taskHelpers';

function useTaskManager() {
  const { tasks, addTask, updateTask, deleteTask, filter, searchTerm, setFilter, setSearchTerm } = useTask();

	// This hook manages task operations and provides filtered tasks and stats
  const getFilteredTasks = () => {
    return tasks.filter(task => {
      const matchesFilter = filter === 'all' || task.status === filter;
      const matchesSearch = task.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  };

	// This function calculates task statistics
  const getTaskStats = () => {
    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(task => task.status === 'completed').length;
    const activeTasks = totalTasks - completedTasks;
    return { totalTasks, completedTasks, activeTasks };
  };

	// This function creates a new task with default values
  const addNewTask = (title, description, priority = 'medium') => {
    const newTask = createTask(title, description, priority);
    addTask(newTask);
    return newTask;
  };

	// This function toggles the status of a task between 'active' and 'completed'
  const toggleTaskStatus = (taskId) => {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      updateTask({
        ...task,
        status: task.status === 'completed' ? 'active' : 'completed',
        updatedAt: new Date()
      });
    }
  };

	//
  const bulkDeleteCompleted = () => {
    const activeTasks = tasks.filter(task => task.status === 'active');
    tasks.filter(task => task.status === 'completed').forEach(task => {
      deleteTask(task.id);
    });
  };

  return {
    tasks,
    filteredTasks: getFilteredTasks(),
    taskStats: getTaskStats(),
    filter,
    searchTerm,
    setFilter,
    setSearchTerm,
    addNewTask,
    updateTask,
    deleteTask,
    toggleTaskStatus,
    bulkDeleteCompleted
  };
}

export default useTaskManager;