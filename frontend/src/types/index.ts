
interface UserInfo {
  name: string;
  password: string;
  email: string;
  profileSrc: string;
}

interface CurrentUser extends UserInfo {
  id: number;
}

export type { UserInfo, CurrentUser };