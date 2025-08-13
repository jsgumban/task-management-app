export const generateId = () => {
  return Date.now().toString();
};

export const createTask = (title, description, priority = 'medium') => {
  return {
    id: generateId(),
    title,
    description,
    status: 'active',
    priority,
    createdAt: new Date(),
    updatedAt: new Date()
  };
};