import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import userApi from '../apis/user';

import type { UserInfo, CurrentUser } from '../types';

interface UserStore {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  fetchUser: (id: CurrentUser['id']) => Promise<void>;
  signup: (data: UserInfo) => Promise<void>;
  signout: () => void;
}

const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: null,

      setUser: (user: UserInfo) => set({ user }),

      fetchUser: async (id) => {
        const response = await fetch('/user?id=' + id);
        const data = await response.json();
        set({ user: data });
      },

      signup: async (data: UserInfo) => {
        const result = await userApi.createUser(data);
        set({ user: result });
      },

      signout: () => set({ user: null }),
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

export { useUserStore };
