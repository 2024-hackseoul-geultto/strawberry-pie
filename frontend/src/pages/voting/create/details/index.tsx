import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useVoteStore } from '../../../../stores/vote';
import type { ResultOpenTime } from '../../../../types';
import { resultOpenTiming } from '../../../../constants';
import { ProgressBar, DatePicker, DoubleButton, SelectGroup, LabelInput, TextArea } from '../../../../components/ui';

import './style.scss';

const VotingDetail = () => {
  const navigate = useNavigate();
  const voteStore = useVoteStore();

  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedValue, setSelectedValue] = useState<ResultOpenTime>('after');
  const [textValue, setTextValue] = useState('');

  const btnNextDisabled = !name || !startDate || !endDate || !textValue.trim().length;

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleNextClick = () => {
    const id = voteStore.voteList.length + 1;
    voteStore.setVote({ id, title: name, startDate, endDate, description: textValue, type: 'single' });

    navigate(`/create-voting-choice?vote-id=${id}`);
  };

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
        <DatePicker label="투표기간" type="range" name={['시작일', '종료일']} value={[startDate, endDate]} onStartDateChange={handleStartDateChange} onEndDateChange={handleEndDateChange} />

        <SelectGroup
          label="투표 결과 확인 시점"
          className="flex-container"
          options={resultOpenTiming}
          value={selectedValue}
          onChange={setSelectedValue}
          optionStyle={{ height: '52px', borderRadius: '8px' }}
        />
      </div>
      <TextArea className="textarea" label="투표 설명" value={textValue} onChange={setTextValue} />

      <footer className="footer">
        <DoubleButton disabled={btnNextDisabled} onClick={handleNextClick}>
          투표 후보 추가하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default VotingDetail;
