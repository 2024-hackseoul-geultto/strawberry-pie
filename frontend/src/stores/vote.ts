import { create } from 'zustand';
import { ChoiceList, VoterList, VoteItem, Voter } from '../types';

interface VoteStore {
  voteList: VoterList;
  voterList: Voter[];
  voteChoiceList: ChoiceList;
  setVote: (vote: VoteItem) => void;
  setVoteChoiceList: (voteId: number, choiceList: ChoiceList[number][]) => void;

  setVoterList: (voteId: number, voterList: Voter[]) => void;
}

const useVoteStore = create<VoteStore>((set) => ({
  voteList: [],
  voteChoiceList: {},
  voterList: [],
  setVote: (vote) => set((state) => ({ voteList: [...state.voteList, vote] })),
  setVoteChoiceList: (voteId, choiceList) => set((state) => ({ voteChoiceList: { ...state.voteChoiceList, [voteId]: [state.voteChoiceList[voteId], ...choiceList] } })),
  setVoterList: (voteId, voterList) => set((state) => ({ voteList: { ...state.voteList, [voteId]: [...state.voteList[voteId], ...voterList] } })),
}));

export { useVoteStore };
