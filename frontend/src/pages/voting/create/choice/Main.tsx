import { useNavigate, useSearchParams } from 'react-router-dom';

import { ProgressBar, DoubleButton, IconButton, Item } from '../../../../components/ui';
import { FaPlus } from 'react-icons/fa';

import type { ChoiceItem } from '../../../../types';

import './style.scss';

interface VotingChoiceListProps {
  onOpenDetail: () => void;
  voteList: ChoiceItem[];
}

const VotingChoiceList = (props: VotingChoiceListProps) => {
  const { onOpenDetail, voteList } = props;
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();
  const voteId = searchParams.get('voteId') ? Number(searchParams.get('voteId')) : 0;

  const btnNextDisabled = !voteList.length;

  const handleOpenDetail = () => {
    onOpenDetail();
  };

  const handleBtnNext = () => {
    navigate(`/create-voting-voter?voteId=${voteId}`);
  };

  return (
    <div>
      <header>
        <ProgressBar step={2} maxStep={3} />
      </header>
      <h1 className="main-title">
        선택지나 후보를
        <br />
        추가해 주세요.
      </h1>
      <div className="icon-button-wrapper">
        <IconButton icon={<FaPlus />} width="120px" onClick={handleOpenDetail} />
      </div>

      <div className="input-container">
        {voteList.map((item, index) => (
          <Item key={index} title={item.title} description={item.description} image={item.imgSrc} />
        ))}
      </div>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <DoubleButton disabled={btnNextDisabled} onClick={handleBtnNext}>
          유권자 추가하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default VotingChoiceList;
