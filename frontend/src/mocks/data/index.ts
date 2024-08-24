import type { VoteItem, ChoiceList, CurrentUser } from '../../types';

const users: CurrentUser[] = [{ id: 'rmaals', userId: 1, nickName: 'John Doe', email: 'ma@na.com', password: '1234', profileSrc: '' }];

const voteList: VoteItem[] = [
  {
    id: 1,
    title: '투표1',
    type: 'single',
    startDate: '2021-10-01',
    endDate: '2021-10-10',
    description: '투표 설명',
  },
];

const voteChoiceList: ChoiceList = {
  1: [
    {
      title: '선택1',
      imgSrc: '',
      summary: '선택1 요약',
      description: '선택1 설명',
    },
    {
      title: '선택2',
      imgSrc: '',
      summary: '선택2 요약',
      description: '선택2 설명',
    },
  ],
};

export { users, voteList, voteChoiceList };
