# Task Management Dashboard

A simple task management application built with React.

**Live Demo**: [https://task-management-app-two-xi.vercel.app/](https://task-management-app-two-xi.vercel.app/)

## Features

- Create, update, and delete tasks
- Search tasks by title
- Filter by status (All, Active, Completed)
- Task priorities (Low, Medium, High)
- Local storage persistence
- Responsive design

## Technical Implementation

### React Patterns
- Custom hooks (`useLocalStorage`, `useTaskManager`)
- Render props pattern (`DataProvider`)
- Performance optimizations (React.memo, useCallback, useMemo)
- Context API for state management

### Project Structure
```
src/
├── components/     # UI components
├── context/        # State management
├── hooks/          # Custom hooks
└── utils/          # Helper functions
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Technologies

- React 18
- Bootstrap 5
- Context API
- Local Storage
- React Testing Library

Tasks are automatically saved to localStorage and persist between sessions.

## Demo

**Live Application**: [https://task-management-app-two-xi.vercel.app/](https://task-management-app-two-xi.vercel.app/)

The deployed app demonstrates all features including task creation, editing, filtering, and persistence. Try creating tasks and refreshing the page to see localStorage in action.

## Deployment

Deployed using Vercel for fast, reliable hosting with automatic deployments from the main branch.
