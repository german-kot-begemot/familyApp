export type Reward = {
  id: string;
  familyId: string;
  image?: string;
  title: string;
  description: string;
  points: number;
};

export type Rewards = {
  rewards: Reward[];
};
