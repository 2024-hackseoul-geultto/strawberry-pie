import { votingChoice } from '../constants';

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

export type { UserInfo, CurrentUser, VotingChoice };
