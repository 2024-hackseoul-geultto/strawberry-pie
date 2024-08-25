import type { VoteItem, ChoiceList, CurrentUser } from '../../types';
const users: CurrentUser[] = [{ id: 'rmaals', userId: 1, nickName: 'John Doe', email: 'ma@na.com', password: '1234', profileSrc: '' }];

const voteList: VoteItem[] = [
  {
    id: 1,
    title: 'Influencer Fitness Preference Voting',
    type: 'single',
    startDate: '2024-08-25 12:00',
    endDate: '2024-08-31 12:00',
    description: '인플루언서 운동 선호도 투표',
  },
];

const voteChoiceList: ChoiceList = {
  1: [
    {
      title: 'Climbing',
      imgSrc: '/climbing.webp',
      summary: '',
      description:
        '',
    },
    {
      title: 'Golf',
      imgSrc: '/golf.webp',
      summary: '',
      description: '',
    },
    {
      title: 'Fitness',
      imgSrc: '/benchpress.webp',
      summary: '',
      description: '',
    }
  ],
};

export { users, voteList, voteChoiceList };
