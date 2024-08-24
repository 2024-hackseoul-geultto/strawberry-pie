import { useState } from 'react';
import { Link } from 'react-router-dom';
import { votingChoice } from '../../../../constants';
import { ProgressBar, DoubleButton, SelectGroup, TextBox } from '../../../../components/ui';

import './style.scss';

const VotingSelectType = () => {
  const [selectedOption, setSelectedOption] = useState('single');
  const currentOption = votingChoice.find((option) => option.value === selectedOption);

  return (
    <div>
      <header>
        <ProgressBar step={1} maxStep={3} />
      </header>
      <h1 className="main-title">
        생성할 투표의
        <br />
        타입을 선택해 주세요.
      </h1>

      <SelectGroup options={votingChoice} value={selectedOption} onChange={setSelectedOption} className="input-container" />

      <TextBox className="textarea">{currentOption?.description}</TextBox>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <Link to={selectedOption === 'single' ? '/create-voting-detail' : '/create-group'}>
          <DoubleButton>투표 생성하기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default VotingSelectType;
