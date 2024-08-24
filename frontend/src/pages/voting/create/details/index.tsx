import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useVoteStore } from '../../../../stores/vote';
import type { ResultOpenTime, ZkSchema } from '../../../../types';
import { resultOpenTiming, votingChoice } from '../../../../constants';

import { ProgressBar, DatePicker, DoubleButton, SelectGroup, LabelInput, TextArea, IconButton } from '../../../../components/ui';

import './style.scss';
import { IoIosSend } from 'react-icons/io';

// zkpass sdk
import TransgateConnect from '@zkpass/transgate-js-sdk';
import { verifyEVMMessageSignature } from './helper';
import { Select } from '../../../../components/ui/Select/Select.tsx';
import { Result } from './types';

const VotingDetail = () => {
  const navigate = useNavigate();
  const voteStore = useVoteStore();
  const [searchParams] = useSearchParams();

  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [selectedValue, setSelectedValue] = useState<ResultOpenTime>('after');
  const [textValue, setTextValue] = useState('');
  const [authZkpass, setAuthZkpass] = useState<boolean>(false);

  const btnNextDisabled = !name || !startDate || !endDate || !textValue.trim().length || !authZkpass;

  const [appid, setAppid] = useState<string>('b72ba31d-a147-42eb-a903-71fe0b999042');
  const [schemaIds, setSchemaIds] = useState<ZkSchema[]>([
    { label: 'facebook 인증', value: 'a2011b0d43444109a5c539cb77a3272b' },
    { label: '인스타그램 팔로워 100 이상', value: 'a5abacc42ad54f3884f213963d4c5a6b' },
  ]);
  const [schemaId, setSchemaId] = useState<ZkSchema>({ label: 'facebook 인증', value: 'a2011b0d43444109a5c539cb77a3272b' });

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const handleNextClick = () => {
    const voteId = voteStore.voteList.length + 1;
    const groupId = searchParams.get('groupId') ? Number(searchParams.get('groupId')) : null;
    const type = groupId ? 'continuous' : 'single';
    let data = { id: voteId, title: name, startDate, endDate, description: textValue, type };

    if (groupId) data['groupId'] = groupId;

    voteStore.setVote(data);

    const url = groupId ? `/create-voting-choice?voteId=${voteId}&groupId=${groupId}` : `/create-voting-choice?voteId=${voteId}`;
    navigate(url);
  };

  const handleRequestZkpass = () => {
    console.log(schemaId.value, appid);
    start([schemaId.value], appid.trim()).then((r) => console.log(r));
  };

  const start = async (schemas: string[], appid: string) => {
    try {
      const connector = new TransgateConnect(appid);

      const isAvailable = await connector.isTransgateAvailable();
      if (!isAvailable) {
        return alert('Please install zkPass TransGate');
      }

      const resultList: any[] = [];
      while (schemas.length > 0) {
        const schemaId = schemas.shift() as string;

        const res = (await connector.launch(schemaId)) as Result;
        resultList.push(res);
        console.log('result', res);
        const verifyResult = verifyEVMMessageSignature(res.taskId, schemaId, res.uHash, res.publicFieldsHash, res.validatorSignature, res.validatorAddress);
        console.log('verifyResult', verifyResult);
      }
      if (resultList.length >= 1) {
        setAuthZkpass(true);
      } else {
        setAuthZkpass(false);
      }

      console.log(authZkpass);
    } catch (err) {
      alert(JSON.stringify(err));
      console.log('error', err);
    }
  };

  const handleSchemaId = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setSchemaId(e.target.value);
  };

  useEffect(() => {
    console.log(schemaIds);
  }, []);

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
      <Select options={schemaIds} value={''} onChange={handleSchemaId} className="input-container" />
      <IconButton icon={<IoIosSend size={24} />} width="130px" onClick={handleRequestZkpass} />
      <footer className="footer">
        <DoubleButton disabled={btnNextDisabled} onClick={handleNextClick}>
          투표 추가하기
        </DoubleButton>
      </footer>
    </div>
  );
};

export default VotingDetail;
