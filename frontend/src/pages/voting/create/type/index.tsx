import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, DoubleButton, SelectGroup, TextBox } from '../../../../components/ui';

import './style.scss';

const VotingSelectType = () => {
  const [selectedValue, setSelectedValue] = useState('option1');

  const options = [
    { label: '연속성 투표', value: 'option1' },
    { label: '일회성 투표', value: 'option2' },
  ];

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

      <div className="input-container">
        <SelectGroup options={options} value={selectedValue} onChange={setSelectedValue} />
      </div>
      <TextBox className="textarea">투표 설명~~~</TextBox>

      <footer className="footer" style={{ marginTop: '35px' }}>
        <Link to={selectedValue === 'option2' ? '/create-voting-choice' : '/create-group'}>
          <DoubleButton>투표 타입 선택하기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default VotingSelectType;
