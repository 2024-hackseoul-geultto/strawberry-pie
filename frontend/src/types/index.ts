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

export type { UserInfo, CurrentUser };
