import { StateCreator } from 'zustand';
import { Task } from './tasksTypes';

export interface TasksSliceState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  updateTask: (updatedTask: Task) => void;
}

export const createTasksSlice: StateCreator<TasksSliceState> = (set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => {
    set((state) => ({ tasks: [...state.tasks, task] }));
  },
  removeTask: (taskId) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    }));
  },
  updateTask: (updatedTask) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      ),
    }));
  },
});
