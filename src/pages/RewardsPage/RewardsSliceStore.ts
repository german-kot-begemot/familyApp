import { StateCreator } from 'zustand';
import { Reward } from './rewardsTypes';

export interface RewardsSliceState {
  rewards: Reward[];
  setRewards: (rewards: Reward[]) => void;
  addReward: (reward: Reward) => void;
  removeReward: (rewardId: string) => void;
  updateReward: (updatedReward: Reward) => void;
}

export const createRewardsSlice: StateCreator<RewardsSliceState> = (set) => ({
  rewards: [],
  setRewards: (rewards) => set({ rewards }),
  addReward: (reward) => {
    set((state) => ({ rewards: [...state.rewards, reward] }));
  },
  removeReward: (rewardId) => {
    set((state) => ({
      rewards: state.rewards.filter((reward) => reward.id !== rewardId),
    }));
  },
  updateReward: (updatedReward) => {
    set((state) => ({
      rewards: state.rewards.map((reward) =>
        reward.id === updatedReward.id ? updatedReward : reward,
      ),
    }));
  },
});
