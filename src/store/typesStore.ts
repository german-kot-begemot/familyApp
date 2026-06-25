import { AuthSliceState } from '@/features/auth/authSliceStore';
import { RewardsSliceState } from '@/pages/RewardsPage/RewardsSliceStore';
import { TasksSliceState } from '@/pages/TasksPage/TasksSliceStore';

export type StoreState = AuthSliceState & TasksSliceState & RewardsSliceState;
