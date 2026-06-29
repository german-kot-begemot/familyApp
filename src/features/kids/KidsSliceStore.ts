import { StateCreator } from 'zustand';
import { Child } from './kidsTypes';

export interface KidsSliceState {
  kids: Child[];
  setKids: (kids: Child[]) => void;
  addKid: (kid: Child) => void;
  removeKid: (kidId: string) => void;
  updateKid: (updatedKid: Child) => void;
}

export const createKidsSlice: StateCreator<KidsSliceState> = (set) => ({
  kids: [],
  setKids: (kids) => set({ kids }),
  addKid: (kid) => {
    set((state) => ({ kids: [...state.kids, kid] }));
  },
  removeKid: (kidId) => {
    set((state) => ({
      kids: state.kids.filter((kid) => kid.id !== kidId),
    }));
  },
  updateKid: (updatedKid) => {
    set((state) => ({
      kids: state.kids.map((kid) =>
        kid.id === updatedKid.id ? updatedKid : kid,
      ),
    }));
  },
});
