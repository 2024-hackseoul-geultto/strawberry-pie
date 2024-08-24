import { create } from 'zustand';
import type { Group } from '../types';

interface GroupStore {
  groupList: Group[];
  setGroup: (group: Group) => void;
}

const useGroupStore = create<GroupStore>((set) => ({
  groupList: [],
  setGroup: (group) => set((state) => ({ groupList: [...state.groupList, group] })),
}));

export { useGroupStore };
