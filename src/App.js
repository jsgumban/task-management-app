import './App.css';
import { TaskProvider } from './context/TaskContext';
import DataProvider from './components/DataProvider';
import TaskForm from './components/TaskForm';
import TaskCounter from './components/TaskCounter';
import SearchBar from './components/SearchBar';
import TaskFilter from './components/TaskFilter';
import TaskList from './components/TaskList';

function App() {
  return (
    <TaskProvider>
      <div className="container">
        <h1>Task Management Dashboard</h1>
        <DataProvider
          render={(data) => (
            <>
              <TaskCounter />
              <TaskForm />
              <SearchBar />
              <TaskFilter />
              <TaskList />
            </>
          )}
        />
      </div>
    </TaskProvider>
  );
}

export default App;
