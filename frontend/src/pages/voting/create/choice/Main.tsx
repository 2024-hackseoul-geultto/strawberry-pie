import { Link } from 'react-router-dom';

import { ProgressBar, DoubleButton, IconButton, Item } from '../../../../components/ui';
import { FaPlus } from 'react-icons/fa';

import './style.scss';

interface VotingChoiceListProps {
  onOpenDetail: () => void;
}

const VotingChoiceList = (props: VotingChoiceListProps) => {
  const { onOpenDetail } = props;

  const handleOpenDetail = () => {
    onOpenDetail();
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
        <Item title="선택지나 후보" description="선택지나 후보를 추가해주세요." />
        <Item title="선택지나 후보" description="선택지나 후보를 추가해주세요." />
      </div>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <Link to="/create-voting-detail">
          <DoubleButton>투표 생성하기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default VotingChoiceList;
