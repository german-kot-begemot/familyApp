export type TaskStatus = 'todo' | 'in_progress' | 'pending_review' | 'approved';

export type Task = {
  id: string;
  familyId: string;
  image?: string;
  title: string;
  description: string;
  points: number;
  status: TaskStatus;
  assignedTo?: string; // Имя или ID ребенка, который взял задачу
};

export type Tasks = {
  tasks: Task[];
};
