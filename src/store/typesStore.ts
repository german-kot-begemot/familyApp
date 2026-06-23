import { AuthSliceState } from '@/features/auth/authSliceStore';
import { TasksSliceState } from '@/pages/TasksPage/TasksSliceStore';

export type StoreState = AuthSliceState & TasksSliceState;
