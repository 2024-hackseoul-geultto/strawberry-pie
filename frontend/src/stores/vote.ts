import { create } from 'zustand';
import { ChoiceList, VoteItem } from '../types';

interface VoteStore {
  voteList: VoteItem[];
  voteChoiceList: ChoiceList;
  setVote: (vote: VoteItem) => void;
  setVoteChoiceList: (voteId: number, choiceList: ChoiceList[number][]) => void;
}

const useVoteStore = create<VoteStore>((set) => ({
  voteList: [],
  voteChoiceList: {},
  setVote: (vote) => set((state) => ({ voteList: [...state.voteList, vote] })),
  setVoteChoiceList: (voteId, choiceList) => set((state) => ({ voteChoiceList: { ...state.voteChoiceList, [voteId]: [state.voteChoiceList[voteId], ...choiceList] } })),
}));

export { useVoteStore };
