// import { API_URL_KIDS } from '@/shared/api/apiConfig';
// import axios from 'axios';

import { mockKids } from '@/shared/api/mockData';
import { Child } from './kidsTypes';

// export const getKidsByFamilyId = async (familyId: string) => {
//   try {
//     const response = await axios.get(`${API_URL_KIDS}?familyId=${familyId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

//get kids with mock data
export const getKidsByFamilyId = async (familyId: string): Promise<Child[] | undefined> => {
  try {
    const response = await new Promise<Child[]>((resolve) => {
      setTimeout(() => {
        resolve(mockKids.filter((kid) => kid.familyId === familyId) as Child[]);
      }, 1000);
    });
    return response;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};
