import { useState } from 'react';
import { useVoteStore } from '../../../stores/vote';
import type { ChoiceItem } from '../../../types';

import { voteChoiceList, voteList } from '../../../mocks/data';

import Main from './Main';
import Detail from './Detail';

import './style.scss';

const VotingVote = () => {
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedChoiceIdx, setSelectedChoiceIdx] = useState<number>(0);
  const [currentChoice, setCurrentChoice] = useState<ChoiceItem>({});

  const voteStore = useVoteStore();
  const currentVote = voteStore.voteList.at(-1) || voteList[0];
  const choiceList = currentVote?.choices || voteChoiceList[1];

  const handleShowMore = (choice: ChoiceItem) => {
    setCurrentChoice(choice);
    setOpenDetail(true);
  };

  const handleSelectedIdx = (idx: number) => {
    setSelectedChoiceIdx(idx);
  };

  return (
    <div>
      {openDetail ? (
        <Detail choice={currentChoice} onBack={() => setOpenDetail(false)} />
      ) : (
        <Main currentVote={currentVote} onShowMore={handleShowMore} choiceList={choiceList} onSelectedIdx={handleSelectedIdx} selectedIdx={selectedChoiceIdx} />
      )}
    </div>
  );
};

export default VotingVote;
