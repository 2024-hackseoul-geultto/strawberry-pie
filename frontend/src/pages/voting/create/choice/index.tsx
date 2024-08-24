import { useState } from 'react';

import Main from './Main';
import Detail from './Detail';

import type { ChoiceItem } from '../../../../types';

import './style.scss';

const VotingSelectType = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [voteList, setVoteList] = useState<ChoiceItem[]>([]);

  const handleCreate = (data: ChoiceItem) => {
    setOpenDetail(false);
    setVoteList([...voteList, data]);
  };

  return <div>{openDetail ? <Detail onBack={() => setOpenDetail(false)} onCreate={handleCreate} /> : <Main onOpenDetail={() => setOpenDetail(true)} voteList={voteList} />}</div>;
};

export default VotingSelectType;
