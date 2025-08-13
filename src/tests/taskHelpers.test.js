import { createTask } from '../utils/taskHelpers';

describe('taskHelpers', () => {
  describe('createTask', () => {
    test('creates a task with required fields', () => {
      const task = createTask('Test Task', 'Test Description', 'high');
      
      expect(task).toHaveProperty('id');
      expect(task).toHaveProperty('title', 'Test Task');
      expect(task).toHaveProperty('description', 'Test Description');
      expect(task).toHaveProperty('status', 'active');
      expect(task).toHaveProperty('priority', 'high');
      expect(task).toHaveProperty('createdAt');
      expect(task).toHaveProperty('updatedAt');
    });
  });
});