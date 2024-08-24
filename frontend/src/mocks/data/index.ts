import type { VoteItem, ChoiceList, CurrentUser } from '../../types';

const users: CurrentUser[] = [{ id: 'rmaals', userId: 1, nickName: 'John Doe', email: 'ma@na.com', password: '1234', profileSrc: '' }];

const voteList: VoteItem[] = [
  {
    id: 1,
    title: '제 12회 자이 아파트 아파트장 선거',
    type: 'single',
    startDate: '2024-3-01 12:00',
    endDate: '2024-3-31 12:00',
    description: '2024년 자이 아파트 아파트장 선거입니다. 투표해주세요.',
  },
];

const voteChoiceList: ChoiceList = {
  1: [
    {
      title: '김총총',
      imgSrc: '',
      summary: '함께 살아가는 자이 아파트, 김총총과 함께',
      description:
        '안녕하세요. 김총총입니다. 저는 슝슝 대학교의 교수로 근무하고 있습니다. 202년에 자이 아파트에 입주하였고, 이후로 아파트의 발전을 위해 노력해왔습니다. 저와 함께 자이 아파트를 더욱 발전시켜 나가요.',
    },
    {
      title: '이총총',
      imgSrc: '',
      summary: '혁신적인 인재, 아파트 장이 되겠습니다.',
      description: '저는 김포에서 태어나, 김포의 아들로 자랐습니다. 2020년에 자이 아파트에 입주하였고, 이후로 아파트의 발전을 위해 노력해왔습니다. 저와 함께 자이 아파트를 더욱 발전시켜 나가요.',
    },
  ],
};

export { users, voteList, voteChoiceList };
