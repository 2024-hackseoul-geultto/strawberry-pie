import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ProgressBar, DatePicker, DoubleButton, SelectGroup, LabelInput, TextArea } from '../../../../components/ui';

import './style.scss';

const VotingChoice = () => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedValue, setSelectedValue] = useState('option1');
  const [textValue, setTextValue] = useState('');

  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
  ];

  return (
    <div>
      <header>
        <ProgressBar step={3} maxStep={4} />
      </header>
      <h1 className="main-title">
        투표를
        <br />
        생성해 주세요.
      </h1>

      <div className="input-container">
        <LabelInput label="투표명" value={name} onChange={(e) => setName(e.target.value)} />
        <DatePicker label="투표기간" type="range" name={['시작일', '종료일']} value={[startDate, endDate]} onStartDateChange={setStartDate} onEndDateChange={setEndDate} />

        <SelectGroup label="투표 결과 확인 시점" className="flex-container" options={options} value={selectedValue} onChange={setSelectedValue} optionStyle={{ height: '52px', borderRadius: '8px' }} />
      </div>
      <TextArea className="textarea" label="투표 설명" value={textValue} onChange={setTextValue} />

      <footer className="footer">
        <Link to="/create-voting-choice">
          <DoubleButton>투표 생성하기</DoubleButton>
        </Link>
      </footer>
    </div>
  );
};

export default VotingChoice;
