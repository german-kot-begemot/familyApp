import { AuthSliceState } from '@/features/auth/authSliceStore';
import { KidsSliceState } from '@/features/kids/KidsSliceStore';
import { RewardsSliceState } from '@/pages/RewardsPage/RewardsSliceStore';
import { TasksSliceState } from '@/pages/TasksPage/TasksSliceStore';

export type StoreState = AuthSliceState &
  TasksSliceState &
  RewardsSliceState &
  KidsSliceState;
