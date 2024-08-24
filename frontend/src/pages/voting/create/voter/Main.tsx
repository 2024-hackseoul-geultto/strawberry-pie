import { useNavigate } from 'react-router-dom';
import { useVoteStore } from '../../../../stores/vote';

import { ProgressBar, DoubleButton, IconButton, Item } from '../../../../components/ui';
import { FaPlus } from 'react-icons/fa';
import { MdRemove } from 'react-icons/md';

import type { Voter } from '../../../../types';

import './style.scss';

interface VotingVoterListProps {
  onOpenDetail: () => void;
  onDelete: (email: string) => void;
  voterList: Voter[];
  voteId: number;
}

const VotingVoterList = (props: VotingVoterListProps) => {
  const { onOpenDetail, onDelete, voterList, voteId } = props;
  const navigate = useNavigate();

  const voteStore = useVoteStore();

  const btnNextDisabled = !voterList.length;

  const handleOpenDetail = () => {
    onOpenDetail();
  };

  const handleBtnNext = () => {
    voteStore.setVoterList(voteId, voterList);
    navigate('/create-voting-complete'); // TODO: 시연을 위해 임시로 /create-voting-complete로 이동
  };

  return (
    <div>
      <header>
        <ProgressBar step={2} maxStep={3} />
      </header>
      <h1 className="main-title">
        투표에 참여할 <br />
        유권자를 추가해주세요.
      </h1>
      <div className="icon-button-wrapper">
        <IconButton icon={<FaPlus />} width="120px" onClick={handleOpenDetail} />
      </div>

      <div className="input-container">
        {voterList.map((item, index) => (
          <Item showImage={false} key={index} title={item.name} description={item.email}>
            <IconButton icon={<MdRemove />} width="30px" height="30px" className="btn-delete" onClick={() => onDelete(item.email)} />
          </Item>
        ))}
      </div>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <DoubleButton disabled={btnNextDisabled} onClick={handleBtnNext}>
          투표 생성 완료하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default VotingVoterList;
