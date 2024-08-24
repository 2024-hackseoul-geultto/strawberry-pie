import { create } from 'zustand';
import type { UserInfo } from '../types';

interface SignupStore {
  user: UserInfo | null;
  setId: (id: string) => void;
  setPassword: (password: string) => void;
  setEmail: (email: string) => void;
  setNickName: (nickName: string) => void;
  setProfileSrc: (profileSrc: string) => void;
}

const DEFAULT_USER: UserInfo = {
  id: '',
  password: '',
  email: '',
  nickName: '',
  profileSrc: '',
};

const useSignupStore = create<SignupStore>((set) => ({
  user: null,

  setId: (id) =>
    set((state) => ({
      user: state.user ? { ...state.user, id } : DEFAULT_USER,
    })),

  setPassword: (password) =>
    set((state) => ({
      user: state.user ? { ...state.user, password } : DEFAULT_USER,
    })),

  setEmail: (email) =>
    set((state) => ({
      user: state.user ? { ...state.user, email } : DEFAULT_USER,
    })),

  setNickName: (nickName) =>
    set((state) => ({
      user: state.user ? { ...state.user, nickName } : DEFAULT_USER,
    })),

  setProfileSrc: (profileSrc) =>
    set((state) => ({
      user: state.user ? { ...state.user, profileSrc } : DEFAULT_USER,
    })),
}));

export { useSignupStore };
