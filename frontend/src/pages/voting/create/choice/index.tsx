import { useState } from 'react';

import Main from './Main';
import Detail from './Detail';

import './style.scss';

const VotingSelectType = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [voteList, setVoteList] = useState([]);

  const handleCreate = (data) => {
    setOpenDetail(false);
    setVoteList([...voteList, data]);
  };

  return <div>{openDetail ? <Detail onCreate={handleCreate} /> : <Main onOpenDetail={() => setOpenDetail(true)} />}</div>;
};

export default VotingSelectType;
