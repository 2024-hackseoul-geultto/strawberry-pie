import { votingChoice, resultOpenTiming } from '../constants';

interface UserInfo {
  id: string;
  nickName: string;
  password: string;
  email: string;
  profileSrc: string;
}

interface CurrentUser extends UserInfo {
  userId: number;
}

type VotingChoice = (typeof votingChoice)[number]['value'];

type ResultOpenTime = (typeof resultOpenTiming)[number]['value'];

interface VoteItem {
  id: number;
  title: string;
  groupId?: number;
  type: VotingChoice;
  startDate: string;
  endDate: string;
  description: string;
}

interface ChoiceItem {
  title: string;
  imgSrc: string;
  summary: string;
  description: string;
}

interface ChoiceList {
  [voteId: number]: ChoiceItem[];
}

interface Voter {
  name: string;
  email: string;
}

interface VoterList {
  [voteId: number]: Voter[];
}

interface Group {
  id: number;
  profileSrc: string;
  name: string;
  credit: number;
  description: string;
  voteIds?: number[];
}

export type { UserInfo, CurrentUser, VotingChoice, VoteItem, ChoiceList, ResultOpenTime, ChoiceItem, Voter, VoterList, Group };
