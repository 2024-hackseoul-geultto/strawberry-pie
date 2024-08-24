import { IoIosArrowBack } from 'react-icons/io';
import type { VoteItem } from '../../../types';
import { LuMoreHorizontal } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import { Item, IconButton, DoubleButton } from '../../../components/ui';

interface VoteMainProps {
  onShowMore: (choice: VoteItem) => void;
  onBack: () => void;
  onSelectedIdx: (id: number) => void;
  selectedIdx: number;
  currentVote: VoteItem;
  choiceList: VoteItem[];
}

const VoteMain = (props: VoteMainProps) => {
  const { currentVote, choiceList, onBack = () => {}, onSelectedIdx, onShowMore = () => {}, selectedIdx } = props;
  const navigate = useNavigate();

  const handleBtnNext = () => {
    navigate('/vote-complete');
  };

  return (
    <div>
      <header className="header">
        <IoIosArrowBack size={28} color="#f6fcff" style={{ cursor: 'pointer' }} onClick={onBack} />
      </header>

      <h1 className="main-title">{currentVote.title}</h1>
      <p style={{ color: '#B1B1B1', fontSize: 16, marginTop: '8px' }}>
        {currentVote.startDate} ~ {currentVote.endDate}
      </p>
      <div style={{ color: '#DAF5FF', fontSize: 17, marginTop: '25px' }}>{currentVote.description}</div>

      <div className="input-container">
        {choiceList.map((item, index) => (
          <Item
            key={index}
            title={item.title}
            description={item.summary}
            image={item?.imgSrc}
            onClick={() => onSelectedIdx(index)}
            style={selectedIdx === index ? { border: '2px solid #00A6F0', cursor: 'pointer' } : { border: '2px solid #2a2d34', cursor: 'pointer' }}
          >
            <IconButton icon={<LuMoreHorizontal />} width="30px" height="30px" className="btn-delete" onClick={() => onShowMore(item)} />
          </Item>
        ))}
      </div>
      <footer className="footer">
        <DoubleButton onClick={handleBtnNext}>투표하기</DoubleButton>
      </footer>
    </div>
  );
};

export default VoteMain;
