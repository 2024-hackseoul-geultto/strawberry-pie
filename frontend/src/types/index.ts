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

interface ZkSchema {
  value: string,
  label: string
}

interface VoteItem {
  id: number;
  title: string;
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

export type { UserInfo, CurrentUser, VotingChoice, VoteItem, ChoiceList, ResultOpenTime, ZkSchema };
