import { AppTheme } from '@/shared/types/appTypes';

export type Child = {
  id: string;
  familyId: string;
  name: string;
  age: number;
  avatarUrl?: string;
  coins: number;
  level: number;
  completedTasks: number;
  pendingTasks: number;
  streak: number;
  theme: AppTheme;
};
