import { Rewards } from '@/pages/RewardsPage/rewardsTypes';
// import axios, { isAxiosError } from 'axios';
// import { API_URL_REWARDS } from './apiConfig';
import { mockRewards } from './mockData';

// export const getRewarsByFamilyId = async (
//   familyId: string,
// ): Promise<Rewards> => {
//   try {
//     const response = await axios.get<Rewards>(
//       `${API_URL_REWARDS}?familyId=${familyId}`,
//     );
//     return response.data;
//   } catch (error) {
//     if (isAxiosError(error)) {
//       const message = error.response?.data.message ?? 'Server error';
//       throw new Error(message, { cause: error });
//     }
//     throw new Error('Unexpected error occurred', { cause: error });
//   }
// };

//fetch rewards with mock data
export const getRewarsByFamilyId = async (
  familyId: string,
): Promise<Rewards> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  if (familyId === 'error') {
    throw new Error('Failed to fetch rewards');
  }
  return { rewards: mockRewards as Rewards['rewards'] };
};
