import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Main from './Main';
import Detail from './Detail';

import type { Voter } from '../../../../types';

import './style.scss';

const VotingSelectType = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [voterList, setVoterList] = useState<Voter[]>([]);

  const [searchParams] = useSearchParams();
  const voteId = searchParams.get('voteId') ? Number(searchParams.get('voteId')) : 0;

  const handleCreate = (data: Voter) => {
    setOpenDetail(false);
    setVoterList([...voterList, data]);
  };

  const handleDelete = (email: string) => {
    setVoterList(voterList.filter((voter) => voter.email !== email));
  };

  return (
    <div>
      {openDetail ? (
        <Detail onBack={() => setOpenDetail(false)} onCreate={handleCreate} />
      ) : (
        <Main voteId={voteId} onOpenDetail={() => setOpenDetail(true)} voterList={voterList} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default VotingSelectType;
